import { EntitySchema } from 'typeorm';

export const Participant = new EntitySchema({
    name: 'Participant',
    tableName: 'participants',
    columns: {
        id: {
            primary: true,
            type: 'int',
            generated: true,
        },
        name: {
            type: 'text',
        },
        email: {
            type: 'text',
        },
    },
    relations: {
        event: {
            type: 'many-to-one',
            target: 'Event',
            inverseSide: 'participants',
            joinColumn: true,
        },
    },
});
