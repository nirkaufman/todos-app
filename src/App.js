import './App.css';
import './providers/list-context';
import {TodosApp} from "./components/todos-app";

function App() {
  const user = {};
  return (
      <>
        {user ? (
            <>
              <input type="text"/>
              <button>ADD LIST</button>

              <TodosApp appName="todos"/>
              <TodosApp appName="tasks"/>
              <TodosApp appName="backlog"/>
            </>
        ) : (
            <>
              <input type="text" placeholder={'username'}/>
              <input type="password" placeholder={'password'}/>
              <button>sign in</button>
            </>
        )}
      </>)
}

export default App;
