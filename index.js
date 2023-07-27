function isTruthy(input) {
    if (input === "I am a string") return true;
    if (input === false) console.log("The boolean value false is falsy");
    if (input === null) console.log("The null value is falsy");
    if (input === undefined) console.log("undefined is falsy");
    if (input === 0) console.log("The number 0 is falsy (the only falsy number)");
    if (input === "") console.log("The empty string is falsy (the only falsy string)");

}

isTruthy(null);

function numberLine(num1, num2) {
    let sum = num1 + num2;
    if (sum > 100) return sum +" is greater than 100";
    if (sum > 0 && sum < 100) return sum + " is greater than 0";
    if (sum === 0) return sum + " is equal to 0";
    if (sum < 0) return sum + " is a negative number";
}

numberLine(num1, num2);

function greaterThan5(num1, num2) {
    if (num1 >= 5 && num2 >= 5) {
        return true;
    }   else {
        return false;
    };
    
}

greaterThan5(num1, num2);

function pairAndCompare(param1A, param1B, param2A, param2B) {
    if (param1A === param1B || param2A === param2B) {
        return true;
    }   return false;
}

pairAndCompare(param1A, param1B, param2A, param2B);