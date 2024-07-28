import { createContext, useContext, useEffect, useState } from "react";
import { login } from "../services/api";
import { useNavigate } from "react-router-dom";

interface ILoginUser {
  children: React.ReactNode;
}
interface ILoginCantext {
  isLogin: boolean;
  handelLogin: (userName: string, password: string) => void;
  handelLogout: () => void;
}

export const LoginCantext = createContext<ILoginCantext>({} as ILoginCantext);

export const useLoginCantext = () => {
  return useContext(LoginCantext);
};

export function LoginUser({ children }: ILoginUser) {
  const [isLogin, setIsLogin] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    let token = localStorage.getItem("token");

    if (token) {
      setIsLogin(true);
    }
  }, []);

  const handelLogin = (userName: string, password: string) => {
    login(userName, password).finally(() => {
      let token = "DRSGA;IWEHGRSEHRGQENG;ZwerhgfswehgEFJUHER";
      localStorage.setItem("token", token);
      setIsLogin(true);
      navigate("/");
    });
  };

  const handelLogout = () => {
    setIsLogin(false);
    navigate("/login");
    localStorage.removeItem("token");
  };
  return (
    <LoginCantext.Provider value={{ isLogin, handelLogin, handelLogout }}>
      {children}
    </LoginCantext.Provider>
  );
}
