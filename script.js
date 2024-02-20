var hobbies = ["Gaming", "Reading", "Coding", "Archery", "Camping", "Fencing"];
console.log(hobbies.length);

hobbies.push("cooking");

console.log(hobbies[2]);

hobbies.pop();

hobbies.splice(2, 0, "Fishing", "Snowboarding");

console.log(hobbies);

hobbies.shift();

hobbies.unshift("Hiking");

var goals = ["Become a web developer", "lose weight", "Be happy"];

var allTheThings = hobbies.concat(goals);

console.log(allTheThings);

console.log(allTheThings.indexOf("Camping"));

allTheThings.splice(6, 1);

console.log(allTheThings);

var plans = allTheThings.map(function (item) {
  return `I can't wait to start ${item}`;
});
console.log(plans);
