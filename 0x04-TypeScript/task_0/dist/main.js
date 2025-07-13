/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/main.ts":
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
/***/ (() => {

eval("{\r\nvar student1 = {\r\n    firstName: 'Meekness',\r\n    lastName: 'James',\r\n    age: 25,\r\n    location: 'Port Harcourt',\r\n};\r\nvar student2 = {\r\n    firstName: 'Jane',\r\n    lastName: 'Doe',\r\n    age: 24,\r\n    location: 'Lagos',\r\n};\r\nvar studentsList = [student1, student2];\r\nfunction renderTable(students) {\r\n    var table = document.createElement('table');\r\n    table.border = '1';\r\n    var headerRow = document.createElement('tr');\r\n    var nameHeader = document.createElement('th');\r\n    nameHeader.textContent = 'First Name';\r\n    var locationHeader = document.createElement('th');\r\n    locationHeader.textContent = 'Location';\r\n    headerRow.appendChild(nameHeader);\r\n    headerRow.appendChild(locationHeader);\r\n    table.appendChild(headerRow);\r\n    students.forEach(function (student) {\r\n        var row = document.createElement('tr');\r\n        var nameCell = document.createElement('td');\r\n        nameCell.textContent = student.firstName;\r\n        var locationCell = document.createElement('td');\r\n        locationCell.textContent = student.location;\r\n        row.appendChild(nameCell);\r\n        row.appendChild(locationCell);\r\n        table.appendChild(row);\r\n    });\r\n    document.body.appendChild(table);\r\n}\r\nrenderTable(studentsList);\r\n\n\n//# sourceURL=webpack://task_0/./js/main.ts?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/main.ts"]();
/******/ 	
/******/ })()
;