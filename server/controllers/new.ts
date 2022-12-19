import { Request, Response } from 'express'
import Message from '../models/message'

export const getMessages = async (req: Request, res: Response) => {

    const { limit = 10, since = 0 } = req.query;

    const messages = await Message.find()
        .skip(Number(since))
        .limit(Number(limit))

    res.json({
        messages
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