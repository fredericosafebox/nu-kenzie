import styled from "styled-components";

export const WrapperSaldo = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Nunito", sans-serif;

  #saldo__box {
    width: 22rem;
    max-width: 23rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.5rem;
    border-radius: 0.25rem;
    border: 1px solid rgb(var(--app_color--grey2));
    transition: 1s;

    div {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      height: 100%;
      gap: 1rem;

      h3 {
        color: rgb(var(--home_bg--grey));
        font-weight: 700;
        font-size: 1rem;
      }
      p {
        color: rgb(var(--app_color--grey3));
        font-size: 0.7rem;
        font-weight: 400;
      }
      span {
        color: rgb(var(--home_btn--pink));
        font-size: 1rem;
        font-weight: 700;
      }
    }
  }
`;
