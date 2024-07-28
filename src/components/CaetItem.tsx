import Button from "./Button";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useEffect, useState } from "react";
import { getProduct } from "../services/api";
import { useCartCantaxt } from "../context/CartCantext";
import { Link } from "react-router-dom";
import { IProduct } from "../pages/Sope";

interface ICartItem {
  id: number;
  qty: number;
}

function CartItem({ id, qty }: ICartItem) {
  const { handelIncreaseCart, handelDecreaseCart, handelRemoveCart } =
    useCartCantaxt();

  const [product, setProduct] = useState<IProduct>();
  useEffect(() => {
    getProduct(id).then((result) => {
      setProduct(result);
    });
  }, []);
  
  return (
    <div className="grid grid-cols-5 border-b-4 border-neutral-800">
      <Link
        to={`/product/${id}`}
        className="col-span-5 sm:col-span-2 xl:col-span-1"
      >
        <img
          className="rounded p-3 my-3 bg-neutral-600 "
          src={product?.imgUrl}
          alt="عکس محصول"
        />
      </Link>

      <div className="col-span-5 sm:col-span-3 xl:col-span-4 grid grid-cols-6 ">
        <Link
          to={`/product/${id}`}
          className="col-span-3 sm:mt-4 sm:mr-5 sm:col-span-6 lg:col-span-3"
        >
          <h3 className=" text-xl text-neutral-100 leading-relaxed text-justify">
            {product?.title}
          </h3>
          <span className="my-2 text-lg text-neutral-300 inline-block">
            قیمت: {product?.price}تومان
          </span>
        </Link>

        <div className="col-span-3 sm:col-span-6 lg:col-span-3 text-end mt-9">
          <Button
            onClick={() => handelIncreaseCart(id)}
            variant="blue"
            className=" hover:!bg-neutral-700"
          >
            <FaPlus />
          </Button>
          <span className="m-3 text-xl">{qty}</span>
          <Button
            onClick={() => handelDecreaseCart(id)}
            variant="blue"
            className="hover:!bg-neutral-700"
          >
            <FaMinus />
          </Button>
          <Button
            onClick={() => handelRemoveCart(id)}
            variant="red"
            className="mr-3 hover:!bg-neutral-600"
          >
            <RiDeleteBin5Fill />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
