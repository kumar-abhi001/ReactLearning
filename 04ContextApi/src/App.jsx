
import './App.css'
import UserContextProvider from "./Context/UserContextProvider";
import User from './Components/User';
import ShowUser from './Components/ShowUser';

function App() {

  return (
    <UserContextProvider>
      <h1>Context Api</h1>
      <User /> 
      <ShowUser />
    </UserContextProvider>
  )
}

export default App
