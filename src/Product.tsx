import axios from "axios";
import { useEffect, useState } from "react";
import type { ProductType } from "./BestSellers.tsx";

export const Product = () => {
  const [product, setProduct] = useState<ProductType | null>(null);
console.log(product);
  useEffect(() => {
    axios
      .get("https://masterclass.kimitsu.it-incubator.io/api/products/1")
      .then((res) => {
        const product = res.data;
        setProduct(product);
      });
  }, []);

  return (
    <div>
      <h1>Product</h1>
    </div>
  );
};
