DROP SCHEMA fullcycle CASCADE;
CREATE SCHEMA fullcycle;

CREATE TABLE fullcycle.event (
    event_id UUID,
    description TEXT,
    price NUMERIC,
    capacity INTEGER
);

CREATE TABLE fullcycle.ticket (
    ticket_uuid UUID,
    event_id UUID,
    email TEXT,
    status TEXT
);

CREATE TABLE fullcycle.transaction (
    transaction_id UUID,
    ticket_id UUID,
    event_id UUID,
    tid TEXT,
    price NUMERIC,
    status TEXT
);

INSERT INTO fullcycle.event (event_id, description, price, capacity) VALUES ('bf6a9b3d-4d5c-4c9d-bf3b-4a091b05dc76', 'Foo Figters 10/10/2022 22:00', 300, 100000)