import { StyledCard } from "./style";
import { FaTrash } from "react-icons/fa";

function Cards({ reg, removerCard, index: i, listaReg }) {
  const { regDescription: name, regValue: value, regType: type } = reg;

  function updateList(event) {
    removerCard(
      listaReg.filter((reg, index) => {
        return index !== Number(event.currentTarget.id);
      })
    );
  }

  return (
    <StyledCard className={type}>
      <div className="leftbox">
        <h3>{name}</h3>
        <p>{type}</p>
      </div>
      <div className="rightbox">
        <span>{`R$ ${value}`}</span>
        <button id={i} onClick={updateList}>
          <FaTrash className="icon" />
        </button>
      </div>
    </StyledCard>
  );
}

export { Cards };
