class Student {
    name = "Raj";
    student_class = 10;
    division = "D";
    marks = [10, 15, 20, 22, 25];
    
    total = () => {
        let total_marks = 0;
        this.marks.forEach((mark)=>{
            total_marks += mark;
        });
        return(total_marks);
    }
}
let total=0;
let student = new Student();
console.log(student.total());
