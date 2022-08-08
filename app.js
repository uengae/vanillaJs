/*
//const, let, var

const a=1; //const : 값을 재설정 불가능
const b=1;
let ab="abababa"; //let : 값을 재설정 가능
var abc="123123"; //var : 값을 재설정 가능

console.log(a);
console.log(b);
console.log(ab);
console.log(abc);

ab="babababa";
abc="4242424242";

console.log(a);
console.log(b);
console.log(ab);
console.log(abc);

//Boolean
//true is 1, false is 0

const amIFat1 = true; //true or false, not False, "false"
console.log(amIFat1);
const amIFat2 = null; //비어있다기보다 아무것도 없는 상태로 채워진것. value is null. 변수안에 아무것도 없다고 알려주기 위함
console.log(amIFat2);
let something; //변수는 존재하지만 공간에 값이 안들어가 있는것.
console.log(something)

//array

const mon = "mon";
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fir";
const sat = "sat";
const sun = "sun";

const daysOfWeek = mon + tue + wed + thu + fri + sat + sun;
console.log(daysOfWeek);

const daysOfWeekArray = [mon, tue, wed, thu, fri, sat];
const nonsense = [1, 2, 3, true, false, , null, "dding", "z"];
console.log(nonsense, daysOfWeekArray);
console.log(daysOfWeekArray[5]);//array에서 []안에 있는 위치의 값을 가져옴. 위치는 0부터 시작. 즉, daysOfWeekArray[0]=mon

daysOfWeekArray.push("sun");//array에 값 추가. 마지막 값 옆에 추가
console.log(daysOfWeekArray);

const toBuy = ["potato", "tomato", "pizza"];
console.log(toBuy);
console.log(toBuy[1]);
console.log(toBuy[112313]);
toBuy.push("kimbab");
console.log(toBuy);

//object

const playerName = "nico";
const playerPoints = 121212;
const playerHansome = true;
const playerFat = "little bit";

// player[0] == name
// player[1] == point
// player[2] == hansome
// player[3] == fat
const player = ["nico", 1212, true, "little bit"];

const playerObject = {
    name: "nico",
    points: 10,
    fat: true,
};

console.log(playerObject);
playerObject.fat = false;
console.log(playerObject);
console.log(playerObject["name"]);//객체 변수의 이름으로 값을 찾을 수도 있음
console.log(playerObject.name);
playerObject.lastName = "potato";
console.log(playerObject);
playerObject.points = 15;
console.log(playerObject);
playerObject.points = playerObject.points + 15;
console.log(playerObject);
*/