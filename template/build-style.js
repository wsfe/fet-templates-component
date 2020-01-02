const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const less = require('gulp-less');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');
const LessNpmImportPlugin = require("less-plugin-npm-import")
const lessOptions = {
    plugins: [
        new LessNpmImportPlugin({prefix: '~'})
    ],
    javascriptEnabled: true
};

// 编译less
function css () {
    return gulp.src('./src/styles/index.less')
        .pipe(less(lessOptions))
        .pipe(autoprefixer())
        .pipe(cleanCSS())
        .pipe(rename('{{ name }}.css'))
        .pipe(gulp.dest('./dist/styles'));
}

// 如果存在font字体
// 拷贝字体文件
// function fonts () {
//     return gulp.src('./src/styles/icons/fonts/*.*')
//         .pipe(gulp.dest('./dist/styles/fonts'))
// }

exports.default = gulp.series(css/*, fonts */)
