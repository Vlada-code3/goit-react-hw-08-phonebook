import styled from "styled-components";

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  .emailInput {
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
  .passwordInput {
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

  .btnSign {
    display: block;
    margin: 0 auto;
    background-color: #f89329; /* Green */
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    border-radius: 3px;
    font-size: 16px;

    cursor: pointer;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
  }

  .btnSign:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
`;
