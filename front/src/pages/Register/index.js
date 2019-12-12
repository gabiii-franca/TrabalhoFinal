import React, { useState } from 'react';
import { Container } from './styles';
import api from "../../services/api"
import { Link } from 'react-router-dom';

export default function Register({ history }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault()
    try {
      await api.post("/User", {
        name,
        email,
        password
      })
      history.push("/Home")
    } catch (erro) {
      alert("Usuário Existente!");
    }
  }
  return (
    <Container>
      <div id="menu">
        <Link to="/Home">
          <p>Página Home</p>
        </Link>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <h1>Registro</h1>
          <input type="text" required placeholder="Nome:" id="nome" onChange={(event) => setName(event.target.value)} />
          <input type="email" required placeholder="Email:" id="email" onChange={(event) => setEmail(event.target.value)} />
          <input type="password" required placeholder="Senha:" id="senha" onChange={(event) => setPassword(event.target.value)} />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </Container>
  );
}


