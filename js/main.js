// Задание 1
let student = {
    name: 'Артур',
    age: 24,
    isGraduated: false,
    subjects: ['Математика', 'Метафизика'],
    "favourite sport": 'Теннис'
};

console.log(student);

// Задание 2
student.isGraduated = true;
console.log(student);

// Задание 3
delete student.age;
console.log(student.age);

// Задание 4
let studentScores = {
    math: 5,
    history: 4,
    english: 4,
};

function showScores() {
    for (let score in studentScores) {
        console.log(`Предмет [${score}]: ${studentScores[score]}`);
    }
};

showScores();

// Задание 5
let updateSubjectScore = (studentScoreSubject, subjectName, newScore) => studentScoreSubject[subjectName] = newScore;
updateSubjectScore(studentScores, 'geography', 3)
updateSubjectScore(studentScores, 'math', 3)
showScores();

// Задание 6
console.log(student['favourite sport'])

// Задание 7
let studentBio = Object.create(student);

studentBio.introduce = function() {
    return `Привет, меня зовут ${this.name}, мне ${this.age} года, и я изучаю ${this.subjects.join(', ')}.`;
};
studentBio.age = 24;

console.log(studentBio.introduce());

// Задание 8
student.addSubject = function(subjectName) {
    if (!this.subjects.includes(subjectName)) {
        this.subjects.push(this.subjectName);
        console.log(`Добавлен предмет ${subjectName} в список`);
    } else {
        console.log(`${subjectName} уже существует в списке`)
    }
}

student.addSubject('Метафизика');
student.addSubject('География');

// ФУНКЦИИ РАБОТЫ С МАССИВАМИ
// Задание 1
let daysOfWeek = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
daysOfWeek.shift();
daysOfWeek.pop();
console.log(daysOfWeek);

// Задание 2
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9 , 10];
numbers.unshift(11, 12);
numbers.push(-1, -2);
console.log(numbers);

// Задание 3
let unsortedNumbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
let newUnsortedNumbers = unsortedNumbers.slice(2, 7);
console.log(newUnsortedNumbers);

// Задание 4
let array1 = [1, 2, 3],
    array2 = [4, 5, 6];

let newArr = array1.concat(array2);
newArr.push(7, 8, 9);
console.log(newArr);

// Задание 5
let names =  ["Alice", "Bob", "Charlie", "Dana", "Elvis", "Fran", "George"];
console.log(names.includes('Dana'));

// Задание 6
let sortedArray = [1, 2, 3, 4, 5];
console.log(sortedArray.reverse())

// Задание 7
let spliceArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
spliceArray.splice(1, 4, 11, 12);
console.log(spliceArray);

// Задание 8
let numbersArray = [1, 2, 3, 4, 5, 6, 7 ,8, 9, 10];
let moreThanFive = numbersArray.find(num => num > 5);
console.log(moreThanFive);

// Задание 9
let filteredArr = numbersArray.filter(num => num > 5);
console.log(filteredArr);

// Задание 10
let fiveArr = [1, 2, 3, 4, 5];
let newArray = fiveArr.map(num => num * 2);
console.log(newArray);

// Задание 11
let unsortedArray = [2, 3, 1];
unsortedArray.sort((a, b) => b - a);
console.log(unsortedArray);

// Задание 12
let numbersArray2 = [1, 2, 3, 4, 5];
let result = numbersArray2.reduce((accumulator, current) => accumulator * current, 1);
console.log(result);