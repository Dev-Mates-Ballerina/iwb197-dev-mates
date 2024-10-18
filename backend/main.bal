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
    string phone;  // Only store the hashed password
    string price; // Should also be hashed before storing
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
        INSERT INTO budget (id, name, email, phone, price)
        VALUES (${budget.id}, ${budget.name}, ${budget.email}, 
                ${budget.phone}, ${budget.price})
    `);

    int|string? lastInsertId = result.lastInsertId;
    if lastInsertId is int {
        return lastInsertId;
    } else {
        return error("Unable to obtain last insert ID");
    }
}

