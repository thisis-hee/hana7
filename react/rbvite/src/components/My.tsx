import { useRef, type FormEvent } from "react";
import type { LoginFn, Session } from "../App";
import Login from "./Login";
import Profile from "./Profile";

type Props = {
  session: Session;
  login: LoginFn;
  logout: () => void;
  removeItem: (id: number) => void;
  addItem: (id: number, name: string, price: number) => void;
};

export default function My({
  session: { loginUser, cart },
  login,
  logout,
  removeItem,
  addItem,
}: Props) {
  const idRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const priceRef = useRef<HTMLInputElement>(null);

  const addCart = (evt: FormEvent) => {
    evt.preventDefault();
    const id = Number(idRef.current?.value);
    const name = nameRef.current?.value;
    const price = Number(priceRef.current?.value);

    if (!id || !name || !price) {
      alert("Input all component");
      return;
    }
    addItem(id, name, price);
  };

  return (
    <>
      {loginUser ? (
        <Profile loginUser={loginUser} logout={logout} />
      ) : (
        <Login login={login} />
      )}
      <div>
        <ul>
          {cart.map((item) => (
            <li key={item.id}>
              {item.id}. {item.name}({item.price.toLocaleString()})
              <button onClick={() => removeItem(item.id)}>x</button>
            </li>
          ))}
        </ul>
        <form onSubmit={addCart}>
          <div>
            상품ID:
            <input ref={idRef} type="number" />
          </div>
          <div>
            상품명:
            <input ref={nameRef} type="text" />
          </div>
          <div>
            가격:
            <input ref={priceRef} type="number" />
          </div>
          <button type="reset">취소</button>
          <button type="submit">상품 추가</button>
        </form>
      </div>
    </>
  );
}
