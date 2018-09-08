let gulp = require("gulp");
let sass = require("gulp-sass");
let minCss = require("gulp-clean-css");
let uglify = require("gulp-uglify");
let server = require("gulp-webserver");
let fs = require("fs");
let url = require("url");
let path = require("path");

let list = require("./mock/list.json")

gulp.task("sass", () => {
    return gulp.src("./src/scss/*.scss")
        .pipe(sass())
        .pipe(minCss())
        .pipe(gulp.dest("./src/css"));
});

gulp.task("watch", () => {
    return gulp.watch("./src/scss/*.scss", gulp.series("sass"))

});
gulp.task("server", () => {
    return gulp.src("./src")
        .pipe(server({
            port: 9080,
            middleware: (req, res) => {
                let pathname = url.parse(req.url, true).pathname;
                if (pathname === "/favicon.ico") { return res.end() };
                if (pathname === "/api/list") {
                    res.end(JSON.stringify({ data: list }));
                } else {
                    pathname = pathname === "/" ? "/index.html" : pathname;
                    res.end(fs.readFileSync(path.join(__dirname, "src", pathname)));
                }
            }
        }));
});
gulp.task("dev", gulp.series("sass", "server", "watch"));