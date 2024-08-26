import express from 'express';
import {
    registerParticipant,
    getParticipantsByEvent,
    unregisterParticipant,
} from '../controllers/participantController.js';

import { validateParticipant } from '../middlwares/validateParticipant.js';

const router = express.Router();

router.post('/events/:eventId/participants', registerParticipant);
router.get('/events/:eventId/participants', getParticipantsByEvent);
router.delete('/participants/:participantId', unregisterParticipant);

export default router;
