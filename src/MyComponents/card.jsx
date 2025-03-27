function Card({nome = "não informado",  idade = "não informado", statusEmprego = false}){
    return(
        <div className="flex flex-col rounded-md border w-50 gap-2 p-3 mt-3 ml-2">
            <span>Nome: {nome}</span>
            <span>Idade: {idade}</span>
            <span>{statusEmprego ? "Empregado" : "Desempregado"}</span>
        </div>
    );
}

export default Card