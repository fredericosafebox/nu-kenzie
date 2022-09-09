import styled from "styled-components";

export const StyledCard = styled.li`
  width: 97%;
  height: 5.5rem;
  display: flex;
  justify-content: space-between;
  padding: 0.8rem 1rem;
  border-radius: 0.3rem;
  background: rgb(var(--app_color--grey1));
  font-family: "Nunito", sans-serif;
  transition: 1s;

  .leftbox {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 1rem;
  }

  .rightbox {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  }

  h3 {
    color: rgb(--home_bg--grey);
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.7rem;
  }

  p {
    color: rgb(var(--app_color--grey3));
    font-size: 0.7rem;
    font-weight: 400;
  }

  span {
    color: rgb(--home_bg--grey);
  }

  button {
    background: none;
    width: fit-content;
    height: fit-content;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  &:hover {
    background: rgb(var(--pureWhite));
    box-shadow: 0px 4px 42px -12px rgba(0, 0, 0, 0.25);
  }
`;
