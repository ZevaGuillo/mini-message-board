import {Request, Response} from 'express'

export const getNew = (req: Request, res: Response)=>{
    res.json({
        msg: 'getUsuarios'
    })
}