var intro ="xush kelibsiz"
var firstName = "ismingiz nima?";
var lastName = "familiyangizn nima";
var email ="emailingizni kiriting"
var tell = "telefon raqamingizni kiriting";
var day = "kungingiz qanday o'tdi";
var family ="siz oilada nechinchi farzandsiz"
var youg = "yoshingizni kiriting";

var alertIntro = alert(intro);
var answerFirstName = prompt(firstName);
var answerLastName = prompt(lastName);
var answerEmail = prompt(email);
var answerTell = prompt(tell);
var answerDay = prompt(day);
var answerFamily = prompt(family);
var answerYoung = prompt(youg);

console.log(`foydalanuvchi haqida malumot.
foydalanuvchining ismi ${answerFirstName}. 
foydalanuvchining familiyasi ${answerLastName}.
foydalanuvchining emaili ${answerEmail}.
foydalanuvchining telefon raqami ${answerTell}.
foydalanuvchining kuni ${answerDay}.
foydalanuvchining oyilasida nechinchi farzandligi ${answerFamily}.
foydalanuvchining yoshi ${answerYoung}.`);