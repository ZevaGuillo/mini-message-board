import { Message } from "../types/messageType";

export const getMessage = async () => {
  const res = await fetch('https://mini-message-board-server.onrender.com/new');
  const data = await res.json();

  return [...data.messages] as Message[]
}

export const createMessage = async (data: Omit<Message, '_id' | 'added'>) => {

  const res = await fetch('https://mini-message-board-server.onrender.com/new', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  const json = await res.json();

  return json;
}


