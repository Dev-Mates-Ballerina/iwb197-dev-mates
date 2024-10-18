import ballerinax/mysql;
import ballerinax/mysql.driver as _; // This bundles the driver to the project so that you don't need to bundle it via the `Ballerina.toml` file.
import ballerina/sql;

public type User record {|
    int user_id?;
    string name;
    string email;
    string password;  // Only store the hashed password
    string cpassword; // Should also be hashed before storing
|};
public type Budget record {|
    int id?;
    string name;
    string email;
    string phone;
    string price;
    string uname?;       // Optional field
    string uphone?;      // Optional field
    string udate?;       // Optional field
    string ulocation?;   // Optional field
|};

public type Event record {|
    int id?;
    string name;
    int budget;
    string location;  // Only store the hashed password
    string date; // Should also be hashed before storing
|};

public type Charity record {|
    int id?;
    string name;
    string date;
    string cause;  // Only store the hashed password
    int amount; // Should also be hashed before storing
|};


configurable string USER = ?;
configurable string PASSWORD = ?;
configurable string HOST = ?;
configurable int PORT = ?;
configurable string DATABASE = ?;

final mysql:Client dbClient = check new(
    host=HOST, user=USER, password=PASSWORD, port=PORT, database="ballerina"
);

isolated function register(User user) returns int|error {
    // Insert the plain text passwords into the database
    sql:ExecutionResult result = check dbClient->execute(`
        INSERT INTO users (user_id, name, email, password, cpassword)
        VALUES (${user.user_id}, ${user.name}, ${user.email}, 
                ${user.password}, ${user.cpassword})
    `);

    int|string? lastInsertId = result.lastInsertId;
    if lastInsertId is int {
        return lastInsertId;
    } else {
        return error("Unable to obtain last insert ID");
    }
}



isolated function getAllUsers() returns User[]|error {
    User[] users = [];
    stream<User, error?> resultStream = dbClient->query(
        `SELECT * FROM users`
    );
    check from User user in resultStream
        do {
            users.push(user);
        };
    check resultStream.close();
    return users;
}


isolated function saveBudget(Budget budget) returns int|error {
    // Insert the plain text passwords into the database
    sql:ExecutionResult result = check dbClient->execute(`
        INSERT INTO budget (id, name, email, phone, price, uname, uphone, udate, ulocation)
        VALUES (${budget.id}, ${budget.name}, ${budget.email}, 
                ${budget.phone}, ${budget.price}, ${budget.uname}, ${budget.uphone}, ${budget.udate}, ${budget.ulocation})
    `);

    int|string? lastInsertId = result.lastInsertId;
    if lastInsertId is int {
        return lastInsertId;
    } else {
        return error("Unable to obtain last insert ID");
    }
}

isolated function saveEvents(Event event) returns int|error {
    // Insert the plain text passwords into the database
    sql:ExecutionResult result = check dbClient->execute(`
        INSERT INTO events (id, name, budget, location, date)
        VALUES (${event.id}, ${event.name}, ${event.budget}, 
                ${event.location}, ${event.date})
    `);

    int|string? lastInsertId = result.lastInsertId;
    if lastInsertId is int {
        return lastInsertId;
    } else {
        return error("Unable to obtain last insert ID");
    }
}


isolated function getAllEvents() returns Event[]|error {
    Event[] events = [];
    stream<Event, error?> resultStream = dbClient->query(
        `SELECT * FROM events`
    );
    check from Event event in resultStream
        do {
            events.push(event);
        };
    check resultStream.close();
    return events;
}



isolated function saveCharity(Charity charity) returns int|error {
    // Insert the plain text passwords into the database
    sql:ExecutionResult result = check dbClient->execute(`
        INSERT INTO charity (id, name, date, cause, amount)
        VALUES (${charity.id}, ${charity.name}, ${charity.date}, 
                ${charity.cause}, ${charity.amount})
    `);

    int|string? lastInsertId = result.lastInsertId;
    if lastInsertId is int {
        return lastInsertId;
    } else {
        return error("Unable to obtain last insert ID");
    }
}



isolated function getAllCharities() returns Charity[]|error {
    Charity[] charities = [];
    stream<Charity, error?> resultStream = dbClient->query(
        `SELECT * FROM charity`
    );
    check from Charity charity in resultStream
        do {
            charities.push(charity);
        };
    check resultStream.close();
    return charities;
}



isolated function getBudget() returns Budget[]|error {
    Budget[] budgets = [];
    stream<Budget, error?> resultStream = dbClient->query(
        `SELECT * FROM budget`
    );
    check from Budget budget in resultStream
        do {
            budgets.push(budget);
        };
    check resultStream.close();
    return budgets;
}
