import React from 'react';
import { Link } from 'react-router-dom';
import { Container} from './styles';
export default function Home() {
  return (
    <Container>
      <div>
        <Link to="/Commerce/index.js"><p>Registrar Comércio</p></Link>
        <Link to="/Register/index.js"><p>Registrar Usuário</p></Link>
      </div>
    </Container>
  )
};
