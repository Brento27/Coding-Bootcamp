document.getElementById("button").addEventListener('click',run)


function grades() {
this.studentGrades = [];
this.add = add;
this.average = average;
}

function add(grade) {
    this.studentGrades.push(grade);
}
function average() {
    var total = 0;
    for (var i = 0; i < this.studentGrades.length; ++i) {
        total += this.studentGrades[i];
        }
    return total / this.studentGrades.length;
    }


var student01 = new grades()

student01.add(87);
student01.add(70);
student01.add(60);
student01.add(76);
student01.add(55);
student01.add(23);
student01.add(47);
student01.add(93);

student01.average
