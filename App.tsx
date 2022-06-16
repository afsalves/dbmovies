import React from "react";
import Routes from "./src/routes/routes";
import {LastestMoviesProvider} from '@hooks/useLastestMovies'

export default function App() {

  return (
    <LastestMoviesProvider>
      < Routes />
    </LastestMoviesProvider>
  );
}