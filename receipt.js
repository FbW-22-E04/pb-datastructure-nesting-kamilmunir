/*
    3.1 Create an object called recipes.
    3.2 Inside this object,
     you should create another object for 
     ingredients and store ingredients as properties butter, sugar, flour etc. Each property should have a string as its value.
    3.3 Without changing the previous code, add another ingredient - let's add ginger.
    3.4 Change the ingredient sugar to brown sugar.
    3.5 Write a method in the recipes object that prints 
    the value of each ingredient in the ingredients object.
*/
const receipe={
    Butterchicken:{youghurt:'1/2cup Greek-style',
    Garlic:'250g',
    cloves:'1gm',
    cumin:'2tsp',
    coriander:'2tsp',
    chillipowder:'1/4tsp',

    chef:{Title:'cooking',year:1990,pages:250,Author:'Eliza'}},
    
  
}

let vegetable={ginger:{weight:"2gm",condition:"fresh"}};
let obj=Object.assign(receipe,vegetable)
obj.blackchilli='2gm'

obj.print=function(){
    Object.entries(obj).forEach(entry=>{
        const[key,value]=entry;
        console.log(value)})
  
}
obj.print();
/*
Doggo

    2.1 Create a doggo object. Add name and breed as properties of the object.
    2.2 Create an array within the doggo object named favorite foods and add the doggo's favorite foods to the array.
    2.3 Access the second element of the doggo's favorite foods.
    2.4 Add a method that loops through and print all the doggo's favorite food.

*/
const doggo={
    Boxador:{name:'name1',breed:'MixedBreed Boxer and labrador'},
    favouritefood:['f1','f2','f3'],

}
console.log(doggo.favouritefood[1])
doggo.print=function(){
    for(a=0;a<3;a++){
        console.log( (doggo.favouritefood[a]))
    }
}

doggo.print()

console.log('******************')
let board = [
    [1, 2, 3],
    ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
    [true, false]
  ];
 


for(let d=0; d < board.length; d++){
    let arrsize=board[d].length;
    for(e=0; e <arrsize;e++){
        console.log(board[d][e])
    }
}

/*
1. Construct the following pattern.

*
* *  
* * *  
* * * *  
*/
let b='';
for(s=0;s<4;s++){
b=b+'*'
    console.log(b)
}


const ARR = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27], [7, 4, 28, 14], [3, 10, 26, 7]];

for(let d=0; d < ARR.length; d++){
    let arrsize=ARR[d].length;
    for(e=0; e <arrsize;e++){    
        console.log(ARR[d][e])
        if(parseInt(e)===parseInt(arrsize-1)){
            console.log('row'+d)
        }
        
    }
}
console.log('*****************************')
/*
output
1 1 1 2 2 2 3 3 3 4 4 4
0 1 2 3 4 0 1 2 3 4 0 1 2 3 4*/
let retain='';
let retain2='';
let retain3='';
let h=[0,1,2,3,4];

for(let a=1;a<4;a++){
for(b=0;b<3;b++){
    retain=retain+" "+ a;

 }  
 }
 for(a=0;a<3;a++){
    h.push(a)
    
    retain3=retain3+" "+h.slice(0,5);
    
}

console.log(retain)
console.log(retain3.replace(/,/g,' '))
