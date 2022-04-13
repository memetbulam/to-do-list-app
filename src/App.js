import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Routing from "./Routing";
import TodoListContextProvider from "./store/contexts/TodoListContext";
import UsersContextProvider from "./store/contexts/UsersContext";
import Title from './components/title/Title';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEraser, faPen, faPlus } from '@fortawesome/free-solid-svg-icons';

library.add(fab, faPlus, faEraser, faPen);

function App() {
  return (
    <div className="App">
      <Title />
      <UsersContextProvider>
        <TodoListContextProvider>
          <Routing />
        </TodoListContextProvider>
      </UsersContextProvider>
    </div>
  );
}

export default App;