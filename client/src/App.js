import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Tier from "./pages/tier";
import Register from "./pages/register";
import Login from "./pages/login";
import CreateList from "./pages/createlist";
import ProtectedRoute from "./pages/protectedRoute";
import Home from "./pages/home";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import Auth from './utils/auth'

const App = () => {
  const [theme, setTheme] = useState("light");
  const [logStatus,setLogStatus] = useState(null)

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  

  const logout = () => {
    Auth.logout()
  }

  return (
    <div className={`app ${theme}`}>
      <BrowserRouter>
        <header>
          <h1
            onClick={() => {
              window.location.href = "/home";
            }}
          >
            <span className="ez-span">EZ</span>tiers
          </h1>
          <div className="nav-div">
            
          
            <nav>
            <div>Theme:
              {theme === "light" ? (
                <FontAwesomeIcon
                  icon={faMoon}
                  alt="Light Mode SVG"
                  onClick={toggleTheme}
                  style={{ cursor: "pointer", color: "black" }} // Add pointer cursor to indicate clickable
                />
              ) : (
                <FontAwesomeIcon
                  icon={faSun}
                  alt="Dark Mode SVG"
                  onClick={toggleTheme}
                  style={{ cursor: "pointer" }} // Add pointer cursor to indicate clickable
                />
              )}
            </div>
              <Link className={`link-nav ${theme}`} to="/">
                -Login-
              </Link>
              <Link className={`link-nav ${theme}`} to="/create">
                -Create List-
              </Link>
              <Link className={`link-nav ${theme}`} to="/register">
                -Register-
              </Link>
              <Link className={`link-nav ${theme}`} to="/home">
                -Home-
              </Link>
              <button onClick={logout}>Logout</button>
            </nav>
          </div>
        </header>
        <Routes>
          <Route path="/" element={<Login theme={theme} />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/tier" element={<Tier />} />
            <Route path="/create" element={<CreateList />} />
            <Route path="/home" element={<Home />} />
          </Route>
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
