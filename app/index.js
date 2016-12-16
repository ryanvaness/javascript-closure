"use strict";
const _ = require('./modules/getByID');
const __ = require('./modules/getByClass');

var manageTickets = (function IIFE(){
    let tickets = [];
    var publicAPI = {
        addTicket: addTicket,
        removeTicket: removeTicket,
        getAllTickets: getAllTickets,
        clearTickets: clearTickets,
        primaryTicket: ""
    };

    function addTicket(ticket) {
        if (tickets.length === 0) {
            publicAPI.primaryTicket = ticket;
        }
        tickets.push(ticket);
    }

    function removeTicket(ticket) {
        let index = tickets.indexOf(ticket);
        if (index > -1) {
            tickets.splice(index, 1);
        }
    }

    function getAllTickets() {
        return tickets;
    }

    function clearTickets() {
        tickets.splice(0, tickets.length);
    }

    return publicAPI;
})();


manageTickets.addTicket("thing");
manageTickets.addTicket("stuff");

_("app").innerHTML =
    "<ul>" +
        manageTickets.getAllTickets().map(function list(c, i) {
            return `<li key=${i}>${c}</li>`;
        }).join("") +
    "</ul>";

console.log(`Primary Ticket: ${manageTickets.primaryTicket}`);

console.log("All Tickets:");
console.log(manageTickets.getAllTickets());

manageTickets.clearTickets();
console.log("Cleared Tickets:");
console.log(manageTickets.getAllTickets());

console.log(__("classes"));
