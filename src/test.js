// code has been commented out because it was not working properly. The issue is that the typeof operator returns "number" (lowercase) for numeric values, not "Number" (uppercase). Therefore, the condition should be changed to check for "number" instead of "Number".

// const values = ["Ali", 42, "Sara", "STOP", "Mona"];
// const acceptedNames = [];

// for (let i = 0; i <= values.length; i++) {
//     if (typeof values[i] === "Number") continue;
//   if (values[i] === "STOP") break;

//   acceptedNames.push(values[i]);
// }

// console.log(acceptedNames);

// Corrected code
const values = ["Ali", 42, "Sara", "STOP", "Mona"];
const acceptedNames = [];

for (let i = 0; i < values.length; i++) {
  if (typeof values[i] === "number") continue;
  if (values[i] === "STOP") break;

  acceptedNames.push(values[i]);
}

console.log(acceptedNames);
