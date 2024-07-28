import { IProduct } from "../pages/Sope";

type TProductItem = IProduct;

function ProductItem({ imgUrl, title, price, content }: TProductItem) {
  return (
    <div className="bg-neutral-800 rounded hover:border border-neutral-600 ">
      <img
        className="rounded-t border-b border-neutral-600"
        src={imgUrl}
        alt="عکس محصول"
      />
      
      <div className="px-3 pt-2 pb-3">
        <h3 className=" text-lg text-neutral-100 line-clamp-2 leading-normal text-justify">
          {title}
        </h3>
        <span className="my-2 text-base text-neutral-300 inline-block">
          قیمت: {price}تومان
        </span>
        <p className=" text-neutral-400 text-xs line-clamp-3 leading-loose text-justify">
          {content}
        </p>
      </div>
    </div>
  );
}

export default ProductItem;
