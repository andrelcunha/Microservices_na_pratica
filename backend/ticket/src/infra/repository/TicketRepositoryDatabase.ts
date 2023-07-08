import TicketRepository from "../../application/repository/TicketRepository";
import Ticket from "../../domain/entities/Ticket";
import pgp from 'pg-promise';

export class TicketRepositoryDatabase implements TicketRepository {
    async save(ticket: Ticket): Promise<void> {
        const connection = pgp()("postgres://postgres:123456@localhost:5432/app");
        await connection.query("INSERT INTO fullcycle.ticket (ticket_id, event_id, email, status) values ($1, $2, $3, $4)", [ticket.tickedId, ticket.eventId, ticket.email, ticket.status]);
        await connection.$pool.end();
    }
}