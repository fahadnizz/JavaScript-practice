// let userName = 'fahad';
// // let times = 4;

// function showMessage(){
//    let userName = 'nizami'
//     let Message = 'hello' + userName;
//     alert(Message);
// }

// alert( userName );
// showMessage();
// alert( userName );


// swapping
// let value1 = 'one';
// let var2 = 'two';

// console.log('before swap in var1 :', value1 );
// console.log('before swap in var2 :', var2 );

// // swapping value
// let tempVar = var1;
// var1 = var2;
// var2 = tempVar;  

// console.log('after swap in var1 :', var1 );
// console.log('after swap in var2 :', var2 );

// console.log('02-max-variable');      

// // 1.syntax long
// function floatMaxNumber(num1,num2)
// {
//  if( num1 > num2 ){
//     return num1
// }
// else{
//     return num2
// }
// //2. short syntax
// if(num1 > num2) return num1
// else return num2

// //3. ternary syntax
// return (num1 > num2) ? num1 : num2
// }

// let checkMax1 = floatMaxNumber(10,11);
// console.log('max number from long syntax:',checkMax1);

// let checkMax2 = floatMaxNumber(10,11);
// console.log('max number from short syntax:',checkMax2);


// let checkMax3 = floatMaxNumber(1,10);
// console.log('max number from ternary syntax:',checkMax3);

console.log('03-landscape-portrait')

function islandScapePortrait(width,height){
    //ternary short syntax
    if(width > height)
    {
    return 'Landscape'
    }
    else
    {
        return 'Portrait'
    }
    
}

let checkWidthHeight1 = islandScapePortrait(200,400);
console.log('Landscape&Portrait', checkWidthHeight1);

let checkWidthHeight2 = islandScapePortrait(400,300);
console.log('Landscape&Portrait', checkWidthHeight2);

let checkWidthHeight3 = islandScapePortrait(700,600);
console.log('Landscape&Portrait', checkWidthHeight3);