import { GolfCoach } from "./GolfCoach";
import { CricketCoach } from "./CricketCoach";
import { Coach } from "./Coach";

let myCricketCoach = new CricketCoach();
let myGolfCoach = new GolfCoach();

let theCoaches: Coach[] = [];

theCoaches.push(myCricketCoach);
theCoaches.push(myGolfCoach);

theCoaches.forEach(tmpCoach => {
    console.log(tmpCoach.getDailyWorkout());
});

for (let tmpCoach of theCoaches) {
    console.log(tmpCoach.getDailyWorkout());
}