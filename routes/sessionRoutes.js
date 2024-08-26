import {
    getSession,
    getSessionsByEvent,
    createSession,
    updateSession,
    deleteSession
} from "../controllers/sessionController.js"

import express from "express"

const router = express.Router()

router.get("/sessions/:id", getSession)
router.get("/events/:eventId/sessions", getSessionsByEvent)
router.post("/sessions", createSession)
router.put("/sessions/:id", updateSession)
router.delete("/sessions/:id", deleteSession)

export default router;