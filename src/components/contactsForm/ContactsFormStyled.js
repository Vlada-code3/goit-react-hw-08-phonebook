import styled from "styled-components";

export const ContactsLabel = styled.label`
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  border-color: black;
  padding: 15px;
  border-radius: 2px;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 2px 1px -1px rgb(0 0 0 / 12%);
  margin-top: 50px;
  margin-bottom: 50px;
  input {
    color: #444;
    font-size: 1.5em;
    outline: none; // Chrome outline
    box-shadow: none; // Firefox outline
    -webkit-appearance: none; // mobile Safari
    border-radius: 0; // mobile Safari
    border-top: none;
    border-left: solid 1px;
    border-right: solid 1px;
    border-bottom: solid 1px;
    border-color: #bbb;
    background: transparent;
    display: block;
    height: 2em;
    width: 12em;
    margin-bottom: 5%;
    padding: 0 3%;
    position: relative;
    z-index: 0;
    -webkit-transition: border 0.25s; // slightly slower than placeholder colour
    -moz-transition: border 0.25s;
    -o-transition: border 0.25s;
    transition: border 0.25s;
  }
`;
