import Card from "./MyComponents/card"

function App() {
  return (
    <>
    <header className="bg-blue-500 text-3xl text-white text-center p-6"><h1>Estudos de React</h1></header>
    <cards
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
