import { Message } from "../types/messageType";

export const getMessage = async() => {
    const res = await fetch('https://mini-message-board-server.onrender.com/new');
    const data = await res.json();
    
  return [...data.messages] as Message[]
}
