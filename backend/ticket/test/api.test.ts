import axios from "axios";

test("Deve comprar um ingresso", async function () {
    const input = {
        event_id: "e73ae790-496b-4a82-8593-27a0d9df6042",
        email: "john.doe@gmail.com",
        creditCardToken: "987654321"
    }
    const response = await axios.post("http://localhost:3000/purchase_ticket", input);
    const output = response.data;
    expect(output.ticketId).toBeDefined();
    expect(output.status).toBe("reserved");
});