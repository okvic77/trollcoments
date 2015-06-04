var gulp = require('gulp');
var images = require('gulp-images');
var jade = require('gulp-jade');
var assets = require('gulp-bower-assets');
var less = require('gulp-less');
var path = require('path');

var source = path.resolve(__dirname, 'page');

var app = {src:source,dest:path.resolve(__dirname, 'public')};

gulp.task('assets', function(){
    return gulp.src('assets.json').pipe(assets()).pipe(gulp.dest('public'));
});

gulp.task('jade', function() {
    return gulp.src(['**/*.jade', '!**/_*'], {
        cwd: app.src
    }).pipe(jade({
        locals: {
            path: function(asset) {
                return path.join('/app', asset);
            },
            app: {
                name: 'Nei',
                description: 'Nei es una plataforma para negocios.',
                words: 'plataforma, negocios, tienda, online, membresias'
            },
            env: process.env
        }
    })).pipe(gulp.dest('', {
        cwd: app.dest
    }));
});

gulp.task('js', function(){

})

gulp.task('default', ['jade'], function(){
    gulp.watch(['page/*.jade', '!**/_*'], ['jade']);
})