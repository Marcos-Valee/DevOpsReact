import Card from "./MyComponents/card";
import "./index.css";

function App() {

  return (
    <>
      <header>
        <h1>Estudos de React</h1>
      </header>
      <div className="cards-container">
        <Card />
        <Card nome="Marcos" apartamento= "Apt.55" statusEmprego={true} />
        <Card nome="Vinicius" apartamento= "Apt.155" statusEmprego={true} />
        <Card nome="Roberto" apartamento= "Apt.21" statusEmprego={false} />
      </div>
    </>
  );
}

export default App;
