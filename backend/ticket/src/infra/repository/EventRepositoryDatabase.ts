import EventRepository from "../../application/repository/EventRepository";
import Event from "../../domain/entities/Event";
import pgp from 'pg-promise';

export class EventRepositoryDatabase implements EventRepository {
    
    async get(eventId: string): Promise<Event> {
        const connection = pgp()("postgres://postgres:123456@localhost:5432/app");
        const [eventData] = await connection.query("SELECT * FROM fullcycle.event WHERE event_id = $1", [eventId]);
        await connection.$pool.end();
        return new Event (eventData.event_id, eventData.description, parseFloat(eventData.price), eventData.capacity);
    }
}