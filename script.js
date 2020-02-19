const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
    }
    }, {
    name: "Victor",
    course: 4,
    subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5]
    }
    }, {
    name: "Anton",
    course: 2,
    subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5]
    }
    }];

//----------------------------------------------------------------------------------

const getSubjects = (student) => {
    let arrToUp = Object.keys(student.subjects).map((sub) => {
        return sub[0].toUpperCase() + sub.slice(1)
    });
    let res = [];
    for (let i = 0; i < arrToUp.length; i++) {
        if(arrToUp[i].search('_') !== -1) {
            res.push(arrToUp[i].replace('_', ' '));
        } else {
            res.push(arrToUp[i]);
        };
        
    }
    return res;
};

console.log(getSubjects(students[0]));

//----------------------------------------------------------------------------------

const getAverageMark = (student) => {
    let newArr = [].flat();
    for (let key in student.subjects) {
        newArr.push(student.subjects[key]);
    };
    return ((newArr.flat().reduce(function(a, b) {
        return a + b;
    }, 0)) / newArr.flat().length).toFixed(2);
}

console.log(getAverageMark(students[0]));

//----------------------------------------------------------------------------------

const getStudentInfo = (student) => {
    let res = {};
    res.course=student.course;
    res.name=student.name;
    res.averageMark = getAverageMark(student);
    return res;
}

console.log(getStudentInfo(students[0]));

//----------------------------------------------------------------------------------

const getStudentsNames = (studentsName) => {
    let names = [];
    for (let i = 0; i < studentsName.length; i++) {
        names.push(studentsName[i].name);
    }
    return names.sort();
}

console.log(getStudentsNames(students));

//----------------------------------------------------------------------------------

const getBestStudent = (student) => {
    let res = [];
    let best = [];
    for (let i = 0; i < student.length; i++) {
        best.push(getAverageMark(students[i]));
    }
    for (let j = 0; j < best.length; j++) {
        if(Math.max(...best) == getAverageMark(students[j])) {
            res = students[j].name;
        }
    }
    return res;
}

console.log(getBestStudent(students));