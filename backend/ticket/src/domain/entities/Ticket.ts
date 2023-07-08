import crypto from "crypto"
import create from "domain";

export default class Ticket {

    private constructor (readonly tickedId: string, readonly eventId: string, readonly email: string, readonly status: string) {
        
    }

    static create (eventId: string, email: string) {
        const tickedId = crypto.randomUUID();
        const initialStatus = "reserved";
        return new Ticket(tickedId, eventId, email, initialStatus);
    }
}