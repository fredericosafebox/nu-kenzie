import styled from "styled-components";

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 22rem;
  max-width: 24rem;
  max-height: 23rem;
  padding: 2.3rem 1.5rem;
  border: 1px solid rgb(var(--app_color--grey2));
  border-radius: 0.25rem;
  gap: 1.1rem;
  font-family: "Inter", sans-serif;
  background: rgb(var(--pureWhite));
  transition: 1s;

  #warning {
    background: none;
    color: rgb(--home_bg--grey);
    box-shadow: 0 0 5px red;
    width: 14rem;
    height: 2rem;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
    transform: translateY(13rem);
    font-weight: 600;
    visibility: hidden;
  }

  .invalid {
    box-shadow: 0 0 1px 1px red;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 0.5rem;

    label {
      color: rgb(var(--home_bg--grey));
      font-size: 0.75rem;
      font-weight: 400;
      font-family: "Nunito", sans-serif;
    }

    input {
      width: 100%;
      height: 3.3rem;
      padding: 0 1rem;
      border-radius: 0.5rem;
      background: rgb(var(--app_color--grey1));
      transition: 1s;

      &::placeholder {
        font-family: "Nunito", sans-serif;
        color: rgb(var(--app_color--grey50));
      }

      &:focus {
        outline: none;
      }
    }
  }

  .app__form--firstGroup {
    width: 100%;
  }

  .app__form--secondGroup {
    align-items: center;
    flex-direction: row;
    width: 100%;
  }

  .app__form--firstGroup::after {
    content: "Ex: Compra de roupas";
    font-size: 0.75rem;
    font-family: "Inter", sans-serif;
    color: rgb(var(--app_color--grey50));
  }

  button {
    width: 100%;
    height: 3rem;
    border-radius: 0.5rem;
    background: rgb(var(--home_btn--pink));
    color: rgb(var(--pureWhite));
    font-size: 1rem;
    transition: 1s;
    cursor: pointer;

    &:hover {
      background: rgb(var(--home_btn--pinkHover));
    }
  }
`;

export const StyledInputBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 50%;

  input {
    width: 50%;
  }

  select {
    width: 100%;
    height: 3rem;
    border-radius: 0.5rem;
    font-size: 0.75rem;
    transition: 1s;
    cursor: pointer;
    background: rgb(var(--app_color--grey1));
    color: rgb(var(--app_color--grey3));
    padding: 1rem;

    option {
      color: rgb(var(--app_color--grey3));
    }

    &:focus {
      outline: none;
    }
  }
`;
