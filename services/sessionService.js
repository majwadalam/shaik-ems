import { AppDataSource } from "../config/database.js";
import { Session } from "../entities/Session.js";

export class SessionService {
    constructor() {
        this.sessionRepository = AppDataSource.getRepository(Session);
    }

    async getSession(id) {
        return await this.sessionRepository.findOneBy({ id });
    }

    async createSession(data) {
        const session = this.sessionRepository.create(data);
        return await this.sessionRepository.save(session);
    }

    async updateSession(id, data) {
        await this.sessionRepository.update(id, data);
        return await this.sessionRepository.findOneBy({ id });
    }

    async deleteSession(id) {
        return await this.sessionRepository.delete(id);
    }

    async getSessionsByEvent(eventId) {
        return await this.sessionRepository.findAllBy({ eventId });
    }
}