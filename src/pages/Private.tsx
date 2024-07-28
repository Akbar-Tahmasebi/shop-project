import { Navigate, Outlet } from "react-router-dom";
import { useLoginCantext } from "../context/LoginCantext";

function Private() {
  const { isLogin } = useLoginCantext();
  
  return <>{isLogin ? <Outlet /> : <Navigate to={"/login"} />}</>;
}

export default Private;
