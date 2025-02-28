import Router from 'express'
import UserController from './src/controllers/UserController.js'

const router = new Router()

router.get('/users', UserController.index)
router.post('/users', UserController.create)
router.get('/users/:id', UserController.get)
router.put('/users/:id', UserController.update)
router.delete('/users/:id', UserController.delete)

export default router;