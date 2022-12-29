import { Request, Response } from 'express';

export const home = (req: Request, res: Response) =>{
    res.render('pages/page')
}
export const carros = (req: Request, res: Response) =>{
    res.render('pages/page')
}
export const motos = (req: Request, res: Response) =>{
    res.render('pages/page')
}
export const caminhoes = (req: Request, res: Response) =>{
    res.render('pages/page')
}