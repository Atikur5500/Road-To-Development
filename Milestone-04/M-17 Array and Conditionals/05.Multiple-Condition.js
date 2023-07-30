const isGraduated = true;
const salary = 84000;
const job = 'developer'

// && AND Operator
if (isGraduated == true && salary > 50000) {
    console.log('Mantasha will marry you!')
} else {
    console.log('Mantasha mom will not agree to married')
}

if (isGraduated == true && salary > 55000 && job == 'developer') {
    console.log('True')
} else {
    console.log('False')
}
// || OR Operator
if (isGraduated == true || salary > 95000 || job == 'developer') {
    console.log('True')
} else {
    console.log('False')
}
// Mix
if (isGraduated == false && (salary > 95000|| job == 'developer')) {
    console.log('True')
} else {
    console.log('False')
}

if ((isGraduated == false || salary > 95000) && job == 'developer') {
    console.log('True')
} else {
    console.log('False')
}


