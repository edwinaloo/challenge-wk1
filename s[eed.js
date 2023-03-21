const speed = parseInt(prompt("Enter the speed of the car (in km/h): "));

if (speed <= 70) {
  console.log("Ok");
} else {
  const demeritPoints = Math.floor((speed - 70) / 5);
  console.log(`You have received ${demeritPoints} demerit points.`);
}