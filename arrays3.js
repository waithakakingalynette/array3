//Write a function that accepts an array of strings and
//console.logs each element using a for loop.
let word = ["Nakuru","nairobi","Nanyuki"];
function arr(word){
    for(let x=0;x<word.length;x++){
        console.log(word[x]);
    }
}
arr(word);

//Write a function that accepts an array of numbers and uses the forEach() method to console.
//log each number multiplied by 2.
function num(arr){
arr.forEach(element => {
   console.log(element*2) 
});
}
let numbers=[10,3,5,7,2,6];
num(numbers);


//Write a function that takes in an array of numbers and consoles the 
//first four items multiplied by 8 and the last two added by 5.
// Console the array with the new values
let arr2=[13,5,8,9,34,4];

function create(arr2) {
  for(let i=0;i<4;i++){
    arr2[i]=arr2 [i]*8
  } 
  arr2[arr2.length -2]+=5
  arr2[arr2.length-1]+=5
  console.log(arr2);

}
create(arr2);



//Write a function that takes in the following array and use a 
//while loop to iterate and break when the item is equal to the fourth index
let arrNum = [1,2,3,4,5,6,7,8,9];
function array(arrNum){
let w=0;
while(w<arrNum.length){
    console.log(arrNum[w]);
    if(w===4){
        break;
    }
    w++
}
}
array(arrNum);



//Write a function that takes in a an array of strings and use a continue statement 
//when the item is at the second index
function Arr(fruits){
    for(let i=2;i<fruits.length;i++){
    if(i===2){
        continue;
    }
    console.log({"continue": fruits[i]})
}
}
let fruits= ['apple','plum','banana','strawberries','kiwi'];
Arr(fruits);

