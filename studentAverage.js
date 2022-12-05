/*It's the academic year's end, fateful moment of your school report. The averages must be calculated. 
All the students come to you and entreat you to calculate their average for them.
Easy ! You just need to write a script.
Return the average of the given array rounded down to its nearest integer.
The array will never be empty. */
let marks = [9, 6, 7.8, 8.2]    
sumGrades = marks.reduce(function(acc, nextValue){
    return acc + nextValue
})
function getAverage(marks){
    return Math.floor(sumGrades / marks.length)
  }
  console.log(getAverage(marks))
