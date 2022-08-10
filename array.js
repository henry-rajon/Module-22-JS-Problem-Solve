const name = "Raj";
const age = 45;
const isSingle = true;
const me = {
    name: "Raj",
    age: 20,
    id: 347288
}
const friendsAge = [12, 23, 45, 36, 40, 18, 24];
function num(a, b) {
    return a + b;
}
console.log(typeof (name));
console.log(typeof (age));
console.log(typeof (isSingle));
console.log(typeof (me));
console.log(typeof (friendsAge));
console.log(typeof (num));
console.log(friendsAge.includes(45));
// check array using Array.isArray()
console.log(Array.isArray(friendsAge));

// Add new Array
const newFriendsAge = [22, 25, 32, 63, 15];
const allFriendsAge = friendsAge.concat(newFriendsAge);
console.log(allFriendsAge);