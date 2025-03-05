import userRepository from "../repositories/userRepository.js";

class UserController {
    async index(req, res) {
        const users = await userRepository.getAll()

        res.json({data: users})
    }

    async create(req, res) {
        const user = await userRepository.create(req.body)

        res.json({data: user})
    }

    async get(req, res) {
        const user = await userRepository.get(parseInt(req.params.id))

        if (null === user) {
            res.json(404, {message: 'Not found.'})
        }

        res.json({data: user})
    }

    async update(req, res) {
        try {
            const user = await userRepository.update(parseInt(req.params.id), req.body)

            res.json({data: user})
        } catch (PrismaClientKnownRequestError) {
            res.json(404, {message: 'Not found.'})
        }
    }

    async delete(req, res) {
        try {
            await userRepository.delete(parseInt(req.params.id))

            res.json()
        } catch (PrismaClientKnownRequestError) {
            res.json(404, {message: 'Not found.'})
        }
    }
}

export default new UserController()