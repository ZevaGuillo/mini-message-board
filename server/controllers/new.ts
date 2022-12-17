import { Request, Response } from 'express'
import Message from '../models/message'

export const getMessages = (req: Request, res: Response) => {
    res.json({
        msg: 'Lista de mensajes'
    })
}

export const newMessage = async (req: Request, res: Response) => {

    try {
        const { username, text } = req.body;

        const newMessage = {
            username,
            text
        }

        const messageDB = new Message(newMessage);

        await messageDB.save();

        res.status(201).json({
            msg: 'Created new message',
            messageDB
        })
        
    } catch (error) {
        console.log(error);

        return res.status(500).json({
            msg: 'Error',
            error
        })
    }
}