import { Info } from '../entity'
import { Request, Response } from 'express'

export const getIndex = (req: Request, res: Response, next) => {
    res.render('index')
}

export const getAbout = (req: Request, res: Response, next) => {
    Info.findOne(1).then((content) => {
        res.render('article', { content: content })
    })
}

export const getTOS = (req: Request, res: Response, next) => {
    Info.findOne(2).then((content) => {
        res.render('article', { content: content })
    })
}

export const getShop = (req: Request, res: Response, next) => {
    res.redirect('/')
}
