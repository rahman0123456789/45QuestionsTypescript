"use strict";
// ........................Assignment 45 Questions completed............................
// 1. Install Node.js, TypeScript and VS Code on your computer.
//   Done
// 2. Personal Message: Store a person’s name in a variable, and print a message
//  to that person. Your message should be simple, such as, “Hello Eric, 
//  would you like to learn some Python today?”
// let perMessage: string = "Ali";
// console.log(`Hello ${perMessage}, would you like to learn some Python today?`);
// 3. Name Cases: Store a person’s name in a variable, and then print that person’s
//  name in lowercase, uppercase, and titlecase.
// let perName: string = "John";
// console.log(perName.toLowerCase());
// console.log(perName.toUpperCase());
// 4. Famous Quote: Find a quote from a famous person you admire. Print the quote and
//  the name of its author. Your output should look something like the following,
//   including the quotation marks:
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”
// console.log(`Albert Einstein once said, “A person who never made a mistake never tried anything new.”`);
// 5. Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a
//  variable called famous_person. Then compose your message and store it in a new variable
//   called message. Print your message.
// let famous_person: string = "Johncina";
// let message = famous_person;
// console.log(message);
// 6. Stripping Names: Store a person’s name, and include some whitespace characters at the
//  beginning and end of the name. Make sure you use each character combination, "\t" and 
//  "\n", at least once. Print the name once, so the whitespace around the name is displayed.
//   Then print the name after striping the white spaces.
// let perName: string = "\tLal\na";
// console.log(perName);
// 7. Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number
//  8. Be sure to enclose your operations in print statements to see the results.
// You should create four lines that look like this:
// console.log(5 + 3)
// Your output should simply be four lines with the number 8 appearing once on each line.
// console.log(5+3);
// console.log(11-3);
// console.log(4*2);
// console.log(40/5);
// 9. Favorite Number: Store your favorite number in a variable. Then, using that variable,
//  create a message that reveals your favorite number. Print that message.
// let favNumber: number = 100;
// let message: number = favNumber;
// console.log(`Fav Number ${message}`);
// 11. Names: Store the names of a few of your friends in a array called names.
//  Print each person’s name by accessing each element in the list, one at a time.
//  let friendNames: string[] = ["Farhan","John","Ali"];
//  for(let val of friendNames){
//     console.log(val);
//  }
//12. Greetings: Start with the array you used in Exercise 11, but instead of just printing each
//  person’s name, print a message to them. The text of each message should be the same,
//   but each message should be personalized with the person’s name.
// let friendNames: string[] = ["Farhan","John","Ali"];
//  for(let val of friendNames){
//     console.log(`Hello my best friend ${val}`);
//  }
//13. Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or
//  a car, and make a list that stores several examples. Use your list to print a series
//   of statements about these items, such as “I would like to own a Honda motorcycle.”
// let transportation: string[] = ["Bike","Car","Cycle"];
// for(let val of transportation){
// console.log(`I would like to own a ${val}`);
// }
//14. Guest List: If you could invite anyone, living or deceased, to dinner, who would you
//  invite? Make a list that includes at least three people you’d like to invite to dinner.
//   Then use your list to print a message to each person, inviting them to dinner.
// let guest_list: string[] = ['Farhan', 'Owais', 'Laila'];
// for (let guest of guest_list) {
//     console.log(`Dear ${guest},\nYou are cordially invited to dinner at my place. It would be an honor to have your presence.\nSincerely, [Your Name]`);
// }
// Q15. 
// let guest_list: string[] = ['Farhan', 'Owais', 'Laila'];
// console.log("Initial Invitation Messages:");
// for (let guest of guest_list) {
//     console.log(`Dear ${guest},\nYou are cordially invited to dinner at my place. It would be an honor to have your presence.\nSincerely, [Your Name]`);
// }
// // Print the name of the guest who can't make it
// let guest_cant_make_it: string = guest_list.pop()!; // Remove the last guest and get the removed guest's name
// console.log(`\nUnfortunately, ${guest_cant_make_it} can't make it to dinner.`);
// // Replace the guest who can't make it with a new person
// let new_guest: string = 'Jani';
// guest_list.push(new_guest);
// // Print second set of invitation messages
// console.log("\nSecond Set of Invitation Messages:");
// for (let guest of guest_list) {
//     console.log(`Dear ${guest},\nYou are cordially invited to dinner at my place. It would be an honor to have your presence.\nSincerely, [Your Name]`);
// }
// Q16. 
// let guest_list: string[] = ['Owais', 'Umair', 'Laila', 'Javed'];
// // Print initial invitation messages
// console.log("Initial Invitation Messages:");
// for (let guest of guest_list) {
//     console.log(`Dear ${guest},\nYou are cordially invited to dinner at my place. It would be an honor to have your presence.\nSincerely, [Your Name]`);
// }
// // Inform that a bigger dinner table was found
// console.log("\nGreat news! A bigger dinner table was found.");
// // Add one new guest to the beginning of the array
// guest_list.unshift('Umar');
// // Add one new guest to the middle of the array
// guest_list.splice(Math.floor(guest_list.length / 2), 0, 'Babu');
// // Add one new guest to the end of the list using push()
// guest_list.push('Chahat Ali Khan');
// // Print new set of invitation messages
// console.log("\nNew Set of Invitation Messages:");
// for (let guest of guest_list) {
//     console.log(`Dear ${guest},\nYou are cordially invited to dinner at my place. It would be an honor to have your presence.\nSincerely, [Your Name]`);
// }
// Q17. 
// List of people to invite to dinner
// let guest_list: string[] = ['Father', 'Mother', 'Brother', 'Sister', 'Grand Mother', 'Grand Father', 'Little Brother'];
// // Print initial invitation messages
// console.log("Initial Invitation Messages:");
// for (let guest of guest_list) {
//     console.log(`Dear ${guest},\nYou are cordially invited to dinner at my place. It would be an honor to have your presence.\nSincerely, [Your Name]`);
// }
// // Inform that only two people can be invited for dinner
// console.log("\nUnfortunately, the new dinner table won't arrive in time, so we can only invite two people for dinner.");
// // Remove guests from the list until only two names remain
// while (guest_list.length > 2) {
//     let removed_guest = guest_list.pop()!;
//     console.log(`Sorry ${removed_guest}, we can't invite you to dinner.`);
// }
// // Print a message to each of the two people still on the list, letting them know they're still invited
// console.log(`\n${guest_list[0]} and ${guest_list[1]}, you're still invited to dinner.`);
// // Remove the last two names from the list
// guest_list.pop();
// guest_list.pop();
// // Print the list to confirm it's empty
// console.log("\nRemaining guests:", guest_list);
// Q. 18 Seeing the World: Think of at least five places in the world you’d like to visit.
// let placesToVisit:string[] = ["Islamabad","Lahore","Sukkur","Hyderabad","Muree"];
// console.log("Orginal From: ", placesToVisit.join(", "));
// console.log("Alphabetical From: ", [...placesToVisit].sort().join(", "));
// console.log("Still Original Form: ", placesToVisit.join(", "));
// console.log("Reverse Order: ", [...placesToVisit].reverse().join(", "));
// console.log("Still Original from: ", placesToVisit.join(", "));
// console.log("Reverse Again: ", [...placesToVisit].reverse().join(", "));
// placesToVisit.reverse();
// console.log("Reverse again and show original form: ", placesToVisit.join(", "));
// console.log("Sort aray original form: ", placesToVisit.sort().join(", "));
// Q. 19
// let guest_list: string[] = ['Umair', 'Farhan', 'Laila', 'Brother', 'Mother'];
// // Print initial invitation messages
// console.log("Initial Invitation Messages:");
// for (let guest of guest_list) {
//     console.log(`Dear ${guest},\nYou are cordially invited to dinner at my place. It would be an honor to have your presence.\nSincerely, [Your Name]`);
// }
// // Inform that only two people can be invited for dinner
// console.log("\nUnfortunately, the new dinner table won't arrive in time, so we can only invite two people for dinner.");
// // Remove guests from the list until only two names remain
// while (guest_list.length > 2) {
//     let removed_guest = guest_list.pop()!;
//     console.log(`Sorry ${removed_guest}, we can't invite you to dinner.`);
// }
// // Print a message to each of the two people still on the list, letting them know they're still invited
// console.log(`\n${guest_list[0]} and ${guest_list[1]}, you're still invited to dinner.`);
// // Remove the last two names from the list
// guest_list.pop();
// guest_list.pop();
// // Print the number of people invited to dinner
// console.log(`\nNumber of people invited to dinner: ${guest_list.length}`);
// Q. 20
// let arr:string[] = ["K2","Australia","Amazon","London","English"];
// console.log(arr);
// Q. 21
// let item1: { name: string, price: number, quantity: number } = {
//     name: "Laptop",
//     price: 999,
//     quantity: 5
// };
// let item2: { name: string, color: string, size: string } = {
//     name: "T-shirt",
//     color: "Blue",
//     size: "Medium"
// };
// let item3: { brand: string, model: string, year: number } = {
//     brand: "Toyota",
//     model: "Camry",
//     year: 2022
// };
// // Print the objects
// console.log("Item 1:", item1);
// console.log("Item 2:", item2);
// console.log("Item 3:", item3);
// Q. 23
// let number = 10;
// let string = 'hello';
// let boolean = true;
// let array = [1, 2, 3];
// let object = { key: 'value' };
// // Test 1: Is number equal to 10?
// console.log("Is number == 10? I predict True.");
// console.log(number == 10);
// // Test 2: Is string equal to 'hello'?
// console.log("Is string == 'hello'? I predict True.");
// console.log(string == 'hello');
// // Test 3: Is boolean equal to true?
// console.log("Is boolean == true? I predict True.");
// console.log(boolean == true);
// // Test 4: Is array not empty?
// console.log("Is array not empty? I predict True.");
// console.log(array.length > 0);
// // Test 5: Is object not null?
// console.log("Is object not null? I predict True.");
// console.log(object !== null);
// // Test 6: Is number equal to 5?
// console.log("Is number == 5? I predict False.");
// console.log(number == 5);
// // Test 7: Is string equal to 'world'?
// console.log("Is string == 'world'? I predict False.");
// console.log(string == 'world');
// // Test 9: Is array empty?
// console.log("Is array empty? I predict False.");
// console.log(array.length === 0);
// // Test 10: Is object null?
// console.log("Is object null? I predict False.");
// console.log(object === null);
// Q. 24
// let string1 = 'hello';
// let string2 = 'world';
// console.log("Is string1 == 'hello'? I predict True.");
// console.log(string1 == 'hello');
// console.log("Is string1 != string2? I predict True.");
// console.log(string1 != string2);
// let mixedCaseString = 'HeLLo';
// console.log("Is mixedCaseString lowercase? I predict False.");
// console.log(mixedCaseString.toLowerCase() === mixedCaseString);
// let num1 = 5;
// let num2 = 10;
// console.log("Is num1 < num2? I predict True.");
// console.log(num1 < num2);
// console.log("Is num2 >= num1? I predict True.");
// console.log(num2 >= num1);
// // Tests using "and" and "or" operators
// let condition1 = true;
// let condition2 = false;
// console.log("Is condition1 true AND condition2 false? I predict False.");
// console.log(condition1 && condition2);
// Q. 25
// let aliencolor: string = 'green';
// // Check if the alien's color is green
// if (aliencolor === 'green') {
//     console.log("The player just earned 5 points.");
// }
// let alien_color: string = 'yellow'; // or 'red'
// // Check if the alien's color is green
// if (alien_color === 'green') {
//     console.log("The player just earned 5 points.");
// }
// Q. 26
// let aliencolor: string = 'green';
// // Check if the alien's color is green
// if (aliencolor === 'green') {
//     console.log("The player just earned 5 points for shooting the green alien.");
// } else {
//     console.log("The player just earned 10 points for shooting the non-green alien.");
// }
// let alien_color: string = 'red'; // or 'yellow'
// // Check if the alien's color is green
// if (alien_color === 'green') {
//     console.log("The player just earned 5 points for shooting the green alien.");
// } else {
//     console.log("The player just earned 10 points for shooting the non-green alien.");
// }
// Q. 27
// let age: number = 30;
// if (age < 2) {
//     console.log("The person is a baby.");
// } else if (age >= 2 && age < 4) {
//     console.log("The person is a toddler.");
// } else if (age >= 4 && age < 13) {
//     console.log("The person is a kid.");
// } else if (age >= 13 && age < 20) {
//     console.log("The person is a teenager.");
// } else if (age >= 20 && age < 65) {
//     console.log("The person is an adult.");
// } else {
//     console.log("The person is an elder.");
// }
// Q. 28
// let favorite_fruits: string[] = ['banana', 'apple', 'mango'];
// if (favorite_fruits.includes('banana')) {
//     console.log("You really like bananas!");
// }
// if (favorite_fruits.includes('apple')) {
//     console.log("You really like apples!");
// }
// if (favorite_fruits.includes('mango')) {
//     console.log("You really like mangoes!");
// }
// if (favorite_fruits.includes('orange')) {
//     console.log("You really like oranges!");
// }
// if (favorite_fruits.includes('strawberry')) {
//     console.log("You really like strawberries!");
// }
// Q. 30
// let usernames: string[] = ['admin', 'Owais', 'Farhan', 'Zeeshan', 'Lala'];
// for (let username of usernames) {
//     if (username === 'admin') {
//         console.log("Hello admin, would you like to see a status report?");
//     } else {
//         console.log(`Hello ${username}, thank you for logging in again.`);
//     }
// }
// Q. 31
// Q .32
// let current_users: string[] = ['Lala', 'Khan', 'Rahman', 'Farhan', 'Shahid'];
// // List of new usernames
// let new_users: string[] = ['Owais', 'sarah', 'Naina', 'Jani', 'Laila'];
// for (let new_user of new_users) {
//     let lowercase_new_user = new_user.toLowerCase();
//     if (current_users.map(user => user.toLowerCase()).includes(lowercase_new_user)) {
//         console.log(`Sorry, the username "${new_user}" is already taken. Please enter a new username.`);
//     } else {
//         console.log(`Congratulations! The username "${new_user}" is available.`);
//     }
// }
// Q. 33
// let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// // Loop through the array
// for (let number of numbers) {
//     
//     let ordinalEnding: string;
//     if (number === 1) {
//         ordinalEnding = "st";
//     } else if (number === 2) {
//         ordinalEnding = "nd";
//     } else if (number === 3) {
//         ordinalEnding = "rd";
//     } else {
//         ordinalEnding = "th";
//     }
//     // Print the number with its proper ordinal ending
//     console.log(`${number}${ordinalEnding}`);
// }
// Q. 34
// let pizzas: string[] = ['Ticka', 'margherita', 'BBQ chicken'];
// console.log("Printing pizza names:");
// for (let pizza of pizzas) {
//     console.log(pizza);
// }
// console.log("\nPrinting sentences about each pizza:");
// for (let pizza of pizzas) {
//     console.log(`I like ${pizza} pizza.`);
// }
// console.log("\nI really love pizza!");
// Q. 35
// let animals: string[] = ['dog', 'cat', 'rabbit'];
// console.log("Printing animal names:");
// for (let animal of animals) {
//     console.log(animal);
// }
// console.log("\nPrinting statements about each animal:");
// for (let animal of animals) {
//     console.log(`A ${animal} would make a great pet.`);
// }
// console.log("\nAny of these animals would make a great pet!");
// Q. 36
// function make_shirt(size: string, message: string): void {
//     console.log(`T-shirt size: ${size}, Message: ${message}`);
// }
// // Call the function
// make_shirt('L', 'Keep calm and code on');
// Q .37
// function make_shirt(size: string = 'L', message: string = 'I love TypeScript'): void {
//     console.log(`T-shirt size: ${size}, Message: ${message}`);
// }
// // Make a large shirt with the default message
// make_shirt();
// // Make a medium shirt with the default message
// make_shirt('M');
// // Make a shirt of any size with a different message
// make_shirt('S', 'Hello, World!');
// Q. 38
// function describe_city(city: string, country: string = 'Pakistan'): void {
//     console.log(`${city} is in ${country}.`);
// }
// // Call the function for three different cities
// describe_city('Karachi');
// describe_city('Lahore');
// describe_city('London', 'United Kingdom');
// Q. 39
// function city_country(city: string, country: string): string {
//     return `${city}, ${country}`;
// }
// // Call the function with three city-country pairs
// console.log(city_country('Karachi', 'Pakistan'));
// console.log(city_country('Lahore', 'Pakistan'));
// console.log(city_country('London', 'United Kingdom'));
// Q. 40
// function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
//     let album: { artist: string, title: string, tracks?: number } = { artist, title };
//     if (tracks) {
//         album.tracks = tracks;
//     }
//     return album;
// }
// let album1 = make_album('Artist 1', 'Album 1', 10);
// let album2 = make_album('Artist 2', 'Album 2');
// let album3 = make_album('Artist 3', 'Album 3', 15);
// console.log(album1);
// console.log(album2);
// console.log(album3);
// Q. 41
// function show_magicians(magicians: string[]): void {
//     for (let magician of magicians) {
//         console.log(magician);
//     }
// }
// // Array of magician's names
// let magicians: string[] = ['wais', 'John', 'Laila', 'Sami'];
// // Print the name of each magician in the array
// show_magicians(magicians);
// Q. 44
// function make_sandwich(...items: string[]): void {
//     console.log("Making a sandwich with the following items:");
//     for (let item of items) {
//         console.log(`- ${item}`);
//     }
//     console.log("Enjoy your sandwich!");
// }
// // Call the function three times with different number of arguments
// make_sandwich('ham', 'cheese', 'lettuce');
// make_sandwich('turkey', 'swiss');
// make_sandwich('peanut butter', 'jelly');
// Q. 45
// function car_info(manufacturer: string, model: string, ...extras: { [key: string]: any }[]): { manufacturer: string, model: string, extras: { [key: string]: any } } {
//     let car: { manufacturer: string, model: string, extras: { [key: string]: any } } = { manufacturer, model, extras: {} };
//     for (let extra of extras) {
//         let key = Object.keys(extra)[0];
//         let value = extra[key];
//         car.extras[key] = value;
//     }
//     return car;
// }
// // Call the function with required information and two other name-value pairs
// let my_car = car_info('Toyota', 'Camry', { color: 'blue' }, { year: 2022 });
// console.log(my_car);
