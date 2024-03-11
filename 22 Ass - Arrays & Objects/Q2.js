const Ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
let n = Ages.length
let lo = 0;
let hi = n;

//--->  Sort the array and find the min and max age
let sortedAges = Ages.sort((a, b) => a - b);
console.log(Ages);
console.log("Min Age is:", Ages[0]);
console.log("Max Age is:", Ages[n - 1]);


//--->Find the median age(one middle item or two middle items divide by two:

let median = lo + Math.floor((hi - lo)) / 2;
console.log(median);



//----> Find Average Age;
let sum = 0;
for (let i = 0; i < n; i++) {
    sum = Ages[i] + sum
}

let Avg = Math.floor(sum / n);
console.log("The average age is:", Avg);


//---> Find the range of the ages(max- min);

let maxAge = Ages[n - 1];
let minAge = Ages[0];
let Range = maxAge - minAge;
console.log(minAge, "to", maxAge);


//--->Compare the value of (min - average) and (maa - average), use abs() method;
let x = minAge - Avg;
let y = maxAge - Avg;
console.log(x, y);
if (Math.abs(x) <= Math.abs(y)) {
    console.log("x is less than y");
}
else {
    console.log("y is less than x");

}




