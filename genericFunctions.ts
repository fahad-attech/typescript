// export function genericFunctions<Type>(arr:Type[]):Type{
//     //a function that takes an array and return the first Element of the Array.
//     return arr[0]
// }

// genericFunctions<>([{name:"KILO",email:"e@gmail.com"}])

//Constraints 
//<> these are called parameters 
// function longest<Type extends {length:number}>(a:Type,b:Type){
//     return a
// }

// longest([],[])
// longest(0,[])
// longest("OK","Hello")
//Working With contraints
// function combine<Type>(a1:Type[],b1:Type[]):Type[]{
//     return a1.concat(b1)
// }

// combine<string | number >([1,2,3,4,5],["OK","Hello"])
// combine<string | number >(["OK","Hello"],[1,2,3,4,5])

//Lets make forEach Function
function myOwnforEach(array:any[],callbackFun:(value:any,i?:number)=>void):void{
    for (let i = 0; i < array.length; i++) {
        callbackFun(array[i])
    }
}
myOwnforEach(["ok",1,2,34,"24"],(value,i)=>{
    //log the value
})

///Function overloads
// function OverloadOne(s:string):number;
// function OverloadOne(arr:any[]):number;
// function OverloadOne(value:any){
//     ///this functionn Picks up only one overload.
//     //NO more than one overLoad.
//     //the implementation should be compatible to the overLoad.
//     return value.length
// }
// OverloadOne("okokok")

//How to avoid Overloads
function notOverLoaded(value:string|any[]):number{
    return value.length
}
notOverLoaded("HEllo")
notOverLoaded(["OK"])
notOverLoaded([])
// notOverLoaded(0)

//Immutable array Variable
// const waleedArray=["Bawa g Sialkot"] as const
// waleedArray.push("ok")



//Destructure the object arguments.
//-------------1st------------
function sum<Type extends {a:string,b:string,c:string}>({a,b,c}:Type){
    return a+b+c
}

sum({a:"ok",b:"pk",c:"olo"})

//-------------2nd------------
function sum1({a,b,c}:{a:string,b:string,c:string}){
    return a+b+c
}

sum1({a:"ok",b:"pk",c:"olo"})

//-------------3rd------------
interface SUMINTERFACE {
    a:string,
    b:string,
    c:string
}
function sum2({a,b,c}:SUMTYPE){
    return a+b+c
}

sum2({a:"ok",b:"pk",c:"olo"})

//-------------4th------------
type SUMTYPE = {
    a:string,
    b:string,
    c:string
}
function sum3({a,b,c}:SUMTYPE){
    return a+b+c
}

sum3({a:"ok",b:"pk",c:"olo"})
