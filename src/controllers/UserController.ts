import {Request, Response} from "express";
import userRepository from "../repositories/userRepository";

class UserController {
    async index(req: Request, res: Response) {
        const users = await userRepository.getAll()

        res.json({data: users})
    }

    async create(req: Request, res: Response) {
        const user = await userRepository.create(req.body)

        res.json({data: user})
    }

    async get(req: Request, res: Response) {
        const user = await userRepository.get(parseInt(req.params.id))

        if (!user) {
            res.status(404).json({message: 'Not found.'})
        }

        res.json({data: user})
    }

    async update(req: Request, res: Response) {
        try {
            const user = await userRepository.update(parseInt(req.params.id), req.body)

            res.json({data: user})
        } catch (PrismaClientKnownRequestError) {
            res.status(404).json({message: 'Not found.'})
        }
    }

    async delete(req: Request, res: Response) {
        try {
            await userRepository.delete(parseInt(req.params.id))

            res.json()
        } catch (PrismaClientKnownRequestError) {
            res.status(404).json({message: 'Not found.'})
        }
    }
}

export default new UserController()