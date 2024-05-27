import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';

const RouteWithTitle = ({ title, element: Element, ...rest }) => {
  useEffect(() => {
    document.title = title || 'Default Title';
  }, [title]);

  return <Route {...rest} element={<Element />} />;
};

export default RouteWithTitle;
