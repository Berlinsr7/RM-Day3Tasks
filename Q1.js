let obj1 = {name: "Person 1", age: 5};
let obj2 = {age: 5, name: "Person 1"};

if(obj1.name == obj2.name)
    console.log("Name property is same in both the Objects.");
    if(obj1.age == obj2.age)
        console.log("Age property is same in both the Objects.");
else  
    console.log("One of the property is Different.");