import { MdShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import Container from "./container";
import { useCartCantaxt } from "../context/CartCantext";
import { useLoginCantext } from "../context/LoginCantext";

function Navbar() {
  const { cartQty } = useCartCantaxt();

  const { isLogin, handelLogout } = useLoginCantext();

  return (
    <>
      <div className="h-16 border-b-4 border-neutral-800  bg-neutral-700 flex items-center">
        <Container>
          <div className="flex justify-between  items-center">
            <ul className=" flex">
              <li className=" ml-4 p-2 hover:bg-neutral-900 rounded text-neutral-100">
                <Link to={"/"}>خانه</Link>
              </li>
              <li className=" ml-4 p-2 hover:bg-neutral-900 rounded text-neutral-100">
                <Link to={"/shop"}>فروشگاه</Link>
              </li>
            </ul>
            
            <div className="flex">
              {isLogin ? (
                <button
                  onClick={handelLogout}
                  className=" ml-4 py-1 px-2 hover:bg-neutral-900 rounded text-neutral-100"
                >
                  خروج
                </button>
              ) : (
                <Link
                  to={"/login"}
                  className=" ml-4 py-1 px-2 hover:bg-neutral-900 rounded text-neutral-100"
                >
                  ورود
                </Link>
              )}
              <Link to={"/cart"} className="relative">
                <MdShoppingCart className="p-1 hover:bg-neutral-900 text-4xl rounded  text-neutral-100" />
                <span className=" absolute -top-2 left-5 bg-neutral-900 px-2 rounded-full">
                  {cartQty !== 0 ? cartQty : ""}
                </span>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default Navbar;
