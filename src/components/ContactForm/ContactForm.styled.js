import styled from 'styled-components';
import { Field, Form, ErrorMessage } from 'formik';

export const FormAddContact = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const InputField = styled(Field)`
  border: 0;
  outline: 1px solid #08215a;
  border-radius: 3px;
  min-width: 130px;
  height: 20px;
  margin: 8px;
  &:last-child {
    padding-left: 5px;
  }
`;

export const Label = styled.label`
  display: block;
  color: #f51616;
`;

export const ButtonAddContact = styled.button`
  background: #a99d9c;
  border: 1px solid #a99d9c;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.2) 1px 2px 4px;
  box-sizing: border-box;
  color: #ffffff;
  display: inline-block;
  font-family: nunito, roboto, proxima-nova, 'proxima nova', sans-serif;

  outline: 0;
  padding: 12px 14px;
  text-align: center;
  text-rendering: geometricprecision;
  text-transform: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;

  &:hover,
  &:active {
    background-color: initial;
    background-position: 0 0;
    color: #ff4742;
  }

  &:active {
    opacity: 0.5;
  }
  padding: 10px 25px;
  margin-top: 20px;
  margin-bottom: 15px;
`;

export const ErrorMessageWrapper = styled(ErrorMessage)`
  color: green;
`;
