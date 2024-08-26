import express from 'express'
import { followOrunfollow, login, logout, userSignup } from '../controllers/userControllers.js'

const router = express.Router()

router.post('/signup', userSignup)
router.post('/login', login)
router.post('/logout', logout)
router.post('/followunfollow/:id', followOrunfollow)

export default router