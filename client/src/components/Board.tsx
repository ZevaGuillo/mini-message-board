import { useEffect, useState } from "react";
import styled from "styled-components";
import { getMessage } from "../service/message";
import { Message } from "../types/messageType";

type BoardProps = {
  messages: Message[] | undefined;
};

const Board = ({ messages }: BoardProps) => {
  return (
    <StyledBoard>
      <h2>Messages</h2>
      {!!messages && (
        <div>
          {messages.map(message => (
            <div
              key={message._id}
              className="messages messages-animate">
              <h3>{message.username}</h3>
              <p>{message.text}</p>
            </div>
          ))}
        </div>
      )}
    </StyledBoard>
  );
};

const StyledBoard = styled.main`
  .messages {
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
