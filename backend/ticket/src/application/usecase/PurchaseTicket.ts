import Ticket from "../../domain/entities/Ticket";
import Registry from "../../infra/registry/Registry";

export default class PurchaseTicket {

    constructor (readonly registry: Registry) {
    }

    async execute (input: Input): Promise<void> {
        const ticket = Ticket.create(input.eventId, input.email);
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