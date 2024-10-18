import ballerina/http;


@http:ServiceConfig {
    cors: {
        allowOrigins: ["http://localhost:3000"], // Your React app's URL (adjust to the correct port if needed)
        allowHeaders: ["*"], // Use correct casing for Content-Type
        allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS","UPDATE"], // Allow necessary methods
        allowCredentials: false,
        exposeHeaders: [], // Expose headers if needed
        maxAge: 3600 // Optional
    }
}

service /charities on new http:Listener(8086) {

    @http:ResourceConfig {
        cors: {
            allowOrigins: ["http://localhost:3000"]
        }
    }

    // POST: Add new event
    resource function post .(@http:Payload Charity charity) returns int|error? {
        return saveCharity(charity);
    }
    // GET: Fetch all employees
    resource function get .() returns Charity[]|error? {
        return getAllCharities();
    }

}

//     // OPTIONS: Handle preflight requests
    
// isolated function updateEmployee(Employee emp) returns int|error {

//     sql:ExecutionResult result = check dbClient->execute(`
//         UPDATE Employees SET
//             first_name = ${emp.first_name}, 
//             last_name = ${emp.last_name},
//             email = ${emp.email},
//             phone = ${emp.phone},
//             hire_date = ${emp.hire_date}, 
//             manager_id = ${emp.manager_id},
//             job_title = ${emp.job_title}
//         WHERE employee_id = ${emp.employee_id}  
//     `);

//     int|string? lastInsertId = result.lastInsertId;
//     if lastInsertId is int {
//         return lastInsertId;
//     } else {
//         return error("Unable to obtain last insert ID");
//     }
// }
    
//     isolated resource function delete [int id]() returns int|error? {
//         return removeEmployee(id);       
//     }
// }
