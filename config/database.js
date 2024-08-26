import { DataSource } from 'typeorm';
import { Event } from '../entities/Event.js';
import { Session } from '../entities/Session.js';
import { Participant } from '../entities/Participant.js';

export const AppDataSource = new DataSource({
    type: 'sqlite',
    database: './event-management.sqlite',
    synchronize: true,
    entities: [Event, Session, Participant],
});
