import { Wrapper, Main } from "./styles";

import { useState } from "react";
import { useEffect } from "react";
import { FaPlusSquare } from "react-icons/fa";

import { CadastroFinanceiro } from "../CadastroFinanceiro";
import { ExtratoFinanceiro } from "../ExtratoFinanceiro";
import { CadastroMobile } from "../CadastroMobile";
import { Saldo } from "../Saldo";

function MainPage({ logout }) {
  const [extratoFinanceiro, setExtratoFinanceiro] = useState([]);
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 790;

  const [isCadastro, setIsCadastro] = useState(false);

  async function showForm() {
    setIsCadastro(true);
    await setTimeout(() => {}, 1000);
    document.getElementById("cadastroMobile").style.display = "flex";
  }

  useEffect(() => {
    widthSetter();
    window.addEventListener("resize", widthSetter);
  });

  function widthSetter() {
    setWidth(window.innerWidth);
  }

  function updateExtrato(newEntry) {
    setExtratoFinanceiro([...extratoFinanceiro, newEntry]);
  }

  return (
    <Wrapper>
      <header>
        <div>
          <h2>
            <span>Nu</span> Kenzie
          </h2>
          <nav>
            <button id="btn_logout" onClick={logout}>
              Início
            </button>
            <button id="btn_newEntry" onClick={showForm}>
              <FaPlusSquare />
            </button>
          </nav>
        </div>
      </header>
      <Main>
        <div className="mainComponentsBox">
          {width > breakpoint && (
            <div id="cadastroWrapper">
              <CadastroFinanceiro
                novoReg={updateExtrato}
                hideForm={setIsCadastro}
              />
              <Saldo extrato={extratoFinanceiro} />
            </div>
          )}
          {width < breakpoint && <Saldo extrato={extratoFinanceiro} />}

          <ExtratoFinanceiro
            listaReg={extratoFinanceiro}
            modificarReg={setExtratoFinanceiro}
          />
        </div>
        {isCadastro && (
          <CadastroMobile novoReg={updateExtrato} hideForm={setIsCadastro} />
        )}
      </Main>
    </Wrapper>
  );
}

export { MainPage };
