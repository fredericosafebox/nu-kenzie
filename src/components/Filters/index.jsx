import { StyledFilterBar } from "./styles";

import { useState } from "react";

function Filters({ listaReg, setFilter, setList }) {
  function applyFilter(event) {
    setFilter(true);
    renderFilteredList(event);
  }
  function removeFilter(event) {
    setFilter(false);
  }
  function renderFilteredList(event) {
    const filter = listaReg.filter((reg) => reg.regType === event.target.id);
    setList([...filter]);
  }

  return (
    <StyledFilterBar>
      <div className="filter_leftBox">
        <h3>Resumo financeiro</h3>
      </div>
      <div className="filter_rightBox">
        <button id="todos" onClick={removeFilter} className="active">
          Todos
        </button>
        <button id="entrada" onClick={applyFilter}>
          Entradas
        </button>
        <button id="despesa" onClick={applyFilter}>
          Despesas
        </button>
      </div>
    </StyledFilterBar>
  );
}

export { Filters };
