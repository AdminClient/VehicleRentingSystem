import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BrowserRouter as Router } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <Auth0Provider
    domain="dev-uzfwis76thkfo5nj.us.auth0.com"
    clientId="0z5yjaupNM9Xob08232ef3CfD0CEezHb"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    >
    <Router>
      <App />
    </Router>
    </Auth0Provider>
);
