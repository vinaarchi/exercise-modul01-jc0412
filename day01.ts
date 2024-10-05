// exercise modul01-jc0412

//1
const panjang: number = 5;
const lebar: number = 3;

const luas = panjang * lebar;
console.log(luas);

//2
const _length :number = 5;
const _width : number = 3;
const _P :number = 2;
const _luas = _P*(_length+_width);
console.log(_luas);

// jawaban dari ka bryan
const _perimeterRectangle = 2 * (_length + _width);
console.log(_perimeterRectangle)

//3
const radius :number = 5;
const rumus :number = 2;
const pi = Math.PI;
const _pi = Math.pow(radius, 2)
// Diameter of a circle
const diameter = rumus*radius;
console.log(diameter);
// Circumference of a Cirle 
const Circumference = rumus*pi*radius;
console.log(Circumference);
// Area of a Cirle
const Area = pi*_pi;
console.log(Area);

//4
const _angle1 = 80;
const _angle2 = 65;
const _lastangle = 180 - (_angle1 + _angle2);
console.log(_lastangle);



//5 (pelajari lgi yang no 5 sama 6)
const _daysInput = 700;
const _years = Math.floor(_daysInput / 365);
const _months = Math.floor((_daysInput % 365) / 30);
const _days = Math.floor((_daysInput % 365) % 30);
console.log(
    `${_daysInput} days -> ${_years} year, ${_months} month, ${_days} day`

//6
const _date1 = new Date("2022-01-20");
const _date2 = new Date("2022-01-30");
const _dateDiff = (_date2.getTime() - _date1.getTime()) / (24 * 3600 * 1000);
console.log(_dateDiff);