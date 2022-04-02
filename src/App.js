import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Routing from "./Routing";
import TodoListContextProvider from "./store/contexts/TodoListContext";
import UsersContextProvider from "./store/contexts/UsersContext";

function App() {
  return (
    <div className="App">
      <UsersContextProvider>
        <TodoListContextProvider>
          <Routing />
        </TodoListContextProvider>
      </UsersContextProvider>
    </div>
  );
}

export default App;