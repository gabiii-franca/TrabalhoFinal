import React, { useState } from "react";

import api from "../../services/api";

import { Container } from "./styles.js";

export default function Login({ history }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await api.post("/sessions", {
        email,
        password
      });

      const { token, user: userData } = response.data;
      if (token) {
        localStorage.setItem("@CESTA/token", token, userData);
      }
      history.push("/Home");
    } catch (err) {
      console.log("response", err);
    }
  }
  return (
    <Container>
      <section>
        <p>Login</p>
        <form onSubmit={handleSubmit}>
          <input type="email" required placeholder="Email"  onChange={event => setEmail(event.target.value)}/>
          <input type="password" required placeholder="Senha" onChange={event => setPassword(event.target.value)}/>
          <button type="submit">Entrar</button>
          <br/>
        </form>
      </section>
    </Container>
  );
}