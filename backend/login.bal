// import ballerina/http;
// import ballerina/sql;
// import ballerinax/mysql;

// listener http:Listener loginListener = new(8080);

// service /login on loginListener {

//     resource function post login(http:Caller caller, http:Request req) returns error? {
//         json|error payload = req.getJsonPayload();
//         if payload is json {
//             string username = payload.username.toString();
//             string password = payload.password.toString();
//         sql:ParameterizedQuery query = `SELECT password FROM users WHERE username = ${username}`;
//         stream<record {| string password; |}, sql:Error?> resultStream = dbClient->query(query);
//             return;
//         record {| string password; |}? userRecord = ();
//         var result = resultStream.next();
//         if result is record {| record {| anydata...; |} value; |} {
//             check caller->respond({ message: "User not found" });
//         } else if result is sql:Error {
//             check caller->respond({ message: "Database error" }, status = 500);
//             return;
//         }
//                 check caller->respond({ message: "Invalid password" });
//         string query = "SELECT password FROM users WHERE username = ?";
//         stream<record {}, sql:Error> resultStream = dbClient->query(query, username);

//         record {| string password; |}? userRecord = check resultStream.next();

//         if userRecord is () {
//             check caller->respond({ message: "User not found" }, status = 404);
//         } else {
//             if userRecord.password == password {
//                 check caller->respond({ message: "Login successful" });
//             } else {
//                 check caller->respond({ message: "Invalid password" }, status = 401);
//             }
//         }

//         check resultStream.close();
//     }
// }
// }