import { StyledForm, StyledInputBox } from "./styles";
import { Saldo } from "../Saldo";

function CadastroFinanceiro({ novoReg, hide }) {
  function handleSubmit(event) {
    event.preventDefault();
    const inputs = Array.from(event.target).filter(
      (input) => !input.name === false
    );
    const data = {};
    inputs.forEach((input) => {
      data[input.name] = input.value;
    });
    hideForm();
    validateData(data) ? updateList(data, inputs) : warnUser(inputs);
  }

  async function hideForm() {
    /* document.getElementById("cadastroMobile").style.display = "none";
    await setTimeout(() => {}, 1000); */
    hide(false);
  }

  function validateData(data) {
    const values = Array.from(Object.values(data)).filter(
      (value) => !value === false
    );
    switch (values.length) {
      case 3:
        return true;
      default:
        return false;
    }
  }

  function updateList(data, inputs) {
    document.getElementById("warning").style.visibility = "hidden";
    novoReg(data);
    inputs.forEach((input) => {
      input.value = "";
      input.classList.remove("invalid");
    });
  }

  function warnUser(inputs) {
    const fields = inputs.filter((input) => input.type === "text");
    fields.forEach((field) => field.classList.toggle("invalid"));
    document.getElementById("warning").style.visibility = "visible";
  }

  return (
    <>
      <StyledForm method="POST" onSubmit={handleSubmit}>
        <div className="app__form--firstGroup">
          <label htmlFor="regDescription">Descrição</label>
          <input
            type="text"
            name="regDescription"
            placeholder="Digite aqui sua descrição"
            autoComplete="off"
          />
        </div>
        <div className="app__form--secondGroup">
          <StyledInputBox>
            <label htmlFor="regValue">Valor</label>
            <input
              type="text"
              autoComplete="off"
              name="regValue"
              placeholder="R$"
            />
          </StyledInputBox>
          <StyledInputBox>
            <label htmlFor="regType">Tipo de Valor</label>
            <select name="regType" defaultValue="Entrada">
              <option value="entrada">Entrada </option>
              <option value="despesa">Despesa</option>
            </select>
          </StyledInputBox>
        </div>
        <button type="submit">Inserir valor</button>
        <div id="warning">
          <p>Existem campos vazios</p>
        </div>
      </StyledForm>
    </>
  );
}

export { CadastroFinanceiro };
