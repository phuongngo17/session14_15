"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

interface Product {
    id: number;
    title: string;
    price?: number;
    cost?: number;
    amount?: number;
    description: string;
}

const ProductList = () => {
    const [products, setProducts] = useState<Product[]>([]);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(Infinity);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get<Product[]>('https://fakestoreapi.com/products');
                setProducts(response.data); 

            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts();
    }, []);

    const getProductPrice = (product: Product): number => {
        if ('price' in product) {
            return product.price!;
        }
        if ('cost' in product) {
            return product.cost!;
        }
        if ('amount' in product) {
            return product.amount!;
        }
        return 0;
    };

    const filteredProducts = products.filter(
        (product) =>
            getProductPrice(product) >= minPrice && getProductPrice(product) <= maxPrice
    );

    return (
        <div>
            <h1>Danh sách sản phẩm</h1>
            <div>
                <label>Giá tối thiểu:</label>
                <input
                    type="number"
                    value={minPrice}
                    onChange={(e) => setMinPrice(Number(e.target.value))}
                />
                <label>Giá tối đa:</label>
                <input
                    type="number"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                />
            </div>
            <ul>
                {filteredProducts.map((product) => (
                    <li key={product.id}>
                        <h3>{product.title}</h3>
                        <p>Price: ${getProductPrice(product)}</p>
                        <p>{product.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductList;