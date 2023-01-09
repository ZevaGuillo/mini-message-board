import styled from "styled-components";
import { Message } from "../types/messageType";
import { getRandomColor } from "../utils/getColor";
type BoardProps = {
  messages: Message[] | undefined;
};

const Board = ({ messages }: BoardProps) => {
  const showMessages = messages?.map(message => {
    let color = getRandomColor();
    return (
      <div
        key={message._id}
        className="messages-animate">
        <div className="message-header">
          <h3>{message.username}</h3>
          <p>
            {new Date(message.added).toLocaleDateString("default", {
              year: "numeric",
              month: "2-digit",
              day: "2-digit",
              hour: "2-digit",
              minute: "2-digit",
            })}
          </p>
        </div>
        <p
          className="message"
          style={{
            backgroundColor: color,
            borderColor: color,
          }}>
          {message.text}
        </p>
      </div>
    );
  });

  return (
    <StyledBoard>
      {!!messages && (
        <section className="messages-section">{showMessages}</section>
      )}
    </StyledBoard>
  );
};

const StyledBoard = styled.main`
  .messages-section {
    padding: 0.5rem 1rem;
    overflow: hidden;
  }
  h3 {
    padding-bottom: 0.5rem;
  }
  .message {
    color: #363f4d;
    padding: 18px 20px;
    line-height: 26px;
    font-size: 16px;
    border-radius: 7px;
    margin-bottom: 30px;
    width: fit-content;
    max-width: 100%;
    position: relative;
    white-space: initial;
    border: none;

    &::after {
      content: "";
      bottom: 98%;
      left: 0.7rem;
      border: solid transparent;
      content: " ";
      height: 0;
      width: 0;
      position: absolute;
      pointer-events: none;
      border-bottom-color: inherit;
      border-width: 7px;
      margin-left: -7px;
    }
  }
  .message-header {
    display: flex;
    p {
      flex: 1;
      text-align: end;
      padding-left: 0.5rem;
      opacity: 0.4;
    }
  }
  .messages-animate {
    -webkit-animation: slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
    animation: slide-top 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
  @-webkit-keyframes slide-top {
    0% {
      -webkit-transform: translateY(100px);
      transform: translateY(100px);
    }
    100% {
      -webkit-transform: translateY(0px);
      transform: translateY(0px);
    }
  }
  @keyframes slide-top {
    0% {
      -webkit-transform: translateY(100px);
      transform: translateY(100px);
    }
    100% {
      -webkit-transform: translateY(0px);
      transform: translateY(0px);
    }
  }
`;

export default Board;
