import Card from "./MyComponents/Card";
import "./index.css";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUser(data.slice(0, 4)));
  }, []);

  console.log(user);

  return (
    <>
      <header>
        <h1>Estudos de React</h1>
      </header>
      <div className="cards-container">
        <Card />
        <Card nome="Marcos" apartamento="Apt.55" statusEmprego={true} />
        <Card nome="Vinicius" apartamento="Apt.155" statusEmprego={true} />
        <Card nome="Roberto" apartamento="Apt.21" statusEmprego={false} />
        <Card
          nome={user[0]?.name || "Carregando..."}
          apartamento={user[0]?.address.suite || "Carregando..."}
          statusEmprego={false}
        />
        <Card
          nome={user[1]?.name || "Carregando..."}
          apartamento={user[1]?.address.suite || "Carregando..."}
          statusEmprego={false}
        />
        <Card
          nome={user[2]?.name || "Carregando..."}
          apartamento={user[2]?.address.suite || "Carregando..."}
          statusEmprego={false}
        />
        <Card nome="Carla" apartamento="Apt.51" statusEmprego={false} />
        <Card
          nome={user[3]?.name || "Carregando..."}
          apartamento={user[3]?.address.suite || "Carregando..."}
          statusEmprego={true}
        />
      </div>
      <p>Teste</p>
    </>
  );
}

export default App;
