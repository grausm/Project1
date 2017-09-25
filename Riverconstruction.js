/**
 *   @author Graus, Michael (grausm@student.ncmich.edu)
 *   @version 0.0.1
 *   @summary Project 1 river falls construction || created: 03.16.2016
 *   @todo
 */

"use strict";
const PROMPT = require('readline-sync');

//Section 1 -----------------------------------------^

let lotNumber, bedRooms, bathRooms, garageSize, totalPrice;
const LANGUAGE = 'English';

//Section 2 -----------------------------------------^


function main() {
    setlotNumber();
    setbedRooms();
    setbathRooms();
    setgarageSize();
    settotalPrice();
    printResults();
}

main();

//Section 3 ----------------------------------------^

function setlotNumber() {
    lotNumber = Number(PROMPT.question(`\nPlease enter lot number: `));
}

function setbedRooms() {
    bedRooms = Number(PROMPT.question(`\nHow many bedrooms: `));
}

function setbathRooms() {
    bathRooms = Number(PROMPT.question(`\nHow many bathrooms: `));
}

function setgarageSize() {
    garageSize = Number(PROMPT.question(`\nHow many garage ports: `));
}

function settotalPrice() {
    const bedRoom_price = 17000,
        bathRoom_price = 12500,
        garage_Size = 6000;
    totalPrice = (bedRooms * bedRoom_price) + (bathRooms * bathRoom_price) + (garageSize * garage_Size);


}

function printResults() {
    console.log(`Total Price:   ${totalPrice}`);
}

//Section 4 -------------------------------------------^
/*
Design the logic for a program for the River Falls Homes Construction Company.
Design a program that prompts the user for a lot number in the River Falls subdivision,
and data about the home to be built there including number of bedrooms, number of bathrooms,
and size of garage in number of cars it holds. Output is the price of the home which is $50,000 base price plus $17,000 for each bedroom,
 $12,500 for each bathroom,, and $6,000 for each car the garage holds.
 */