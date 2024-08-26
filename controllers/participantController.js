import { ParticipantService } from '../services/participantService.js';

const participantService = new ParticipantService();

export const registerParticipant = async (req, res) => {
    try {
        const participant = await participantService.registerParticipant(
            req.params.eventId,
            req.body
        );
        res.status(201).json(participant);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getParticipantsByEvent = async (req, res) => {
    try {
        const participants = await participantService.getParticipantsByEvent(
            req.params.eventId
        );
        res.status(200).json(participants);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const unregisterParticipant = async (req, res) => {
    try {
        await participantService.unregisterParticipant(
            req.params.participantId
        );
        res.status(204).end();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};