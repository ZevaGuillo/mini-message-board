import {Request, Response} from 'express'

export const getMessages = (req: Request, res: Response)=>{
    res.json({
        msg: 'Lista de mensajes'
    })
}

export const newMessage = (req: Request, res: Response)=> {
    res.json({
        msg: 'Nuevo mensaje'
    })
}