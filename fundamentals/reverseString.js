function reverseString(str) {
  return str.split("").reverse().join("");
}

function reverse(str) {
  let reversed = "";

  for (let character of str) {
    reversed = character + reversed;
  }

  return reversed;
}

console.log(reverseString('world'));
console.log(reverseString('hello'));
console.log(reverseString(""));
console.log(reverseString("h"));

console.log(reverse("world"));
console.log(reverse('hello'));
console.log(reverse(""));
console.log(reverse("h"));

