import express, {Request, Response} from "express";
import PurchaseTicket from "./application/usecase/PurchaseTicket";
import Registry from "./infra/registry/Registry";
import TicketRepositoryDatabase  from "./infra/repository/TicketRepositoryDatabase";
import EventRepositoryDatabase from "./infra/repository/EventRepositoryDatabase";
import FakePaymentGateway from "./infra/gateway/FakePaymentGateway";
import TransactionRepositoryDatabase from "./infra/repository/TransactionRepositoryDatabase";
const app = express();
app.use(express.json())
const registry = new Registry();

app.post("/purchase_ticket", async function (req: Request, res: Response) {
    const registry = new Registry();
    registry.provide("ticketRepository", new TicketRepositoryDatabase());
    registry.provide("eventRepository", new EventRepositoryDatabase());
    registry.provide("transactionRepository", new TransactionRepositoryDatabase());
    registry.provide("paymentGateway", new FakePaymentGateway());

    const purchaseTicket = new PurchaseTicket(registry);
    const output = await purchaseTicket.execute(req.body);
    res.json(output);
});

app.listen(3000);
