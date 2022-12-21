import { useEffect, useState } from 'react';
import { getMessage } from "../service/message"
import { Message } from '../types/messageType';

const Board = () => {
    const [messages, setMessages] = useState<Message[]>()

    useEffect(() => {
        getMessage().then((data)=>setMessages(data))
        console.log(messages);
        
    }, [])
    

  return (
    <div>
        <h2>Messages</h2>
        <div>
            {messages?.map(message => (
                <div key={message._id}>
                    <h3>{message.username}</h3>
                    <p>{message.text}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Board