let basicSalary = parseFloat(prompt("Enter your basic salary: "));
let benefits = parseFloat(prompt("Enter the value of any benefits you receive: "));

// Calculate gross salary by adding basic salary and benefits
let grossSalary = basicSalary + benefits;

// Calculate payee (tax) based on gross salary
let payee;
if (grossSalary <= 24000) {
  payee = 0;
} else if (grossSalary <= 40000) {
  payee = 0.1 * (grossSalary - 24000);
} else if (grossSalary <= 60000) {
  payee = 1600 + 0.15 * (grossSalary - 40000);
} else if (grossSalary <= 80000) {
  payee = 4600 + 0.2 * (grossSalary - 60000);
} else {
  payee = 8600 + 0.25 * (grossSalary - 80000);
}

// Calculate NHIF deductions based on gross salary
let nhif;
if (grossSalary <= 5999) {
  nhif = 150;
} else if (grossSalary <= 7999) {
  nhif = 300;
} else if (grossSalary <= 11999) {
  nhif = 400;
} else if (grossSalary <= 14999) {
  nhif = 500;
} else if (grossSalary <= 19999) {
  nhif = 600;
} else if (grossSalary <= 24999) {
  nhif = 750;
} else if (grossSalary <= 29999) {
  nhif = 850;
} else if (grossSalary <= 34999) {
  nhif = 900;
} else if (grossSalary <= 39999) {
  nhif = 950;
} else {
  nhif = 1000;
}

// Calculate NSSS deductions based on gross salary
let nssf;
if (grossSalary <= 18000) {
  nssf = 0.06 * grossSalary;
} else {
  nssf = 1080;
}

// Calculate net salary by subtracting payee, NHIF deductions, and NSSS deductions from gross salary
let netSalary = grossSalary - payee - nhif - nssf;

// Print the results
console.log(`Gross salary: ${grossSalary.toFixed(2)}`);
console.log(`Payee (tax): ${payee.toFixed(2)}`);
console.log(`NHIF deductions: ${nhif.toFixed(2)}`);
console.log(`NSSS deductions: ${nssf.toFixed(2)}`);
console.log(`Net salary: ${netSalary.toFixed(2)}`);