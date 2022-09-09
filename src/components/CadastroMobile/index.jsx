import { CadastroFinanceiro } from "../CadastroFinanceiro";
import { Wrapper } from "./styles";

function CadastroMobile({ novoReg, hideForm }) {
  async function hide(event) {
    if (event.target.id === event.currentTarget.id) {
      document.getElementById("cadastroMobile").style.display = "none";
      await setTimeout(() => {}, 1000);
      hideForm(false);
    }
  }
  return (
    <Wrapper id="cadastroMobile" onClick={hide}>
      <CadastroFinanceiro novoReg={novoReg} hide={hideForm} />
    </Wrapper>
  );
}

export { CadastroMobile };
