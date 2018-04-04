// llamando al paquete de gulp
var gulp = require('gulp');
// haciendo referencia a los pluggins instalados
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var babel = require('gulp-babel');
var minifycss = require('gulp-minify-css');
var sass = require('gulp-sass');
// instalando dependendia en consola npm i gulp -D (-D porque es ambiente de desarrollo)

// definiendo tareA, QUE TENDRA TRES param, primero es el nombre de la tarea, segundo si depende de otra tarea, y tercero la funcionalidads de la tarea a realizar
gulp.task ('js', function() {
  // que archivo agarrará y lo que nos devolverá, con * se traerá a todos los archivos que tengan la extensión .js
  // pipe será el conector
  // instalar depedendias pluggins creoq son npm i gulp-concat gulp-uglify -D
  // Se minificará y ofuzcará
  // en concat se especificará el nombre del archivo de salida
  return gulp.src('src/js/*.js')
  .pipe(concat('app.min.js'))//concatena todos los archivos en app.min.js
  .pipe(babel({presets: ['env']})) //cualquier version la lleva a la estable
  .pipe(uglify()) //aquí se minificará dichos archivos y a la vez los va a ofuzcar
  .pipe(gulp.dest('dist/js/')) //especificANDO donde estará este archivo
})

// la tarea se ejecutará en nom, con la palabra gulp seguiud de la yarea  gulp i js
// antes instalar npm i gulp -g

//en caso me salga error con preset instalar dependencia: npm i babel-core babel-preset-env -D
// bajar otro plugin para el css: npm i gulp-minify-css -D 
// creando tarea para el css


// gulp.task('css', function() {
//   return gulp.src('src/css/*.css')
//   .pipe(concat('main.min.css'))
//   .pipe(minifycss())
//   .pipe(gulp.dest('dist/css/'))
// })

// para sass podemois crear una nueva tarea o ponerlo en el de css 
// ára llamar a sass npm i gulp-sass -D

gulp.task('css', function() {
  return gulp.src(['src/css/*.css', 'src/sass/*.scss'])
  // agregar al sass, lo convertirá a css
  .pipe(sass())
  .pipe(concat('main.min.css'))
  .pipe(minifycss())
  .pipe(gulp.dest('dist/css/'))
})

// si pongo default, solo correria con gulp
// gulp.task('minifica-todo'. ['css', 'js'])

// ejecuta el wacth y ante cualquier cambio va a ejecutar la tarea css
gulp.task('watch', function(){
  gulp.watch(['src/css/*.css', 'src/sass/*.scss'], ['css']);
  gulp.watch('src/js/*.js', ['js'])
})


// para levantarlo a ghpages gulp ghpages
