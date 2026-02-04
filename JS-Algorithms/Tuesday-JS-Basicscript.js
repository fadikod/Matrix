// //1
// let sum=0;
// for(let i=200; i<=2700; i++){
//     if((i%3===0 && i%5!==0)||(i%5===0 && i%3!==0)){
//         sum+=i
        

//     }

// }
// console.log("sum is: " + sum)


// //2
// let array = [2, 1, 6, 4, -7];
// for(let i=0; i<array.length/2; i++){
//     let temp=array[i];
//     array[i]=array[array.length-1-i];
//     array[array.length-1-i]=temp;
// }
// console.log(array)


// //3
// let array=[]
// for(let i=1; i<=135; i++){
//     if(i%3===0 && i%5===0){array[i-1]="FizzBuzz"}
//     else if(i%3===0){array[i-1]="Fizz"}
//     else if(i%5===0){array[i-1]="Buzz"}

//     else {array[i-1]=i}

// }
// console.log(array)



    // //4
    // let previous=0;
    // let current=1;
    // let sum=1;

    // while(current<=1000000){
    //     let next=previous+current;
    //     previous=current;
    //     current=next;
    // }
    // sum=sum+current;
    // console.log(sum)



    // //5
    // let array=[1,4,-3,7,46,-2,-46]
    // for(let i=array.length-1; i>=0; i--){
    //     if(array[i]<0){array.splice(i, 1)}
    // }
    // console.log(array)


    //6
    let array= ['Man', 'I','Love','The','Matrix','Program'];
    let censored="Program";
    for(i=0; i<array.length; i++){
        if(array[i]===censored){array[i]="*".repeat(array[i].length)}
    }
    console.log(array)
