let students = [
    {
        name: "student 1",
        class: 1,
        division: 'A',
        marks: [13, 15, 16, 20, 20]
    },
    {
        name: "student 2",
        class: 1,
        division: 'A',
        marks: [2, 1, 8, 20, 4]
    },
    {
        name: "student 3",
        class: 1,
        division: 'A',
        marks: [15, 17, 18, 19, 9]
    },
    {
        name: "student 4",
        class: 1,
        division: 'A',
        marks: [18, 12, 19, 10, 18]
    },
];

let topperName = '';
let toppperMark = 0;

const findTopper = (students) => {
    let total = 0;
    let topper = 0;
    for (student of students) {
        for (x in student) {
            if (x == "marks") {
                student[x].forEach((mark) => total+=mark);
                if(total>topper) {
                    topper = total;
                    name = student['name'];
                }
                total = 0;
            }
        }
    }
    topperName = name;
    toppperMark = topper;
}

findTopper(students);
console.log(topperName);
console.log(toppperMark);