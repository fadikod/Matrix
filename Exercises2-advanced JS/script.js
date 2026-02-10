// let arr=[4, 8, 2, 7, 6, 3, 4, 51, 24, 13];
// function filterRange(arr, a, b){
//     return arr.filter(item => item >=a && item <=b);

// }

// let filtered= filterRange(arr, 1, 10);
// console.log(filtered);




// let john={name: "john", age: 25};
// let pete={name: "pete", age:30};
// let Mary={name: "Mary", age: 28};

// let users=[john, pete, Mary];;

// let names=users.map(item =>item.name);
// console.log(names);




let john={name: "john", age: 25};
let pete={name: "pete", age:30};
let Mary={name: "Mary", age: 28};

let arr=[john, pete, Mary];

function avg(arr){
    let total= arr.reduce((Sum, user) => Sum+user.age, 0);
    return total/arr.length;


}

console.log(avg(arr));