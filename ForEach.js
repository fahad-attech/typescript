const personArray = ["Ahmad", "Ali", "Zahid", "Saleem", "Shafique", "Sajeel"];
const personNOArray = [1, 2, 3, 4, 5, 6, 7];

// personNOArray.forEach((name,index,array)=>{

//     console.log(name,index,array)
// })

const newArray = personArray.map((item, index) => {
  return `${index + 1}- Muhammad ${item}`;
});
console.log(newArray);
