import express from 'express'
import isAuthenticated from '../middlwares/auth.js'
import {
    newTask,
    getMyTasks,
    udpateTask,
    deleteTask,
    editTask
} from "../controllers/task.js"

const router = express.Router()

router.post('/new', isAuthenticated, newTask)

router.get('/myTasks', isAuthenticated, getMyTasks)

router
    .route('/:taskId')
    .put(isAuthenticated, udpateTask)
    .delete(isAuthenticated, deleteTask)

router.put("/editTask/:taskId", isAuthenticated, editTask)

export default router