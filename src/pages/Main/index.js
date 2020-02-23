import React, { useState } from 'react';
import Select from 'react-select';
import api from '../../services/api';

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

export default function Main() {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [additionalExperience] = useState([]);
  const [lib, setLib] = useState('');
  const [startDate, setStartDate] = useState('');

  function handleSubmit(event) {
    event.preventDefault();

    api
      .post('/recruitment-surveys', {
        name,
        bio,
        favoriteJsLibrary: lib,
        additionalExperience,
        startDate: Date(startDate),
      })
      .then(res => {
        console.log('Deu certo');
      })
      .catch(err => {
        console.log('Deu erro');
      });
  }

  function handleCheckboxChange(event) {
    const { target } = event;
    if (target.checked) {
      additionalExperience.push(target.value);
    } else {
      const i = additionalExperience.findIndex(e => e === target.value);

      if (i >= 0) {
        additionalExperience.splice(i);
      }
    }
  }

  return (
    <Container>
      <Titulo>Pesquisa de Recrutamento</Titulo>
      <Form onSubmit={handleSubmit}>
        <Field>
          <h2>Nome</h2>
          <input
            required
            type="text"
            placeholder="Digite seu Nome"
            value={name}
            onChange={event => setName(event.target.value)}
          />
        </Field>
        <Field>
          <h2>Biografia</h2>
          <textarea
            required
            rows="10"
            cols="40"
            placeholder="Digite sua Biografia"
            value={bio}
            onChange={event => setBio(event.target.value)}
          />
        </Field>

        <Field>
          <h2>Experiências Adicionais</h2>
          <CheckBox>
            <Label htmlFor="BDD">
              <input
                id="BDD"
                name="BDD"
                type="checkbox"
                value="BDD"
                onChange={handleCheckboxChange}
              />
              BDD
            </Label>
            <Label htmlFor="git">
              <input
                id="git"
                name="git"
                value="GIT"
                type="checkbox"
                onChange={handleCheckboxChange}
              />
              GIT
            </Label>
            <Label htmlFor="unittests">
              <input
                id="unittests"
                name="unittests"
                value="UNITTESTS"
                type="checkbox"
                onChange={handleCheckboxChange}
              />
              UNITTESTS
            </Label>
          </CheckBox>
        </Field>
        <Field>
          <h2>JS Library of Choice</h2>
          <Select
            placeholder="Selecione"
            options={options}
            valeu={lib}
            onChange={event => setLib(event.value)}
          />
        </Field>
        <Field>
          <h2>Start Date</h2>
          <input
            required
            type="date"
            value={startDate}
            onChange={event => setStartDate(event.target.value)}
          />
        </Field>
        <Button type="submit">Enviar formulário</Button>
      </Form>
    </Container>
  );
}
