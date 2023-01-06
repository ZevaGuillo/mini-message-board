import { Message } from "../types/messageType";

export const getMessage = async () => {
  const res = await fetch(import.meta.env.VITE_SERVER);
  const data = await res.json();

  return [...data.messages] as Message[]
}

export const createMessage = async (data: Omit<Message, '_id' | 'added'>) => {

  const res = await fetch(import.meta.env.VITE_SERVER, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  const json = await res.json();

  return json;
}


