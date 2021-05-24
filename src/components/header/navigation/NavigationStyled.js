import styled from "styled-components";

export const NavigationContainer = styled.div`
  ul {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex: 1 1 auto;
    margin: 0;
    padding: 0 30px;
    list-style-type: none;
  }

  li {
    border: 2px solid transparent;
    border-radius: 5px;
    padding: 10px;
    transition: background 0.2s;
    border-radius: 3px;
  }
  a {
    text-decoration: none;
    text-transform: uppercase;
    transition: color 0.2s;
    border-radius: 3px;
  }

  li {
    line-height: 1.7;
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
  ul {
    visibility: visible;
    opacity: 1;
    box-shadow: 0px 3px 5px 2px #ebecf1;
  }

  @keyframes slide-in {
    0% {
      top: -50px;
    }
    40% {
      top: 20px;
    }
    70% {
      top: 10px;
    }
    100% {
      top: 15px;
    }
  }

  .logOutBtn {
    color: #f9f8fd;
    text-transform: uppercase;
    display: inline;
    background: red;
    float: right;
    margin-left: 5px;
    border-radius: 3px;
    padding: 5px;
  }
  p {
    color: #f9f8fd;
  }
`;
