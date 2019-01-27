// Complete the function so that it converts dash-delimited ("kebab" case) & underscore-delimited ("snake" case) words into "camel" casing. The first word within the output should be capitalized only if the original word was capitalized.

// toCamelCase("the-stealth-warrior")
// // returns "theStealthWarrior"
// toCamelCase("The_stealth_warrior")
// // returns "TheStealthWarrior"

function toCamelCase(str) {
  if (str == "") {
    return str;
  } else {
    let arr = str.split(/-|_/);
    return arr
      .map(word =>
        word !== arr[0] ? word[0].toUpperCase() + word.slice(1) : word
      )
      .join("");
  }
}
