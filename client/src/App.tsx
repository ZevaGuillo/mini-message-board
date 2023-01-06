import { useEffect, useState } from "react";
import { GlobalStyle } from "./theme/GlobalStyle";
import Board from "./components/Board";
import SendMessage from "./components/SendMessage";
import { Message } from "./types/messageType";
import { getMessage } from "./service/message";
import Loading from "./components/Loading";
import Card from "./components/Card";
import styled from "styled-components";
import SvgPattern from "./components/SvgPattern";

function App() {
  const [messages, setMessages] = useState<Message[]>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getMessage().then(data => {
      setMessages(data);
      setLoading(false);
    });
  }, []);

  return (
    <main className="App">
      <GlobalStyle />
      <SvgPattern className="pattern"/>
      <SvgPattern className="pattern-2"/>
      <Card>
        <StyledConent>
          <h1 className="animate__fadeInUp">Mini Message Board</h1>
          {!loading ? (
            <section className="main-content">
              <Board messages={messages} />
            </section>
          ) : (
            <section className="main-content loading">
              <Loading />
            </section>
          )}
          <SendMessage setMessages={setMessages} />
        </StyledConent>
      </Card>
    </main>
  );
}

const StyledConent = styled.main`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1{
    padding: 1rem 0;
  }

  .main-content{
    flex: 1;
    overflow: auto;
  }
  .loading{
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default App;
