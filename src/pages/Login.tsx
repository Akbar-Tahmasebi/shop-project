import { ChangeEvent, useState } from "react";
import Button from "../components/Button";
import Container from "../components/container";
import { useLoginCantext } from "../context/LoginCantext";

function Login() {
  const { handelLogin } = useLoginCantext();

  const [user, setUser] = useState({
    userName: "",
    password: "",
  });

  const handelChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUser({
      ...user,
      [name]: value,
    });
  };

  return (
    <Container>
      <div className="bg-neutral-700 w-96 mx-auto my-12 rounded">
        <h1 className="text-xl inline-block w-full text-center py-3 border-b-4 border-neutral-800 text-neutral-100">
          ورود به حساب کاربری
        </h1>
        <label
          htmlFor="userName"
          className="text-lg inline-block mx-4 my-3 text-neutral-100 cursor-pointer"
        >
          نام کاربری
        </label>
        <input
          className="block w-80 mx-auto rounded p-2 bg-neutral-900 text-neutral-100"
          onChange={handelChange}
          id="userName"
          type="text"
          placeholder="نام کاربری..."
          name="userName"
          value={user.userName}
        />
        <label
          htmlFor="password"
          className="text-lg inline-block mx-4 my-3 text-neutral-100 cursor-pointer"
        >
          رمز عبور
        </label>
        <input
          className="block w-80 mx-auto rounded p-2 bg-neutral-900 text-neutral-100"
          onChange={handelChange}
          id="password"
          type="password"
          placeholder="رمز عبور"
          name="password"
          value={user.password}
        />
        <div className="text-center">
          <Button
            onClick={() => handelLogin(user.userName, user.password)}
            variant="green"
            className=" w-80 my-5 hover:!bg-neutral-500"
          >
            ورود
          </Button>
        </div>
      </div>
    </Container>
  );
}

export default Login;
