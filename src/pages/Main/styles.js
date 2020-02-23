import styled from 'styled-components';

export const Titulo = styled.h1`
  color: #fff;
  text-align: center;
  font-size: 50px;
  margin: 80px;
`;

export const Container = styled.div`
  max-width: 600px;
  border-radius: 8px;
  padding: 30px;
  margin: 80px auto;

  h2 {
    color: #fff;
    font-size: 22px;
    margin-bottom: 10px;
  }
`;

export const Form = styled.form`
  margin-top: 20px;
  margin: 0;
  display: flex;
  flex-direction: column;
  padding: 10px 0;
  margin-bottom: 30px;
  max-width: 500px;

  input,
  textarea {
    /* flex: 1; */
    width: 100%;
    border: 1px solid #eee;
    background: #efefef;
    border-radius: 5px;
    box-shadow: 0 0 24px rgba(0, 0, 0, 0.1);
    padding: 10px;
    border-radius: 4px;
    font-size: 16px;
  }

  [type='date'] {
    background: #fff
      url(https://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/calendar_2.png)
      97% 50% no-repeat;
  }
  [type='date']::-webkit-inner-spin-button {
    display: none;
  }
  [type='date']::-webkit-calendar-picker-indicator {
    opacity: 0;
  }
`;

export const Field = styled.div`
  margin-top: 20px;
`;

export const CheckBox = styled.div`
  display: flex;

  input {
    cursor: pointer;
    border-radius: 3px;
    width: 25px;
    height: 16px;
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 18px;
  margin-right: 10px;
  font-weight: bold;
`;

export const Button = styled.button`
  background: #fff;
  padding: 5px;
  margin-top: 20px;
  border: #fff;
  border-radius: 5px;
  font-size: 18px;
  font-weight: bold;
  color: #7159c1;
`;
