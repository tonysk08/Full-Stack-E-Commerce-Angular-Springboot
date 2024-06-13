var sportsOne = ["golf", "criket", "tenis", "swiming"];
//sinple for loop
console.log(" ");
for (var _i = 0, sportsOne_1 = sportsOne; _i < sportsOne_1.length; _i++) {
    var tempSport = sportsOne_1[_i];
    if (tempSport == "criket") {
        console.log("".concat(tempSport, " Her favorite!"));
    }
    else {
        console.log(tempSport);
    }
}
