import { Link } from "react-router-dom";
import Container from "../components/container";
import ProductItem from "../components/ProductItem";
import { useEffect, useState } from "react";
import { getProducts } from "../services/api";

export interface IProduct {
  id: string;
  title: string;
  imgUrl: string;
  price: string;
  content: string;
}

function Shop() {
  const [product, setProduct] = useState<IProduct[]>([]);

  useEffect(() => {
    getProducts().then((result) => {
      setProduct(result);
    });
  }, []);

  return (
    <Container>
      <h1 className="my-5 text-neutral-200 font-bold">جدیدترین محصولات</h1>
      
      <div className=" grid grid-cols-2 lg:grid-cols-4 gap-4">
        {product.map((item) => (
          <Link key={item.id} to={`/product/${item.id}`}>
            <ProductItem {...item} />
          </Link>
        ))}
      </div>
    </Container>
  );
}

export default Shop;
