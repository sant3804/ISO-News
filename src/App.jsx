import { useState, useEffect } from "react"; // ✅ Import this
import { Navbar } from "./components/Navbar";
import { NewsBoard } from "./components/NewsBoard";
import { Footer } from "./components/Footer";
import './App.css';


const App = () => {
  const [category, setCategory] = useState("general");
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.body.setAttribute('data-bs-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === "dark" ? "light" : "dark");
  };

  return (
    <div>
      <Navbar 
        setCategory={setCategory} 
        theme={theme} 
        toggleTheme={toggleTheme}
      />
      <NewsBoard category={category} theme={theme} />
      <Footer theme={theme} />
    </div>
  );
};

export default App;
