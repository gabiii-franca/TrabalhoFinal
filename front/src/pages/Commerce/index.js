import React, { useState } from 'react';
import {Container} from './styles';
import api from "../../services/api"
import { Link } from 'react-router-dom';

export default function Commerce({ history }) {
  const [nome, setNome] = useState("");
  const [rua, setRua] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  async function handleSubmit(event) {
    event.preventDefault({ history })
    try {
      const response = await api.post("/comercio", {
        nome,
        rua,
        numero,
        bairro,
        cidade,
        estado
      })
      const { token } = response.data;
      console.log(token);

      if (token) {
        localStorage.setItem("@CESTA/token", token);
      }
      history.push("/Home");
    }
    catch (erro) {
      alert("Dados Incorretos!");
    }
  }
  return (
    <Container>
      <div id="menu">
        <Link to="/Home">
          <p>Página Home</p>
        </Link>
        <Link to="/User">
          <p>Cadastro de Usuário</p>
        </Link>
      </div>
      <div>

        <form onSubmit={handleSubmit}>
          <h1>Cadastro do Comércio</h1>
          <div id="pt1">
            <label>Nome:</label>
            <input type="text" required placeholder="Nome:" onChange={(event) => setNome(event.target.value)} />
            <label>Nome da rua:</label>
            <input type="text" required placeholder="Rua:" onChange={(event) => setRua(event.target.value)} />
            <label>Número da rua:</label>
            <input type="number" required placeholder="Número:" onChange={(event) => setNumero(event.target.value)} />
          </div>
          <div id="pt2">
            <label>Bairro:</label>
            <input type="text" required placeholder="Bairro:" onChange={(event) => setBairro(event.target.value)} />

            <label>Cidade:</label>
            <input type="text" required placeholder="Cidade:" onChange={(event) => setCidade(event.target.value)} />
            <label>Estado:</label>
            <input type="text" required placeholder="Estado:" onChange={(event) => setEstado(event.target.value)} />

          </div>
          <button type="submit">Entrar
    </button>
        </form>
      </div>
    </Container >
  );
}
