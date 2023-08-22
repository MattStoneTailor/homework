import * as React from "react";
import { Helmet as ReachHelmet } from "react-helmet";

const Helmet = () => (
  <ReachHelmet defer={false} htmlAttributes={{ lang: "eng" }}>
    <meta charSet="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <title>Mate Szabo - Homework</title>

    <link
      href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900"
      rel="stylesheet"
    />
  </ReachHelmet>
);

export default Helmet;
