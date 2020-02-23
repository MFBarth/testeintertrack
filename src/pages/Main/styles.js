import styled from 'styled-components';

export const Titulo = styled.h1`
  color: #fff;
  text-align: center;
  font-size: 50px;
  margin: 80px;
`;

export const Container = styled.div`
  max-width: 600px;
  border-radius: 4px;
  padding: 30px;
  margin: 80px auto;

  h1 {
    color: #fff;
    font-size: 20px;
  }
`;

export const Form = styled.form`
  margin-top: 20px;
  margin: 0;
  display: flex;
  flex-direction: row;
  padding: 10px 0;
  margin-bottom: 30px;

  input {
    flex: 1;
    border: 1px solid #eee;
    box-shadow: 0 0 24px rgba(0, 0, 0, 0.1);
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
  }

  textarea {
    flex: 1;
    border: 1px solid #eee;
    box-shadow: 0 0 24px rgba(0, 0, 0, 0.1);
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
  }
`;
