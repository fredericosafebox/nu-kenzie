import { Cards } from "../Cards";
import { NoCards } from "../NoCards";
import { Filters } from "../Filters";
import { useState } from "react";
import { StyledUnordList, Wrapper } from "./styles.js";

function ExtratoFinanceiro({ listaReg, modificarReg }) {
  const [isFiltered, setIsFiltered] = useState(false);
  const [filteredList, setFilteredList] = useState([]);

  return (
    <Wrapper className="app__extrato--wrapper">
      <Filters
        listaReg={listaReg}
        setFilter={setIsFiltered}
        setList={setFilteredList}
      />
      <StyledUnordList>
        {listaReg.length > 0 ? (
          !isFiltered ? (
            listaReg.map((reg, index) => (
              <Cards
                reg={reg}
                key={index}
                index={index}
                removerCard={modificarReg}
                listaReg={listaReg}
              />
            ))
          ) : (
            filteredList.map((reg, index) => (
              <Cards
                reg={reg}
                key={index}
                index={index}
                removerCard={modificarReg}
                listaReg={listaReg}
              />
            ))
          )
        ) : (
          <>
            <h1>Você ainda não possui lançamentos</h1>
            <NoCards />
            <NoCards />
            <NoCards />
            <NoCards />
          </>
        )}
      </StyledUnordList>
    </Wrapper>
  );
}

export { ExtratoFinanceiro };
