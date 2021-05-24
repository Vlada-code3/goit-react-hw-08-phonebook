import styled from "styled-components";

export const HeaderContainer = styled.header`
  padding: 30px;
  height: 120px;
  display: block;
  margin: 12px -12px;
  padding: 0;
  background: #ffa91b;
  border: 2px solid #f7c833;
  border-right: 2px solid #f89329;
  border-bottom: 2px solid #f89329;
  border-radius: 5px;
  transition: opacity 0.2s, visibility 0.2s;
  margin-bottom: 30px;
  a {
    text-decoration: none;
    text-transform: uppercase;
    transition: color 0.2s;
    border-radius: 3px;
  }
  a:hover {
    background: #ec4138;
    border: 2px solid #f05749;
    border-right: 2px solid #e02a21;
    border-bottom: 2px solid #e02a21;
    border-radius: 3px;
  }
  a {
    color: #f9f8fd;
  }
  .logo {
    font-size: 24px;
    font-weight: 700;
    line-height: 32px;
    margin: 0 0 24px;
  }
  .logo:hover {
    text-decoration: none;
  }
`;
