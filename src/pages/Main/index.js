import React, { useState } from 'react';
import Select from 'react-select';

import {
  Titulo,
  Container,
  Form,
  CheckBox,
  Field,
  Label,
  Button,
} from './styles';

const options = [
  { value: 'react', label: 'React' },
  { value: 'angular', label: 'Angular' },
  { value: 'vue', label: 'Vue' },
];

function Main() {
  const [name, setName] = useState('');
  const [biography, setBiography] = useState('');
  const [experience, setExperience] = useState();
  const [lib, setLib] = useState();
  const [startDate, setStartDate] = useState();

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <>
      <Titulo>Pesquisa de Recrutamento</Titulo>

      <Container>
        <Form onSubmit={handleSubmit}>
          <Field>
            <h2>Nome</h2>
            <input required type="text" placeholder="Digite seu Nome" />
          </Field>

          <Field>
            <h2>Biografia</h2>
            <textarea
              required
              rows="10"
              cols="40"
              placeholder="Digite sua Biografia"
            />
          </Field>

          <Field>
            <h2>Experiências Adicionais</h2>
            <CheckBox>
              <Label htmlFor="bdd">
                <input id="bdd" name="bdd" type="checkbox" />
                BDD
              </Label>
              <Label htmlFor="git">
                <input id="git" name="git" type="checkbox" />
                GIT
              </Label>
              <Label htmlFor="unittests">
                <input id="unittests" name="unittests" type="checkbox" />
                UNITTESTS
              </Label>
            </CheckBox>
          </Field>
          <Field>
            <h2>JS Library of Choice</h2>
            <Select placeholder="Selecione" options={options} />
          </Field>
          <Field>
            <h2>Start Date</h2>
            <input required type="date" />
          </Field>
          <Button type="submit">Enviar formulário</Button>
        </Form>
      </Container>
    </>
  );
}

export default Main;
