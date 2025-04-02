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
        <Card nome="Marcos" idade={20} statusEmprego={true} />
        <Card nome="Vinicius" idade={21} statusEmprego={true} />
        <Card nome="Roberto" idade={31} statusEmprego={false} />
      </div>
    </>
  );
}

export default App;
