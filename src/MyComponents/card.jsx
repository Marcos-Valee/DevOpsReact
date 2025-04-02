import "../index.css"

function Card({nome = "não informado",  idade = "não informado", statusEmprego = false}){
    return(
        <div className="card">
            <span>Nome: {nome}</span>
            <span>Idade: {idade}</span>
            <span>{statusEmprego ? "Empregado" : "Desempregado"}</span>
        </div>
    );
}

export default Card