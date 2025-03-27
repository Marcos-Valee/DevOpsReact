import Card from "./MyComponents/card"

function App() {
  return (
    <>
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
      <Card 
      nome = "Roberto"
      idade = {31}
      statusEmprego = {false}
      />
    </>
  )
}

export default App
