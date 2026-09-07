function Student(name, surname, birthYear, grades) {
    this.name = name;
    this.surname = surname;
    this.birthYear = birthYear;
    this.grades = grades;
    this.attendance = new Array(25).fill(null);

    this.getAge = function() {
        return new Date().getFullYear() - this.birthYear;
    };

    this.getAverageGrade = function() {
        return this.grades.reduce((sum, grade) => sum + grade, 0) / this.grades.length;
    };

    this.present = function() {
        let index = this.attendance.indexOf(null);

        if (index !== -1) {
            this.attendance[index] = true;
        }
    };

    this.absent = function() {
        let index = this.attendance.indexOf(null);

        if (index !== -1) {
            this.attendance[index] = false;
        }
    };

    this.summary = function() {
        let lessons = this.attendance.filter(item => item !== null);
        let visits = lessons.filter(item => item === true).length;

        let averageAttendance = visits / lessons.length;
        let averageGrade = this.getAverageGrade();

        if (averageGrade > 90 && averageAttendance > 0.9) {
            return "Молодець!";
        } else if (averageGrade < 90 && averageAttendance < 0.9) {
            return "Редиска!";
        } else {
            return "Добре, але можна краще";
        }
    };
}

const student1 = new Student("Іван", "Петров", 2005, [95, 92, 98]);

student1.present();
student1.present();
student1.present();
student1.present();

console.log(student1);
console.log("Вік:", student1.getAge());
console.log("Середній бал:", student1.getAverageGrade());
console.log("Результат:", student1.summary());

const student2 = new Student("Олег", "Іванов", 2006, [70, 75, 80]);

student2.present();
student2.absent();
student2.absent();

console.log(student2);
console.log("Вік:", student2.getAge());
console.log("Середній бал:", student2.getAverageGrade());
console.log("Результат:", student2.summary());

const student3 = new Student("Анна", "Сидорова", 2005, [95, 95, 100]);

student3.present();
student3.present();
student3.present();
student3.present();
student3.present();

console.log(student3);
console.log("Вік:", student3.getAge());
console.log("Середній бал:", student3.getAverageGrade());
console.log("Результат:", student3.summary());
