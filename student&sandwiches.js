/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function (students, sandwiches) {
    if (sandwiches.length != students.length) {
        return 0
    } else {
        let times=students.length*sandwiches.length;
        while (times!=0) {
            if(students.lenth==0)break;
            if (students[0] == sandwiches[0]) {
                students.shift();
                sandwiches.shift();
                times--;
            } else {
                students.push(students.shift());
                times--;
            }
        }
    }
    return students.length
};