let i = 0;

let experience = setInterval(years, 1000);

function years() {

    if (i == 15) {
        clearInterval(experience);
    }
    else {
        i++;
        document.getElementById("experience").innerText = i;
    }
}


let j = 0;

let student = setInterval(happyStudents, 9);

function happyStudents() {

    if (j == 60000) {
        clearInterval(student);
    }
    else {
        j++;
        document.getElementById("student").innerText = j;
    }
}


let k = 0;

let hiring = setInterval(hiringPartners, 10);

function hiringPartners() {

    if (k == 500) {
        clearInterval(hiring);
    }
    else {
        k++;
        document.getElementById("hiring").innerText = k;
    }
}


let l = 0;

let expert = setInterval(expertCourses, 100);

function expertCourses() {

    if (l == 100) {
        clearInterval(expert);
    }
    else {
        l++;
        document.getElementById("expert").innerText = l;
    }
}