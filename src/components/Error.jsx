import React from "react";
import { useRouteError } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Error() {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <Header />
      <main>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occured.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </main>
      <Footer />
    </div>
  );
}
