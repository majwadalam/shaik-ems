import { AppDataSource } from '../config/database.js';
import { Participant } from '../entities/Participant.js';
import { Event } from '../entities/Event.js';

export class ParticipantService {
    constructor() {
        this.participantRepository = AppDataSource.getRepository(Participant);
        this.eventRepository = AppDataSource.getRepository(Event);
    }

    async registerParticipant(eventId, participantData) {
        const event = await this.eventRepository.findOne({
            where: { id: eventId },
            relations: ['participants'],
        });

        if (!event) {
            throw new Error('Event not found');
        }

        if (event.participants && event.participants.length >= 100) { // Assuming a limit of 100 participants
            throw new Error('Participant limit reached');
        }

        const participant = this.participantRepository.create({
            ...participantData,
            event,
        });

        return await this.participantRepository.save(participant);
    }

    async updateParticipant(eventId, participantId, participantData) {
        const participant = await this.participantRepository.findOne({
            where: { id: participantId, event: { id: eventId } },
        });

        if (!participant) {
            throw new Error('Participant not found');
        }

        await this.participantRepository.update(participantId, participantData);

        return await this.participantRepository.findOne({ id: participantId });
    }

    async unregisterParticipant(participantId) {
        const participant = await this.participantRepository.findOne({
            where: { id: participantId },
        });

        if (!participant) {
            throw new Error('Participant not found');
        }

        return await this.participantRepository.delete(participantId);
    }

    async getParticipant(eventId, participantId) {
        return await this.participantRepository.findOne({
            where: { id: participantId, event: { id: eventId } },
        });
    }

    async getParticipants(eventId) {
        return await this.participantRepository.find({
            where: { event: { id: eventId } },
        });
    }

    async deleteParticipants(eventId) {
        return await this.participantRepository.delete({ event: { id: eventId } });
    }

    async getParticipantsByEvent(eventId) {
        const event = await this.eventRepository.findOne({
            where: { id: eventId },
            relations: ['participants'],
        });

        return event.participants;
    }
}
