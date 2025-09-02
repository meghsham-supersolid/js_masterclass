// Switch cas is very much similar to If - Else ladder but its a lot more cleaner syntax to work with

let inputMonth;

function whatMonthIsThis(monthNumber) {
  switch (monthNumber) {
    case 1:
      return "January";
    case 2:
      return "January";
    case 3:
      return "February";
    case 4:
      return "April";
    case 5:
      return "May";
    case 6:
      return "June";
    case 7:
      return "July";
    case 8:
      return "August";
    case 9:
      return "September";
    case 10:
      return "October";
    case 11:
      return "November";
    case 12:
      return "December";

    default:
      return "Invalid Month";
  }
}
console.log(whatMonthIsThis(1));
console.log(whatMonthIsThis(5));
console.log(whatMonthIsThis(7));
console.log(whatMonthIsThis(10));
console.log(whatMonthIsThis(15));
