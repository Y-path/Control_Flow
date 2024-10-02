//Part 1

const PI = 3.1415;
console.log (PI);
//output: 3.1415

const area = (PI * 5 * 5);
console.log (area);
//output: 78.5375 

let plantSpace = 0.8;
console.log (plantSpace);
//output: 0.8

let plantSpace80 = (78.5375 * 0.8);  
console.log (plantSpace80);
//output: 62.83

let plantSpace50 = (78.5375 * 0.5);
console.log (plantSpace50);

let startingAreaPlants = (20 * 0.8);
console.log (startingAreaPlants);
//output: 16

let plantGrowthWeek1 = (startingAreaPlants * 2);
console.log (plantGrowthWeek1);
//output: 32

let plantGrowthWeek2 = (plantGrowthWeek1 * 2);
console.log (plantGrowthWeek2);
//output: 64

let plantGrowthWeek3 = (plantGrowthWeek2 * 2);
console.log (plantGrowthWeek3);
//output: 128

let weeksOfGrowth = plantGrowthWeek3;

if (weeksOfGrowth > plantSpace80) {
    console.log ('Pruned');
} else if (weeksOfGrowth < plantSpace50) {
    console.log ('Planted');
} else if (weeksOfGrowth > plantSpace50 + weeksOfGrowth < plantSpace80) {
    console.log ('Monitored');
}
//output: at 1 week the result is Planted
//at 2 weeks the result is Planted
//at 3 weeks the result is Pruned

//Part 2

let newStartingAreaPlants = (100 * 0.8);
console.log (newStartingAreaPlants);
//output: 80

let plantGrowthAt10Weeks = (80 * 2) * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2 * 2;
console.log (plantGrowthAt10Weeks);
//output: 81920

let newRadius = Math.sqrt (81920 / 3.1415);
console.log (newRadius);
//output: 161.4828 

//Part 3

let plantsStartingAt100 = (100 * 0.8);

try {
    if (plantsStartingAt100 < 78.5375) {
        console.log ('Yes - All is good.');
    } else {
        throw 'Error - Not enough space!';
    }
} catch (error) {
    console.log (error);
}
//output: Error - Not enough space!

