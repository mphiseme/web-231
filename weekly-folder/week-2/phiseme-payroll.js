
/*
============================================
Title:  phiseme-payroll.js
Author: Manel Phiseme
Date:   3/27/2020
Description: JavaScript code for assignment html phiseme-payroll.html
assignment Assignment 2.3 - Values and Variables 
;===========================================
*/

//These are the variable lists for Ludwig Beethoven
//These include variables for first Name, last Name,
// address, pay Rate, and hire Date
const wigHovFirstN = document.getElementById(txtListWig).innerHTML; 
const wighovLastN = document.getElementById(txtListHoven).innerHTML; 
const wigHovAdress = document.getElementById(txtListStreet).innerHTML; 
const wigHovHireDate = document.getElementById(txtList2020).innerHTML; 
const wigHovPayRate = document.getElementById(txtListLast).innerHTML;
parseFloat(wigHovPayRate).toFixed(1);
wigHovHireDate = new Date("12/9/2020").toLocalDateString(en-US);  

//These are the variable lists for Johann Bach
//These include variables for first Name, last Name,
// address, pay Rate, and hire Date
const JohBachFirstN = document.getElementById(txtListJohann).innerHTML; 
const JohBachLastN = document.getElementById(txtListBach).innerHTML; 
const JohBachAdress = document.getElementById(txtListMainStreet).innerHTML; 
const JohBachHireDate = document.getElementById(txtListJo2020).innerHTML; 
const JohBachPayRate = document.getElementById(txtListJoLast).innerHTML;
parseFloat(txtListJoLast).toFixed(1);
JohBachHireDate = new Date("12/9/2020").toLocalDateString(en-US);

//These are the variable lists for Wolfgang
//These include variables for first Name, last Name,
// address, pay Rate, and hire Date
const wolfMoFirstN = document.getElementById(txtListWolf).innerHTML; 
const wolfMoLastN = document.getElementById(txtListMozart).innerHTML; 
const wolfMoAddress = document.getElementById(txtLisWotStreet).innerHTML; 
const wolfMoHireDate = document.getElementById(txtListWo2020).innerHTML; 
const wolfMoPayRate = document.getElementById(txtLisWotLast).innerHTML;
parseFloat(txtLisWotLast).toFixed(1);
wolfMoHireDate = new Date("12/9/2020").toLocalDateString(en-US);

