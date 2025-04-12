import React from 'react';
import { Route } from 'react-router-dom';

export default (
  <Route>
    <Route path="/" />
    <Route path="/coach/:coachId" />
    <Route path="/advanced" />
    <Route path="/accessible" />
    <Route path="/active" />
    <Route path="/list-coaches/:callingPage" />
    <Route path="/get-involved" />
    <Route path="/view-coaches" />
  </Route>
);
