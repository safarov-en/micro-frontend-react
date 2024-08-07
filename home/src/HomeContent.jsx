import React, {useState, useEffect} from "react";
import { getProducts, currency } from "./products";

export default function HomeContent() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts().then(setProducts)
    }, [])

    return (
        <div className="grid grid-cols-4 gap-5">
            {products.map((product) => (
                <div key={product.id}>
                    <img className="h-36 w-52" src={product.image} alt={product.name} />
                    <div className="h-36 font-bold">
                        <a>{product.name}</a>
                    </div>
                    <div className="text-3xl mt-4">Цена: {currency.format(product.price)}</div>
                    <div className="text-sm mt-4">{product.description}</div>
                </div>
            ))}
        </div>
    )
}