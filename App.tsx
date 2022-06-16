import React from "react";
import Routes from "./src/routes/routes";
import {LastestMoviesProvider} from '@hooks/useLastestMovies'
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Jost_400Regular,
  Jost_600SemiBold
} from '@expo-google-fonts/jost';

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  if(!fontsLoaded)
  return <AppLoading />

  return (
    <LastestMoviesProvider>
      < Routes />
    </LastestMoviesProvider>
  );
}