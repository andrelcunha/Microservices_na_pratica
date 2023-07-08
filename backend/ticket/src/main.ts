import express from "express";
import PurchaseTicket from "./application/usecase/PurchaseTicket";
import Registry from "./infra/registry/Registry";
import TicketRepository from './application/repository/TicketRepository';
const app = express();
const registry = new Registry();

app.post("/purchase_ticket", async function (req: Request, res: Response) {
    const registry = new Registry();
    registry.provide("ticketRepository", TicketRepository);
    const purchaseTicket = new PurchaseTicket(registry);
    res.json({
        status: "paid"
    });
});

app.listen(3000);
