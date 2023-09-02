import express from 'express'
import {
    getProfile,
    login,
    logout,
    register
} from '../controllers/user.js'
import isAuthenticated from '../middlwares/auth.js';

const router = express.Router();

router.post("/login", login);

router.post("/register", register);

router.get("/me", isAuthenticated, getProfile)

router.get("/logout", isAuthenticated, logout);


export default router;
