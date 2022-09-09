import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 100%;
  justify-content: flex-start;
  gap: 1rem;

  nav {
    height: 4rem;
  }
`;

export const StyledUnordList = styled.ul`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 1rem;
  max-height: 60%;
  overflow-y: auto;
  scrollbar-gutter: stable;

  &::-webkit-scrollbar {
    width: 0.4rem;
  }
  &::-webkit-scrollbar-track {
    width: 0.4rem;
    background: rgba(var(--app_color--grey3), 0.5);
    border-radius: 0.2rem;
  }
  &::-webkit-scrollbar-thumb {
    width: 0.4rem;
    background: rgb(var(--home_bg--grey));
    border-radius: 0.2rem;
  }

  .despesa {
    border-left: 0.25rem solid rgb(var(--app_color--grey2));
  }
  .entrada {
    border-left: 0.25rem solid rgb(var(--app_color--green));
  }

  h1 {
    font-family: "Nunito", sans-serif;
    font-size: 1.5rem;
    color: rgb(var(--home_bg--grey));
  }

  @media screen AND (max-width: 790px) {
    & {
      width: 90%;
      height: 100%;

      h1 {
        font-size: 1.2rem;
      }
    }
  }
`;
