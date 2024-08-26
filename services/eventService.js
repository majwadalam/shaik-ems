import { AppDataSource } from '../config/database.js';
import { Event } from '../entities/Event.js';

export class EventService {
    constructor() {
        this.eventRepository = AppDataSource.getRepository(Event);
    }

    async getEvent(id) {
        return await this.eventRepository.findOneBy({ id });
    }

    async createEvent(data) {
        const event = this.eventRepository.create(data);
        return await this.eventRepository.save(event);
    }

    async updateEvent(id, data) {
        await this.eventRepository.update(id, data);
        return await this.eventRepository.findOneBy({ id });
    }

    async deleteEvent(id) {
        return await this.eventRepository.delete(id);
    }

    async getEventReport(id) {
        return await this.eventRepository.findOne({
            where: { id },
            relations: ['sessions', 'participants'],
        });
    }

    async getAllEvents() {
        return await this.eventRepository.find();
    }
}
