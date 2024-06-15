import { Coach } from "./Coach";

export class GolfCoach implements Coach{

    getDailyWorkout(): string {
        return "hit 100 ball at the golf range";
    }
}