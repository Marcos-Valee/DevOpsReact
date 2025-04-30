import Card from "./MyComponents/Card";
import "./index.css";
import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState([]);
  const [newUser, setNewUser] = useState({
    name: "",
    suite: "",
    statusEmprego: false,
  });

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        const data = await response.json();
        setUser(data.slice(0, 3));
      } catch (error) {
        console.error("erro ao buscar usuários", error);
      }
    }
    fetchUsers();
  }, []);

  const handleAddUser = () => {
    if (newUser.name && newUser.suite) {
      setUser([
        ...user,
        {
          name: newUser.name,
          address: { suite: newUser.suite },
          statusEmprego: newUser.statusEmprego,
        },
      ]);
      setNewUser({ name: "", suite: "", statusEmprego: false });
    }
  };

  return (
    <>
      <header>
        <h1>Estudos de React</h1>
      </header>
      <div className="add-user-form">
        <input
          type="text"
          placeholder="Nome"
          value={newUser.name}
          onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Apartamento"
          value={newUser.suite}
          onChange={(e) => setNewUser({ ...newUser, suite: e.target.value })}
        />
        <label>
          <input
            type="checkbox"
            checked={newUser.statusEmprego}
            onChange={(e) =>
              setNewUser({ ...newUser, statusEmprego: e.target.checked })
            }
          />
          Empregado
        </label>
        <button onClick={handleAddUser}>Adicionar Usuário</button>
      </div>
      <div className="cards-container">
        <Card />
        {user.map((u, index) => (
          <Card
            key={index}
            nome={u.name || "Carregando..."}
            apartamento={u.address?.suite || "Carregando..."}
            statusEmprego={u.statusEmprego}
          />
        ))}
      </div>
    </>
  );
}

export default App;
