import { useRef, type FormEvent } from "react";
import type { LoginFn } from "../App";

type Props = { login: LoginFn };

export default function Login({ login }: Props) {
  const idRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  const makeLogin = (evt: FormEvent) => {
    evt.preventDefault();
    const id = Number(idRef.current?.value);
    const name = nameRef.current?.value;

    if (!id || isNaN(id)) {
      alert("Input the id and name");
      if (idRef.current) {
        idRef.current.focus();
      }
      return;
    } else if (!name) {
      alert("Input the id and name");
      if (nameRef.current) {
        nameRef.current.focus();
      }
      return;
    }
    login(id, name);
  };

  return (
    <>
      <form onSubmit={makeLogin}>
        <div>
          LoginID:
          <input ref={idRef} type="number" />
        </div>
        <div>
          LoginName: <input ref={nameRef} type="text" />
        </div>
        <button type="reset">Cancel</button>
        <button type="submit">Login</button>
      </form>
    </>
  );
}
