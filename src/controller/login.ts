import { insertUserDB, getPasswordByEmail } from "../model/login";

import { Request, Response } from 'express'

export const createAccount = async (req : Request, res: Response) => {
    const {email, name, password} = req.body
    try {
        const response = await insertUserDB(name, email, password)
        res.status(200).json({response})
    } catch (error) {
        res.status(500).json({message: 'Error internal', error: error})
    }
}

export const login = async (req: Request, res: Response ) => {
    const { email, password } = req.query
    const correctPassword = await getPasswordByEmail(email) 
    correctPassword === password ? res.status(200).json({message: 'Correct credentials'}) : res.status(200).json({message: 'Invalid credentials'})
}