import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import Navbar from "./components/Navbar/Navbar";
import PostContextProvider from "./contexts/PostContext";
import AuthContextProvider from './contexts/AuthContext';

const App = () => {
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <AuthContextProvider>
          <PostContextProvider>
            <Navbar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/auth" exact component={Auth} />
            </Switch>
          </PostContextProvider>
        </AuthContextProvider>
        
      </Container>
    </BrowserRouter>
  );
}

export default App;
