import { WrapperSaldo } from "./styles";

function Saldo({ extrato }) {
  return (
    <WrapperSaldo>
      <div id="saldo__box">
        <div>
          <h3>Valor total:</h3>
          <p>O valor se refere ao saldo</p>
        </div>
        <div>
          <span>
            {`R$ ${extrato.reduce((total, obj) => {
              let value = obj.regValue.split(",");
              value.length === 2
                ? (value = value.join("."))
                : (value = value.join("") + ".00");
              switch (obj.regType) {
                case "entrada":
                  return total + Number(value);
                default:
                  return total - Number(value);
              }
            }, 0)}`}
          </span>
        </div>
      </div>
    </WrapperSaldo>
  );
}

export { Saldo };
