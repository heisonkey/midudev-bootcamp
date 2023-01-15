import './App.css';
import Mensaje from './Mensaje';


const Description = () => {
return <p>Esta es la app del curso full stack bootcamp</p>
}


const App = () => {

  return (
    <div className="App">
      <Mensaje color="red" message="Estamos Trabajando"/>   
      <Mensaje color="blue" message="En un curso"/> 
      <Mensaje color="green" message="De React"/> 
      <Description/>
    </div>
  );
}

export default App;
