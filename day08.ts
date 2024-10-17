// no 1
/*
class Employee{
    name: string;
    hoursWorked: number;

    constructor(
        name: string,
        hoursWorked: number,
        
    ) {
        this.name =  name;
        this.hoursWorked = hoursWorked;
    }
}
class FullTimeEmployee extends Employee{
    constructor(name: string, hoursWorked: number){
        super(name, hoursWorked);
    }
    calculateSalary(){
        let hourRate = this.hoursWorked > 6 ? 75000 : 100000;
        // jika employee bekerja lebih dari 6jam akan dihitung 75000
        // jika employee bekerja kurang dari 6 jam akan dihitung 100000
        return hourRate * this.hoursWorked;
    }
}
class PartTimeEmployee extends Employee{
    constructor(name: string, hoursWorked: number){
        super(name, hoursWorked);
    }
    calculateSalary(){
        let hourRate =  this.hoursWorked > 6 ? 30000 : 50000;
        return hourRate * this.hoursWorked;
    }
}

const employeeA = new FullTimeEmployee("Alice", 100000, 75000);
employeeA.calculateSalary("09:00", "15:00");
employeeA.calculateSalary("09:00", "12:00");
console.log(employeeA.working);
console.log(employeeA.getSalary);

*/


class Employee {
    name: string;
    workHour: number[]

    constructor(name: string){
        this.name = name;
        this.workHour = [];
    }

    addWorkHour(hours: number){
        this.workHour.push(hours);
    }
    getTotalHour(): number{
        return this.workHour.reduce((total, hours) => total + hours, 0)
    }
}
class FullTimeEmployee extends Employee {
    constructor(name:string){
        super(name);
    }
    calculateDailySalary(workHour: number): number {
        if (workHour > 6){
            return workHour * 75000;
        }else{
            return workHour * 100000;
        }
    }
    calculateTotalSalary(): number{
        let totalSalary = 0;
        this.workHour.forEach((hours) => {
            totalSalary += this.calculateDailySalary(hours);
        })
        return totalSalary;
    }
}


const employeeA = new FullTimeEmployee ("Alice");
console.log(employeeA.addWorkHour(10));
console.log(employeeA.addWorkHour(6));


console.log(employeeA.getTotalHour());
console.log(employeeA.calculateTotalSalary());




// exercise Shooting Game
/*
Specifications :
○ Create a shooting game between two player
○ Each player has three properties : name, health and power
○ Each player will take turns to shooting
○ Before shooting, players get a chance to get random items (health +10 or power +10)
○ The game will continue until one of the players has health < 0

● Requirements :
○ Create ShootingGame & Player class
○ ShootingGame class :
■ constructor(player1, player2) → player objects as a parameter
■ getRandomItem() → return { health: 0 or 10, power: 0 or 10 } => {health : 0 , power : 10}
■ start() → start shooting games

○ Player class :
■ Property → name, health (default 100), power (default 10)
■ damage(power) → subtract player health
■ useItem(item) → apply item to player (increase health or power, based on result from getRandomItem())
■ showStatus() → show player status (ex : “Player A (Health => 100, Power => 10) ”)

○ ShootingGame start() function flow :
■ In every turn :
● Show each player status before shooting
● Get random item for each player before shooting
● Show each player status after shooting
■ Show winner name
*/

// player class
class player {
    name: string;
    health: number;
    power: number;

    constructor(name){
        this.name = name;
        this.health = 100;
        this.power = 10;
    }
    damage(power){
        this.health -= power;
    }
    useItem(item){
        this.health += item.health;
        this.power += item.power;
    }
    showStatus() {
        console.log(`${this.name} (Health: ${this.health}, Power: ${this.power})`);
    }
}


// class shootingnya

class ShootingGame{
    player1: player;
    player2: player;


    constructor(player1, player2){
        this.player1 = player1;
        this.player2 = player2;
    }
    // function untuk dapetin antara health +10 atau power +10
    getRandomItem(){
        const randomHealth = Math.random() < 0.5 ? 0 : 10;
        const randomPower =  Math.random() < 0.5 ? 0 : 10;
        return {health: randomHealth, power: randomPower}
    }

    start() {
        let turn = 1;

        while (this.player1.health > 0 && this.player2.health > 0){
            console.log(`\n--- Turn ${turn}---`);
            
            // untuk menunjukkan status sebelum menembak
            this.player1.showStatus();
            this.player2.showStatus();

            // random item untuk kedua pemain
            const item1 = this.getRandomItem();
            const item2 = this.getRandomItem();

            // pengaplikasian item untuk pemain
            this.player1.useItem(item1);
            this.player1.useItem({hp:10,p:10});
            this.player2.useItem(item2);

            console.log(`\nAfter getting item:`);
            this.player1.showStatus();
            this.player2.showStatus();

            // ketika player 1 nembak Player 2
            console.log(`\n${this.player1.name} shoots ${this.player2.name}!`);
            this.player2.damage(this.player1.power);

            //cek apakah player 2 kalah
            if (this.player2.health <= 0){
                console.log(`\n${this.player1.name} wins!`);
                break;
            }
            // ketika player2 nembak player1
            console.log(`\n${this.player2.name} shoots ${this.player1.name}!`);
            this.player1.damage(this.player2.power);

            // cek apakah player1 kalah
            if (this.player1.health <= 0){
                console.log(`\n${this.player1.name} wins!`);
                break;
            }
            console.log(`\nAfter Shooting:`);
            this.player1.showStatus();
            this.player2.showStatus(-);
            
            turn++;
        }
    }
}

const player1 = new player("Player 1");
const player2 = new player("Player 2")

const game = new ShootingGame(player1, player2);
game.start();
