'use strict';
class User {
  constructor (name, surname, age, isBanned ) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.isBanned = isBanned;
  }
  set fullName(newfullName) {
    const splittedFullName = newfullName.split(' ');
    this._name = splittedFullName[0];
    this._surname = splittedFullName[1];
  }
  get fullName () {
    return `${this._name} ${this._surname}`;
  }
  set name (newValue) {
    if (typeof(newValue) !== 'string') throw new TypeError('Wrong variable type!');
    this._name = newValue;
  }
  get name () {
    return this._name;
  }
  set surname (newValue) {
    if (typeof(newValue) !== 'string') throw new TypeError('Wrong variable type!');
    this._surname = newValue;
  }
  get surname () {
    return this._surname;
  }
  
  set age (newValue) {
    if (typeof(newValue) !== 'number') throw new TypeError('Wrong variable type!');
    this._age = newValue;
  }
  get age () {
    return this._age;
  }
  get isAdult() {
    return this._age >= 18;
  }
  set isBanned(newValue) {
    if (typeof(newValue) !== 'boolean') throw new TypeError('Wrong variable type!');
    this._isBanned = newValue;
  }
  get isBanned() {
    return this._isBanned;
  }
  static isUser (user) {
    return user instanceof User;
  }
}


class Moderator extends User {
  constructor (name, surname, age, permission, isBanned ) {
    super(name, surname, age, isBanned); // Parent constructor
    this.permission = permission;
  }
  static isUser (user) {
    return user instanceof User;
  }
}


class Admin extends User{
  constructor (name, surname, age) {
    super(name, surname, age, false);
  }
  toggleBan (user) {
    if (User.isUser(user)) {
      user.isBanned = !user.isBanned;
      return user.isBanned;
    }
    throw new TypeError('Wrong user name!')
  }
}