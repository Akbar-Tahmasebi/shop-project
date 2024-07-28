import Button from "../components/Button";
import CartItem from "../components/CaetItem";
import Container from "../components/container";
import { useCartCantaxt } from "../context/CartCantext";

function Cart() {
  const { cartItems, cartQty } = useCartCantaxt();

  return (
    <Container>
      {cartItems.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}

      <div className="flex justify-between items-center bg-neutral-700 my-5 px-5 py-4 rounded">
        <div>
          <h3 className="text-neutral-100 text-lg mb-2">
            تعداد محصول: {cartQty}
          </h3>
          <h3 className="text-neutral-100 text-lg">قیمت کل: </h3>
        </div>

        <Button className="hover:!bg-neutral-500" variant="green">
          پرداخت سفارش
        </Button>
      </div>
    </Container>
  );
}

export default Cart;
