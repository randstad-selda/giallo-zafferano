import { useEffect, useState } from "react";
import { useOutletContext, useNavigate } from "react-router-dom";
import UsersService from "../services/UsersService";
import BaseButton from "../components/BaseButton";

export default function HomePage() {
  const navigate = useNavigate();
  const [setPageTitle] = useOutletContext();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    setPageTitle("Home Page");
  }, []);

  function handleLogin(e) {
    e.preventDefault();
    UsersService.login(credentials)
      .then((data) => {
        console.log(data);
        sessionStorage.setItem("accessToken", data.accessToken);
        sessionStorage.setItem("user", JSON.stringify(data.user));
        navigate("/generate-recipe");
      })
      .catch((err) => console.log(err));
  }

  function handleInput(e) {
    setCredentials({
      ...credentials,
      [e.target.id]: e.target.value,
    });
  }

  return (
    <>
      <form onSubmit={handleLogin}>
        <div>
          <label forhtml="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Inserisci l'email"
            value={credentials.email}
            onChange={handleInput}
          />
        </div>
        <div>
          <label forhtml="password">Password</label>
          <input
            id="password"
            placeholder="Inserisci password"
            type="password"
            value={credentials.password}
            onChange={handleInput}
          />
        </div>
        <BaseButton content="Login" />
      </form>
    </>
  );
}
