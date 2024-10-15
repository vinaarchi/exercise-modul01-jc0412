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

