document.addEventListener("DOMContentLoaded", function () {
let friends = ["Bob", "Cindy", "Mike", "John", "James"];

let friend = document.createElement('div');
friend.className = "friend";
document.body.appendChild(friend);

let buttonSing = document.createElement('button');
let sing = document.createTextNode("Sing!");
buttonSing.appendChild(sing);
document.body.appendChild(buttonSing);


buttonSing.addEventListener('click', function (){
  for (var i = 0; i < friends.length; i++) { 
    let name = document.createElement('h3')    
    let nameText = document.createTextNode(friends[i]+ ":")
    name.appendChild(nameText)
    friend.appendChild(name)

    for (var j = 100; j > 0; j--) {
    let paragraph = document.createElement('p')
      let pName = document.createTextNode( j + " lines of code in the file," + j + " lines of code; " + friends[i] + " of beer on the wall, takes one down, passes it around, " + (j-1) + " lines of code in the file")
      paragraph.appendChild(pName)
      name.appendChild(paragraph)
      }}}); 

//for(starting point; run condition; increment/decrement)
// for(let i = 0; i < friends.length; i++){
//     console.log(friends[i])
// }

//for (let i = 0; i < friends.length; i++) {
 // let word = "bottles";
  //let count = 99;
  //while (count > 0) {
   // if (count == 1) {
     // let word = "bottle";
      //console.log(
        //`${count} ${word} of beer on the wall, ${count} ${word} of beer. ${friends[i]} takes one down, passes it around, no more bottles of beer on the wall`
     // );
   // } else {
     // console.log(
       // `${count} ${word} of beer on the wall, ${count} ${word} of beer. ${friends[i]} takes one down, passes it around, ${
       //   count - 1
      //  } ${word} of beer on the wall`
    //  );
  //  }

    //can I use count--;
   // count = count - 1;
  //}
});


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
