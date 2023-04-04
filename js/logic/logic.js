
const number = +prompt("Enter a number from 0 to 9");
switch(number){
  case 1: console.log("!"); break;
  case 2: console.log("@"); break;
  case 3: console.log("#"); break;
  case 4: console.log("$"); break;
  case 5: console.log("%"); break;
  case 6: console.log("^"); break;
  case 7: console.log("&"); break;
  case 8: console.log("*"); break;
  case 9: console.log("("); 
}
let year = +prompt("Enter a year");
let day = +prompt("Enter a day");
let month = +prompt("Enter a month");

if (month < 1 || month > 12 || day < 1 || day > 31) {
    console.log("Invalid date");
} else {
    let max_days = 0;
    let year_is_leap = 0;

    switch (month) {
        case 1: max_days = 31; break;
        case 2: max_days = 28; break;
        case 3: max_days = 31; break;
        case 4: max_days = 30; break;
        case 5: max_days = 31; break;
        case 6: max_days = 30; break;
        case 7: max_days = 31; break;
        case 8: max_days = 31; break;
        case 9: max_days = 30; break;
        case 10: max_days = 31; break;
        case 11: max_days = 30; break;
        case 12: max_days = 31; break;
    }

    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        console.log(`${year} is a leap year`);
        year_is_leap = 1;
    } else {
        console.log(`${year} is not a leap year`);
    }

    if (month == 2 && year_is_leap == 1) {
        max_days = 29;
    }

    ++day;
    if (day > max_days) {
        day = 1;
        ++month;
        if (month > 12) {
            month = 1;
            ++year;
        }
    }
    console.log(`${day}.${month}.${year}`);
}
