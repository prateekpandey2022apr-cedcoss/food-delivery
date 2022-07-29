export function CartTotal(cart) {
  const ttt = cart.reduce((total, current) => {
    return total + current.price * current.quantity;
  }, 0);

  console.log({ ttt });

  return ttt;
}
