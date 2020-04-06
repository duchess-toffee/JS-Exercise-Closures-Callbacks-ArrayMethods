const runners = require("./data/runners");


function tallyUpDonations(runners) {
    let sum = reduce(runners, (total, runner) => total+runner.donation);
    console.log(sum);
 // return runners.reduce((total, donation) => total+=donation,0);
}

function reduce(arr, callback){
    let total = 0;
        for(let i=0; i<arr.length; i++){
            total = callback(total,arr[i]);
        }
    return total;
}


//tallyUpDonations(runners);


function counterMakerWithLimit(limit) {
  let count = 0;
  return ()=>{
    if(count<=limit){
      count++;
      return count-1;
    }else{
      count=1;
      return 0;
    }
  }
}

const counter = counterMakerWithLimit(2);

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
/**
 * ### Challenge `counterMaker`
 * 
 * @instructions
 * Fix this function so a counter produced with it will increment correctly!
 * Usage is as follows:
 * 
 * const counter = counterMaker()
 * counter() // should return 0
 * counter() // should return 1
 * counter() // should return 2
 * etc
*/