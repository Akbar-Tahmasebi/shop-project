import { useParams } from "react-router-dom";
import Button from "../components/Button";
import Container from "../components/container";
import { useEffect, useState } from "react";
import { getProduct } from "../services/api";
import { useCartCantaxt } from "../context/CartCantext";
import { FaPlus, FaMinus } from "react-icons/fa";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { IProduct } from "./Sope";

function Product() {
  const params = useParams<{ id: string }>();
  const [product, setProduct] = useState<IProduct>();

  const {
    handelIncreaseCart,
    handelDecreaseCart,
    handelRemoveCart,
    getProductQty,
  } = useCartCantaxt();

  useEffect(() => {
    getProduct(params.id as string).then((result) => {
      setProduct(result);
    });
  }, []);

  return (
    <Container>
      <div className="grid grid-cols-5 lg:gap-4 ">
        <img
          className="rounded p-3 my-3 col-span-5 lg:col-span-2  bg-neutral-600 "
          src={product?.imgUrl}
          alt="عکس محصول"
        />
        
        <div className="px-3 pb-3 pt-2 my-3 col-span-5 lg:col-span-3 bg-neutral-800 rounded">
          <h3 className=" text-xl text-neutral-100 leading-relaxed text-justify">
            {product?.title}
          </h3>
          <span className="my-2 text-lg text-neutral-300 inline-block">
            قیمت: {product?.price}تومان
          </span>
          <p className=" text-neutral-400 text-base leading-loose text-justify">
            {product?.content}
          </p>

          {getProductQty(parseInt(params.id as string)) === 0 ? (
            <Button
              onClick={() => handelIncreaseCart(parseInt(params.id as string))}
              className="mt-4 w-full lg:w-auto hover:!bg-neutral-900"
              variant="green"
            >
              ثبت سفارش
            </Button>
          ) : (
            <div>
              <Button
                onClick={() =>
                  handelIncreaseCart(parseInt(params.id as string))
                }
                className="mt-4 hover:!bg-neutral-700"
                variant="blue"
              >
                <FaPlus />
              </Button>
              <span className="mx-3 text-xl">
                {getProductQty(parseInt(params.id as string))}
              </span>
              <Button
                onClick={() =>
                  handelDecreaseCart(parseInt(params.id as string))
                }
                className="mt-4 hover:!bg-neutral-700"
                variant="blue"
              >
                <FaMinus />
              </Button>
              <Button
                onClick={() => handelRemoveCart(parseInt(params.id as string))}
                variant="red"
                className="mr-3 hover:!bg-neutral-600"
              >
                <RiDeleteBin5Fill />
              </Button>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
}

export default Product;
