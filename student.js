"use strict";

class Student extends User {
  constructor(name, surname, age, year) {
    super(name, surname, age, false);
    this.year = year;
  }

  set year(newValue) {
    if (typeof newValue !== "number") throw new TypeError("Incorrect variable type!");
    if (newValue > (new Date().getFullYear())) throw new RangeError("Year is bigger then current!");
    this._year = newValue;
  }
  get year() {
    return this._year;
  }

  get getCourse() {
    let yearDiff = new Date().getFullYear() - this.year + 1;
    if (yearDiff > 5) return `${this.name} has already left!`;  
    return yearDiff;
  }
}

const test = new Student("Test", "Testovich", 16, 2021);
