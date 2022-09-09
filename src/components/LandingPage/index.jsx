import { Wrapper, Content, ContentBox, ContentTitle } from "./styles";
import groupImg from "../../assets/img/262.png";
function LandingPage({ login }) {
  return (
    <Wrapper>
      <Content>
        <ContentBox>
          <ContentTitle>
            <span>Nu</span> Kenzie
          </ContentTitle>
          <h1>Centralize o controle das suas finanças</h1>
          <p>de forma rápida e segura</p>
          <button onClick={login}>Iniciar</button>
        </ContentBox>
        <ContentBox id="imgBox">
          <img src={groupImg} alt="background" />
        </ContentBox>
      </Content>
    </Wrapper>
  );
}

export { LandingPage };
