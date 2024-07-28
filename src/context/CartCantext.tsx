import React, { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

interface ICartProvider {
  children: React.ReactNode;
}

interface ICartItem {
  id: number;
  qty: number;
}

interface ICartCantaxt {
  cartItems: ICartItem[];
  handelIncreaseCart: (id: number) => void;
  handelDecreaseCart: (id: number) => void;
  handelRemoveCart: (id: number) => void;
  getProductQty: (id: number) => number;
  cartQty: number;
}

export const CartCantaxt = createContext<ICartCantaxt>({} as ICartCantaxt);

export const useCartCantaxt = () => {
  return useContext(CartCantaxt);
};

export function CartProvider({ children }: ICartProvider) {
  const [cartItems, setCartItems] = useLocalStorage<ICartItem[]>(
    "cartItems",
    []
  );

  const handelIncreaseCart = (id: number) => {
    setCartItems((prevItems) => {
      let checkItem = prevItems.find((item) => item.id == id);

      if (checkItem == null) {
        return [...prevItems, { id: id, qty: 1 }];
      } else {
        return prevItems.map((item) => {
          if (item.id == id) {
            return {
              ...item,
              qty: item.qty + 1,
            };
          } else {
            return item;
          }
        });
      }
    });
  };

  const handelDecreaseCart = (id: number) => {
    setCartItems((prevItems) => {
      let checkItem = prevItems.find((item) => item.id == id);

      if (checkItem?.qty === 1) {
        return prevItems.filter((itme) => itme.id !== id);
      } else {
        return prevItems.map((item) => {
          if (item.id == id) {
            return {
              ...item,
              qty: item.qty - 1,
            };
          } else {
            return item;
          }
        });
      }
    });
  };

  const handelRemoveCart = (id: number) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id != id));
  };

  const getProductQty = (id: number) => {
    return cartItems.find((item) => item.id == id)?.qty || 0;
  };

  const cartQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);

  return (
    <CartCantaxt.Provider
      value={{
        cartItems,
        handelIncreaseCart,
        handelDecreaseCart,
        handelRemoveCart,
        getProductQty,
        cartQty,
      }}
    >
      {children}
    </CartCantaxt.Provider>
  );
}
