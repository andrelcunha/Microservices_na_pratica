import axios from "axios";

test("Deve comprar um ingresso", async function () {
    const input = {
        event_id: "bf6a9b3d-4d5c-4c9d-bf3b-4a091b05dc76",
        email: "john.doe@gmail.com",
        creditCardToken: "987654321"
    }
    const response = await axios.post("http://localhost:3000/purchase_ticket", input);
    const output = response.data;
    console.log(output);
    expect(output.ticketId).toBeDefined();
    expect(output.tid).toBeDefined();
    expect(output.status).toBe("reserved");
});