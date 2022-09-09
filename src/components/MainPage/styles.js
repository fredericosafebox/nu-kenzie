import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;
  transition: 1s;

  header {
    display: flex;
    justify-content: center;
    height: 12%;
    max-height: 10rem;
    width: 100%;
    background: rgb(var(--app_color--grey1));
    padding: 0 2rem;
    box-shadow: 0px 4px 32px -12px rgba(0, 0, 0, 0.25);
    z-index: 1;
    transition: 1s;

    nav {
      display: flex;
      gap: 1rem;
    }

    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      max-width: 1200px;
      height: 100%;

      h2 {
        font-size: 2rem;
        font-weight: 900;
        font-family: "Nunito", sans-serif;
        color: rgb(var(--home_bg--grey));

        span {
          color: rgb(var(--home_btn--pink));
        }
      }

      button {
        background: rgb(var(--app_color--grey2));
        color: rgb(--app_color--grey3);
        border-radius: 0.5rem;
        font-size: 1rem;
        transition: 1.2s;
        padding: 0.7rem 1rem;
        cursor: pointer;
        &:hover {
          background: rgb(var(--app_color--grey3));
          color: rgb(var(--app_color--grey1));
        }
      }

      #btn_newEntry {
        background: rgb(var(--home_btn--pink));
        color: rgb(var(--pureWhite));
        visibility: hidden;
        position: absolute;
        z-index: -1000;
        opacity: 0;
        transition: 1.2s;
        font-size: 1.5rem;
        line-height: 0;
        padding: 0.5rem;
        &:hover {
          background: rgb(var(--home_btn--pinkHover));
        }
      }

      @media screen AND (max-width: 790px) {
        #btn_newEntry {
          position: relative;
          visibility: visible;
          opacity: 1;
          z-index: 1;
          animation-name: glow;
          animation-duration: 2s;
          animation-iteration-count: infinite;
        }
        #btn_logout {
          position: absolute;
          transform: translateX(-5rem);
        }
      }

      @media screen AND (max-width: 500px) {
        #btn_logout {
          padding: 0.7rem 0.5rem;
          transform: translateX(-4rem);
        }
      }
    }

    @media screen AND (max-width: 360px) {
      & {
        padding: 0 0.5rem;
      }
    }
  }
`;

export const Main = styled.div`
  height: 88%;
  width: 100%;
  overflow: hidden;
  background: #fff;
  display: flex;
  justify-content: center;

  .mainComponentsBox {
    width: 100%;
    padding-top: 5rem;
    max-width: 1200px;
    height: 100%;
    display: flex;
    gap: 5rem;
    justify-content: center;
    align-items: flex-start;
    transition: 1s;

    #cadastroWrapper {
      display: flex;
      flex-direction: column;
      gap: 6rem;
      height: 100%;
      transition: 1s;
    }

    @media screen AND (max-width: 900px) {
      gap: 2rem;
    }

    @media screen AND (max-width: 790px) {
      flex-direction: column;
      align-items: center;

      .app__extrato--wrapper {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 2rem;

        ul,
        nav {
          max-width: 80%;
        }
      }
    }
  }
`;
