import styled from "styled-components";

type Cardprops = {
  children: JSX.Element | JSX.Element[];
};

const Card = ({ children }: Cardprops) => {
  return (
    <StyledCard className="card">
      <div className="tools">
        <div className="circle">
          <span className="red box"></span>
        </div>
        <div className="circle">
          <span className="yellow box"></span>
        </div>
        <div className="circle">
          <span className="green box"></span>
        </div>
      </div>
      <div className="attribution">
        Coded by{" "}
        <a
          className="github"
          href="https://github.com/ZevaGuillo"
          target="_blank"
          rel="noopener noreferrer">
          <i
            className="fab fa-github"
            aria-hidden="true"></i>{" "}
          ZevaGuillo
        </a>
      </div>
      <div className="card__content">{children}</div>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  width: 95vw;
  height: 90vh;
  position: relative;
  margin: 0 auto;
  background-color: var(--white);
  border-radius: 8px;
  z-index: 1;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
    rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

  .tools {
    position: absolute;
    border-radius: 8px 8px 0 0;
    background: #2f283b;
    width: 100%;
    display: flex;
    align-items: center;
    padding: 9px;
    .circle {
      padding: 0 4px;
    }

    .box {
      display: inline-block;
      align-items: center;
      width: 10px;
      height: 10px;
      padding: 1px;
      border-radius: 50%;
    }

    .red {
      background-color: #ff605c;
    }

    .yellow {
      background-color: #ffbd44;
    }

    .green {
      background-color: #00ca4e;
    }
  }
  .attribution {
    position: absolute;
    top: 9px;
    left: 50%;
    transform: translateX(-50%);
    color: #aaa2c9;
    a {
      padding-left: .2rem;
      text-decoration: none;
      color: #dab3b4;
    }
  }

  .card__content {
    padding: 2.5rem 9px 9px;
    height: 100%;
    border-radius: 8px;
  }

  @media (min-width: 900px) {
    width: 50vw;
  }
`;

export default Card;
