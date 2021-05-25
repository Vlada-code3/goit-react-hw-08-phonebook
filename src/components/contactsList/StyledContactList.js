import styled from "styled-components";

export const StyledContactList = styled.div`
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
  button {
    display: block;
    margin: 0 auto;
    background-color: #f89329; /* Green */
    border: none;
    color: white;
    padding: 10px 27px;
    text-align: center;
    text-decoration: none;

    font-size: 16px;

    cursor: pointer;
    -webkit-transition-duration: 0.4s; /* Safari */
    transition-duration: 0.4s;
    border-radius: 3px;
  }
  button:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  .contactItem {
    display: flex;
    flex-direction: column;
  }
`;
