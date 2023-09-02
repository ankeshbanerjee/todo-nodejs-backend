import express from 'express'
import isAuthenticated from '../middlwares/auth.js'
import {
    newTask,
    getMyTasks,
    udpateTask,
    deleteTask
} from "../controllers/task.js"

const router = express.Router()

router.post('/new', isAuthenticated, newTask)

router.get('/myTasks', isAuthenticated, getMyTasks)

router
    .route('/:taskId')
    .put(isAuthenticated, udpateTask)
    .delete(isAuthenticated, deleteTask)

export default router