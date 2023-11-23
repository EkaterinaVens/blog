import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { selectUserSession } from '../../redux/selectors';

const PrivateRoute = ({ children, ...rest }) => {
  const { isLogged } = useSelector(selectUserSession);
  return <Route {...rest} render={() => (isLogged ? children : <Redirect to="/sign-in/" />)} />;
};

PrivateRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PrivateRoute;
