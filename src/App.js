import React, { useState } from "react";
import Filter from "./components/Filters.js";
import AddTodo from "./containers/AddTodo.js";
import VisibleTodoList from "./containers/VisibleTodoList.js";
import ThemeContext from "./contexts/ThemeContext.js";
import DarkModeToggle from "react-dark-mode-toggle";
import { bake_cookie, read_cookie } from "sfcookies";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(read_cookie("isDarkMode"));
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    bake_cookie("isDarkMode", !isDarkMode);
  };

  return (
    <React.Fragment>
      <ThemeContext.Provider value={{ isDarkMode }}>
        <div
          className={`h-screen w-full flex flex-col space-y-4 items-center justify-center ${
            isDarkMode ? "bg-gray-900" : "bg-gray-300"
          }`}
        >
          <div
            style={{ minWidth: "350px", maxWidth: "600px" }}
            className={`shadow-2xl ${
              isDarkMode ? "bg-gray-900" : "bg-gray-200"
            } rounded-xl w-2/5`}
          >
            <div
              style={{
                backgroundColor: "#ff4e00",
                backgroundImage:
                  "linear-gradient(315deg, #ff4e00 0%, #ec9f05 74%)",
              }}
              className="rounded-t-xl"
            >
              <h1 className="text-5xl font-bold rounded-t-xl text-center text-white">
                To-do List
              </h1>
            </div>

            <div className="mb-4 p-6 space-y-8">
              <AddTodo />
              <VisibleTodoList />
              <Filter />
            </div>
          </div>

          <DarkModeToggle
            onChange={() => {
              setIsDarkMode(!isDarkMode);
              toggleTheme();
            }}
            checked={isDarkMode}
            className=" focus:outline-none"
          />
        </div>
      </ThemeContext.Provider>
    </React.Fragment>
  );
}

export default App;
