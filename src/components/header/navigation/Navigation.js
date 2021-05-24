import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import mainRoutes from "../../../routes/mainRoutes";
import UserMenu from "../../userMenu/UserMenu";
import NavigationListItem from "./NavigationListItem";
import { NavigationContainer } from "./NavigationStyled";

const Navigation = ({ location, isAuth }) => {
  return (
    <>
      <NavigationContainer>
        <ul className="list">
          {mainRoutes.map(item => (
            <NavigationListItem item={item} location={location} key={item.path} isAuth={isAuth} />
          ))}
          {/* <UserMenu /> */}
          {isAuth && <UserMenu />}
        </ul>
      </NavigationContainer>
    </>
  );
};

const mapStateToProps = state => {
  return {
    isAuth: state.auth.tokens.idToken
  };
};

export default connect(mapStateToProps)(withRouter(Navigation));
