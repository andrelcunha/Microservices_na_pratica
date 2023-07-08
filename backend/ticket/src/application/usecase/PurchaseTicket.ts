import Ticket from "../../domain/entities/Ticket";
import Registry from "../../infra/registry/Registry";
import EventRepository from "../repository/EventRepository";
import TicketRepository from '../repository/TicketRepository';

export default class PurchaseTicket {
    eventRepository: EventRepository;
    ticketRepository: TicketRepository;

    constructor (readonly registry: Registry) {
        this.eventRepository = registry.inject("eventRepository");
        this.ticketRepository = registry.inject("ticketRepository");
    }

    async execute (input: Input): Promise<Output> {
        const event = await this.eventRepository.get(input.eventId)
        const ticket = Ticket.create(input.eventId, input.email);
        await this.ticketRepository.save(ticket);
        // processar o cartao de crédito
        // criar e salvar a transção
        // mandar um email com o ticket
        return {
            ticketId: ticket.tickedId,
            status: ticket.status
        }
    }
}

type Input = {
    eventId: string,
    email: string,
    credicardToken: string
}

type Output = {
    ticketId: string,
    status: string
}