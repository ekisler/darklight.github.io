import "./App.css";
import { ThemeContext, themes } from "./contexts/ThemeContext";
import React from "react";
import ToggleDark from "./components/toggleDark";
import Footer from "./Footer/Footer";

function App() {
  const [darkMode, setDarkMode] = React.useState(true);

  return (
    <div>
    <div className="App">
      <header className="App-header">
        <h1 className="text-warning">EK Dark/Light mode</h1>
      </header>
      <ThemeContext.Consumer>
        {({ changeTheme }) => (
          <ToggleDark
            toggleDark={() => {
              setDarkMode(!darkMode);
              changeTheme(darkMode ? themes.light : themes.dark);
            }}
          />
        )}
      </ThemeContext.Consumer>
    </div>
    <div className="footer">
    <Footer />
    </div>
    </div>
  );
}

export default App;
