import React from "react";
import { Redirect } from "react-router-dom";
import { useGlobalContext } from "../context";

type Props = {};

const LoginPage: React.FC = (props: Props) => {
  const { login, state } = useGlobalContext();
  const { is_authenticated } = state;
  if (is_authenticated) {
    return <Redirect to="/" />;
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    login(formData.get("email") as string, formData.get("password") as string);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-600 flex justify-center items-center">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            className="input"
            placeholder="email"
            type="text"
            name="email"
            id="email"
            required
          />
          <input
            required
            placeholder="password"
            type="password"
            name="password"
            className="input"
            id="password"
          />
          <button className="btn self-start" type="submit">
            Log in
          </button>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
