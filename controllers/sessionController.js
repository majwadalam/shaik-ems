import { SessionService } from "../services/sessionService.js";

const sessionService = new SessionService();

export const getSession = async (req, res) => {
    try {
        const session = await sessionService.getSession(req.params.id);
        res.status(200).json(session);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const createSession = async (req, res) => {
    try {
        const session = await sessionService.createSession(req.body);
        res.status(201).json(session);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const updateSession = async (req, res) => {
    try {
        const session = await sessionService.updateSession(req.params.id, req.body);
        res.status(200).json(session);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const deleteSession = async (req, res) => {
    try {
        await sessionService.deleteSession(req.params.id);
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const getSessionsByEvent = async (req, res) => {
    try {
        const sessions = await sessionService.getSessionsByEvent(req.params.eventId);
        res.status(200).json(sessions);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}