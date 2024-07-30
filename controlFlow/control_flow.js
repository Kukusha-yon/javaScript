let userRole = "admin";
let accessLevel;

if(userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "NO access granted";
}
console.log("Access Level:", accessLevel);

let isLoggedIn = true ;
let userMessage ;

if(isLoggedIn) {
    if(userRole === "admin"){
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, user!";
    }
} else {
    userMessage = "Please log in to access the system";
}
console.log(userMessage);

let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default: 
        userCategory = "Uknown";
}
console.log(userCategory)
let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated " : "Not Authenticated ";
console.log(authenticationStatus);


let employee = true;
let diatryServices;

if(employee) {
   diatryServices = "Access to Diatry Services";
} else if (enrolledMemeber) {
    diatryServices = "Access to dietry services and one-on-one interaction ";
} else if (subscriber){
    diatryServices = "Partial access to diaerty services";

} else {
    diatryServices = "Please enroll first";
}

console.log(diatryServices)
