import styled from "styled-components";

export const StyledFilterBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 97%;
  font-family: "Nunito", sans-serif;
  transition: 1s;

  .filter__leftBox {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
  }
  .filter_rightBox {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 1rem;
  }
  h3 {
    color: rgb(--home_bg--grey);
    font-size: 1rem;
    font-weight: 700;
  }

  button {
    font-size: 0.9rem;
    font-weight: 600;
    color: rgb(var(--app_color--grey3));
    background: rgb(var(--app_color--grey2));
    border-radius: 0.5rem;
    padding: 1rem;
    transition: 1s;
    cursor: pointer;
    &:hover {
      background: rgb(var(--home_bg--grey));
      color: rgb(var(--pureWhite));
    }

    @media screen AND (max-width: 366px) {
      & {
        padding: 0.5rem;
      }
    }
  }

  .active {
    background: rgb(var(--home_btn--pink));
    color: rgb(var(--pureWhite));
    &:hover {
      background: rgb(var(--home_btn--pinkHover));
    }
  }

  @media screen AND (max-width: 580px) {
    & {
      flex-direction: column;
      gap: 0.5rem;
    }
  }
`;
