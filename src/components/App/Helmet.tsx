import * as React from "react";
import { Helmet as ReachHelmet } from "react-helmet";

/* Favicons are located in ./static/favicons */
const favicons = {
  "57x57": "/favicons/apple-icon-57x57.png",
  "60x60": "/favicons/apple-icon-60x60.png",
  "72x72": "/favicons/apple-icon-72x72.png",
  "76x76": "/favicons/apple-icon-76x76.png",
  "114x114": "/favicons/apple-icon-114x114.png",
  "120x120": "/favicons/apple-icon-120x120.png",
  "144x144": "/favicons/apple-icon-144x144.png",
  "152x152": "/favicons/apple-icon-152x152.png",
  "180x180": "/favicons/apple-icon-180x180.png",
  "192x192": "/favicons/android-icon-192x192.png",
  "32x32": "/favicons/favicon-32x32.png",
  "96x96": "/favicons/favicons/favicon-96x96.png",
  "16x16": "/favicons/favicon-16x16.png",
  manifest: "/favicons/manifest.json",
  "msapplication-TileImage": "/favicons/ms-icon-144x144.png",
};

const Helmet = () => (
  <ReachHelmet defer={false} htmlAttributes={{ lang: "eng" }}>
    <meta charSet="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <title>Mate Szabo - Homework</title>

    {/* Favicon settings */}
    <link rel="apple-touch-icon" sizes="57x57" href={favicons["57x57"]} />
    <link rel="apple-touch-icon" sizes="60x60" href={favicons["60x60"]} />
    <link rel="apple-touch-icon" sizes="72x72" href={favicons["72x72"]} />
    <link rel="apple-touch-icon" sizes="76x76" href={favicons["76x76"]} />
    <link rel="apple-touch-icon" sizes="114x114" href={favicons["114x114"]} />
    <link rel="apple-touch-icon" sizes="120x120" href={favicons["120x120"]} />
    <link rel="apple-touch-icon" sizes="144x144" href={favicons["144x144"]} />
    <link rel="apple-touch-icon" sizes="152x152" href={favicons["152x152"]} />
    <link rel="apple-touch-icon" sizes="180x180" href={favicons["180x180"]} />
    <link
      rel="icon"
      type="image/png"
      sizes="192x192"
      href={favicons["192x192"]}
    />
    <link rel="icon" type="image/png" sizes="32x32" href={favicons["32x32"]} />
    <link rel="icon" type="image/png" sizes="96x96" href={favicons["96x96"]} />
    <link rel="icon" type="image/png" sizes="16x16" href={favicons["16x16"]} />
    <link rel="manifest" href={favicons["manifest"]} />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta
      name="msapplication-TileImage"
      content={favicons["msapplication-TileImage"]}
    />
    <meta name="theme-color" content="#ffffff" />

    <link
      href="https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900"
      rel="stylesheet"
    />
  </ReachHelmet>
);

export default Helmet;
