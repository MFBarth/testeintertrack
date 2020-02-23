import React from 'react';

import { Titulo, Container, Form } from './styles';

function Main() {
  return (
    <>
      <Titulo>Pesquisa de Recrutamento</Titulo>

      <Container>
        <h1>Nome</h1>
        <Form>
          <input type="text" placeholder="Digite seu Nome" />
        </Form>

        <h1>Biografia</h1>
        <Form>
          <textarea rows="10" cols="40" placeholder="Digite sua Biografia" />
        </Form>
      </Container>
    </>
  );
}

export default Main;
