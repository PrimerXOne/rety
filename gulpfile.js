// exports.default = series(hello);
function myTask(callback) {
  console.log('Hello Artem!');

  callback();
}
async function  myTask2() {
    console.log('Task 2:Hello Artem!');

}


exports.myTask = myTask;
exports.myTask2 = myTask2;
exports.myTask3 = async function myTask() {
    console.log('Task 3:Hello Artem!');

    
}
exports.myTask3 = async () => {
    console.log('Task 4:Hello Artem!');

    
}


const gulp = require('gulp');

function cloneFiles() {
  return gulp.src('app/*.html')
    .pipe(gulp.dest('public'));
}

exports.default = cloneFiles;