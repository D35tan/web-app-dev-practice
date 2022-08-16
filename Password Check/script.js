const input1 = document.querySelector("#password");
const input2 = document.querySelector("#password2");
const button = document.querySelector("button");

button.addEventListener("click", function () {
  if (password.type === "password") {
    password.type = "text";
    password2.type = "text";
    button.textContent = "Hide Password";
  } else {
    password.type = "password";
    password2.type = "password";
    button.textContent = "Show Password";
  }
});

function checkReqs() {
  const equal = document.querySelector("#equal");
  if (input1.value === input2.value) {
    equal.textContent = "Passwords are equal ✅";
    checkLCase();
    checkUCase();
    checkNums();
    checkChars();
  } else {
    equal.textContent = "Passwords are equal ❌";
  }
}
function checkLCase() {
  const lowerC = /[a-z]/;
  let checker = lowerC.test(input1.value);
  const lCase = document.querySelector("#l-case");
  if (checker) {
    lCase.textContent = "Lower Case Letters ✅";
  } else {
    lCase.textContent = "Lower Case Letters ❌";
  }
}
function checkUCase() {
  const upperC = /[a-z]/;
  let checker = upperC.test(input1.value);
  const uCase = document.querySelector("#u-case");
  if (checker) {
    uCase.textContent = "Upper Case Letters ✅";
  } else {
    uCase.textContent = "Upper Case Letters ❌";
  }
}
function checkNums() {
  const numbers = /[0-9]/;
  let checker = numbers.test(input1.value);
  const nums = document.querySelector("#nums");
  if (checker) {
    nums.textContent = "Contains Numbers ✅";
  } else {
    nums.textContent = "Contains Numbers ❌";
  }
}
function checkChars() {
  const chars = document.querySelector("#chars");
  if (input1.value.length > 9) {
    chars.textContent = "At least 10 characters long ✅";
  } else {
    chars.textContent = "At least 10 characters long ❌";
  }
}

input1.addEventListener("keyup", checkReqs);
input2.addEventListener("keyup", checkReqs);

//Abcdefg123
