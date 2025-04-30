import "../index.css"
import React from "react";

function Card({nome = "não informado",  apartamento = "não informado", statusEmprego = false}){
    return(
        <div className="card">
            <span>Nome: {nome}</span>
            <span>Apartamento: {apartamento}</span>
            <span>{statusEmprego ? "Empregado" : "Desempregado"}</span>
        </div>
    );
}

export default Card
