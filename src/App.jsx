import logo from "./logo.svg";
import "./App.css";

import { useState } from "react";
import { LandingPage } from "./components/LandingPage";
import { MainPage } from "./components/MainPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function switchView() {
    isLoggedIn ? setIsLoggedIn(false) : setIsLoggedIn(true);
  }

  return (
    <main>
      {isLoggedIn ? (
        <MainPage logout={switchView} />
      ) : (
        <LandingPage login={switchView} />
      )}
    </main>
  );
}

export default App;
