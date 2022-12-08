/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const convertEl = document.getElementById("convert-btn")

const inputEl = document.getElementById("input-el")
const lengthEl = document.getElementById("length-ans")
const volumeEl = document.getElementById("volume-ans")
const massEl = document.getElementById("mass-ans") 

const feet = 3.281
const gallon = 0.264
const pound = 2.204

//Meter 
convertEl.addEventListener("click", function() {
    let baseValue = inputEl.value
    
    lengthEl.textContent = `${baseValue} meters = ${(baseValue * feet).toFixed(3)} feet | ${baseValue} feet = ${(baseValue / feet).toFixed(3)} meters`
    
    volumeEl.textContent = `${baseValue} liters = ${(baseValue * gallon).toFixed(3)} gallons | ${baseValue} gallons = ${(baseValue / gallon).toFixed(3)} liters`
    
    massEl.textContent = `${baseValue} kilos = ${(baseValue * pound).toFixed(3)} pounds | ${baseValue} pounds = ${(baseValue / pound).toFixed(3)} kilos`
})




