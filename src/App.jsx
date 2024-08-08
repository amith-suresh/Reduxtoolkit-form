import { useSelector } from "react-redux";
import Form from "./Form";

import "./App.css";

function App() {
const { name , age } = useSelector((state)=> state.form)  ;
  return (
    <>
      <Form />
 <h1>name:{name}</h1>  
   age:{age}
    </>
  );
}

export default App;
