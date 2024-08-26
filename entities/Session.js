import { EntitySchema } from 'typeorm';

export const Session = new EntitySchema({
    name: 'Session',
    tableName: 'sessions',
    columns: {
        id: {
            primary: true,
            type: 'int',
            generated: true,
        },
        title: {
            type: 'text',
        },
        speaker: {
            type: 'text',
        },
    },
    relations: {
        event: {
            type: 'many-to-one',
            target: 'Event',
            inverseSide: 'sessions',
            joinColumn: true,
        },
    },
});
