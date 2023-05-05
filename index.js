// Assignment (Mathematical Shapes)
// Finding the diagonal of a square
const findDiagonal = (lengthOfEachSides) => {
  const diagonal = lengthOfEachSides * Math.sqrt(2);
  return `The diagonal of a square is ${diagonal}`;
};

console.log(findDiagonal(9));

// Finding the area of a triangle
const findAreaOfTriangle = (side1, side2, side3) => {
  const side = (side1 + side2 + side3) / 2; // half of the triangles perimeter
  const area = Math.sqrt(
    side * (side - side1) * (side - side2) * (side - side3)
  );
  return `The area of the triangle is ${area}`;
};

console.log(findAreaOfTriangle(5, 6, 7));

// Finding the circumference and surface area of a circle
const circumAndAreaOfCircle = (radius) => {
  const pi = 3.14;
  const circumference = 2 * pi * radius;
  const area = pi * radius ** 2;
  return `The circumference of circle is ${circumference} and area of circle is ${area}`;
};

console.log(circumAndAreaOfCircle(4));

// Assignment (Conditional Statements & Loops):
const largerNumber = (num1, num2) => {
  if (num1 > num2) {
    return `${num1} is grater`;
  } else if (num2 > num1) {
    return `${num2} is grater`;
  } else if (num1 === num2) {
    return `Both numbers are equal`;
  } else {
    return 'Input is incorrect! Enter a number';
  }
};

console.log(largerNumber(4, 7));

// Checking whether an integer is an even or an odd number
const evenOrOddNumber = (num) => {
  switch (num % 2) {
    case 0:
      console.log(`${num} is even`);
      break;
    case 1:
      console.log(`${num} is odd`);
      break;
    default:
      console.log(`${num} is not a number. Enter a number`);
  }
};
evenOrOddNumber(18);
