import { useCallback, useEffect, useState } from "react";
import { GlobalStyle } from "./theme/GlobalStyle";
import Board from "./components/Board";
import SendMessage from "./components/SendMessage";
import { Message } from "./types/messageType";
import { getMessage } from "./service/message";
import Card from "./components/Card";
import styled from "styled-components";
import SvgPattern from "./components/SvgPattern";
import useInfiniteScroll from "./hooks/useInfiniteScroll";
import Loading from "./components/Loading";

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [last, setLast] = useState(false);
  const { loadMoreRef, skip } = useInfiniteScroll();

  const fetchMessages = useCallback(async () => {
    try {
      setLoading(true);
      if (!last) {
        getMessage(skip).then(data => {
          setMessages(prev => [...data.reverse(), ...prev]);
          if (data.length < 10 && data.length > 0) {
            setLast(true);
          }
        });
      }
    } catch (error) {
      console.log(error);
      alert(error);
    } finally {
      setLoading(false);
    }
  }, [skip]);

  useEffect(() => {
    fetchMessages();
  }, [fetchMessages]);

  return (
    <main className="App">
      <GlobalStyle />
      <SvgPattern className="pattern" />
      <SvgPattern className="pattern-2" />
      <Card>
        <StyledConent>
          <h1 className="animate__fadeInUp">Mini Message Board</h1>

          <section className="main-content">
            <Board
              messages={messages}
              loadMoreRef={loadMoreRef}
              last={last}
            />
          </section>

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

  h1 {
    padding: 1rem 0;
  }

  .main-content {
    flex: 1;
    overflow: auto;
  }
  .loading {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default App;
