import Card from "./MyComponents/card"

function App() {
  return (
    <>
      <header><h1>Estudos de React</h1></header>
      <Card />
      <Card 
      nome = "Marcos"
      idade = {20}
      statusEmprego = {true}
      />
      <Card 
      nome = "Vinicius"
      idade = {21}
      statusEmprego = {true}
      />
    </>
  )
}

export default App
