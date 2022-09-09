import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
  align-items: center;
  transition: 1s;
  background: rgb(var(--home_bg--grey));
`;

export const Content = styled.div`
  max-width: 1000px;
  max-height: 600px;
  display: flex;
  align-items: center;
  transition: 1s;

  @media screen AND (max-width: 900px) {
    padding-left: 0.5rem;
  }

  @media screen AND (max-width: 700px) {
    width: 100%;
    height: 100%;
    padding: 0;
    #imgBox {
      display: none;
    }
  }
`;

export const ContentBox = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 2rem;
  transition: 1s;

  h1 {
    color: rgba(var(--pureWhite), 1);
    font-family: "Nunito", sans-serif;
    font-weight: 900;
    font-size: 2.1rem;
    max-width: 18rem;
    line-height: 2.7rem;
    transition: 1s;
  }

  p {
    color: rgba(var(--pureWhite), 0.8);
    font-family: "Nunito", sans-serif;
    font-size: 1rem;
    transition: 1s;
  }

  button {
    background: rgb(var(--home_btn--pink));
    color: rgba(var(--pureWhite), 0.9);
    padding: 1rem 6rem;
    border-radius: 0.5rem;
    font-size: 1rem;
    cursor: pointer;
    transition: 0.5s;
  }
  img {
    max-width: 100%;
    align-self: center;
    transform: scale(1.4);
    transition: 1s;
  }
  button:hover {
    background: rgb(var(--home_btn--pinkHover));
  }
  @media screen AND (max-width: 700px) {
    width: 100%;
    align-items: center;

    h1 {
      width: 100%;
      text-align: center;
    }

    img {
      display: none;
    }
  }
`;

export const ContentTitle = styled.h2`
  font-size: 1.4rem;
  font-weight: 900;
  font-family: "Nunito", sans-serif;
  color: rgba(var(--pureWhite), 1);
  span {
    color: rgb(var(--home_btn--pink));
  }
`;
