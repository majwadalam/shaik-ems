import { EntitySchema } from 'typeorm';

export const Event = new EntitySchema({
    name: 'Event',
    tableName: 'events',
    columns: {
        id: {
            primary: true,
            type: 'int',
            generated: true,
        },
        name: {
            type: 'text',
        },
        description: {
            type: 'text',
        },
        location: {
            type: 'text',
        },
        date: {
            type: 'text',
        }
    },
    relations: {
        sessions: {
            type: 'one-to-many',
            target: 'Session',
            inverseSide: 'event',
            cascade: true,
        },
        participants: {
            type: 'one-to-many',
            target: 'Participant',
            inverseSide: 'event',
            cascade: true,
        }
    },
});
