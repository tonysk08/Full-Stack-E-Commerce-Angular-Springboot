"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GolfCoach_1 = require("./GolfCoach");
const CricketCoach_1 = require("./CricketCoach");
let myCricketCoach = new CricketCoach_1.CricketCoach();
let myGolfCoach = new GolfCoach_1.GolfCoach();
let theCoaches = [];
theCoaches.push(myCricketCoach);
theCoaches.push(myGolfCoach);
theCoaches.forEach(tmpCoach => {
    console.log(tmpCoach.getDailyWorkout());
});
for (let tmpCoach of theCoaches) {
    console.log(tmpCoach.getDailyWorkout());
}
