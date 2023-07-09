import TransactionRepository from "../../application/repository/TransactionRepository";
import Transaction from "../../domain/entities/Transaction";
import pgp from 'pg-promise';

export default class TransactionRepositoryDatabase implements TransactionRepository {
    async save (transaction: Transaction): Promise<void> {
        const connection = pgp()("postgres://postgres:123456@localhost:5432/app");
        await connection.query("INSERT INTO fullcycle.transaction (transaction_id, ticket_id, event_id, tid, price, status) values ($1, $2, $3, $4, $5, $6)", [transaction.transactionId, transaction.ticketId, transaction.eventId, transaction.tid, transaction.price, transaction.status]);
        await connection.$pool.end();
    }
}