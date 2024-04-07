var person = {
    name: "John",                
    lastName: "Doe",
    age: 35,                    
    gender: "male",
    luckyNumbers: [7, 11, 13, 17], 
    significantOther: person2 
};

var person2 = {
    name: "Jane",
    lastName: "Doe",
    age: 38,
    gender: "female",
    luckyNumbers: [2, 4, 6, 8],
    significantOther: person
};

var person3 = {
    name: 'Jimmy',
    lastName: 'Doe',
    age: 13,
    gender: "male",
    luckyNumbers: [1, 2, 3, 4],
    significantOther: null
}

var family = {
    lastName: "Doe",
    members: [person, person2, person3]   //Array of objects, don't forget to add Jimmy
};


function addAllFamilyLuckyNumbers(anArray) {
    let sumOfAllLuckyNumbers = 0; //sumOfAllLuckyNumbers is a number, the sum of all lucky numbers.
    for (let i = 0; i < anArray.length; i++) {
        for (let x = 0; x < anArray[i].luckyNumbers.length; x++) {
            sumOfAllLuckyNumbers += anArray[i].luckyNumbers[x];
        }
    }
    
    return sumOfAllLuckyNumbers;
}
person.luckyNumbers[3] = 33;
console.log(addAllFamilyLuckyNumbers(family.members));