let friends = ["Bob", "Cindy", "Mike", "John", "James"];

//for(starting point; run condition; increment/decrement)
// for(let i = 0; i < friends.length; i++){
//     console.log(friends[i])
// }

for (let i = 0; i < friends.length; i++) {
  let word = "bottles";
  let count = 99;
  while (count > 0) {
    if (count == 1) {
      let word = "bottle";
      console.log(
        `${count} ${word} of beer on the wall, ${count} ${word} of beer. ${friends[i]} takes one down, passes it around, no more bottles of beer on the wall`
      );
    } else {
      console.log(
        `${count} ${word} of beer on the wall, ${count} ${word} of beer. ${friends[i]} takes one down, passes it around, ${
          count - 1
        } ${word} of beer on the wall`
      );
    }

    //can I use count--;
    count = count - 1;
  }
}

//-----------------------------------------
//   if (count > 0) {
//     if (count == 1) {
//       let word = "bottle";
//     }
//     console.log(count + " " + word + " of beer on the wall.");
//   } else {
//     if (count > 1) {
//       let word = "bottles";
//     }
//     console.log("No more " + word + " of beer on the wall.");
//   }
