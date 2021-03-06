/// <binding AfterBuild='copy-to-wwwroot' />
/*
This file in the main entry point for defining Gulp tasks and using Gulp plugins.
Click here to learn more. http://go.microsoft.com/fwlink/?LinkId=518007
*/

"use strict";
var gulp = require("gulp");
//var watch = require("gulp-watch");
var sass = require('gulp-sass');
var del = require("del");
var sourcemaps = require("gulp-sourcemaps");
var uglify = require("gulp-uglify");
var tsc = require("gulp-typescript");
var tsProject = tsc.createProject("tsconfig.json");

var root_path = {
    webroot: "./wwwroot/",
    app: "./app/",
    nmSrc: "./node_modules/",
    primeResources: "./resources/",
    package_lib: "wwwroot/lib/",
    resourcesInWebRoot: './wwwroot/resources/'
};
//library destination

var apiServiceLocalOption1Url = "./EnvironmentApiUrl/localoption1/";
var apiServiceLocalOption2Url = "./EnvironmentApiUrl/localoption2/";
var apiServicePreProdUrl = "./EnvironmentApiUrl/preprod/";
var apiServiceQAUrl = "./EnvironmentApiUrl/qa/";
var apiServiceDestinationUrl = './app/shared/services/apiUrlconst/';


root_path.package_lib = root_path.webroot + "lib/";
gulp.task("copy-systemjs", function () {
    return gulp.src(root_path.nmSrc + '/systemjs/dist/**/*.*', {
        base: root_path.nmSrc + '/systemjs/dist/'
    }).pipe(gulp.dest(root_path.package_lib + '/systemjs/'));
});

/// Copying All Resources to the wwwroot

gulp.task("copy-angular2", function () {
    return gulp.src(root_path.nmSrc + '/@angular/**/bundles/**/*.umd.js', {
        base: root_path.nmSrc + '/angular2/'
    }).pipe(gulp.dest(root_path.package_lib + '/angular2/'));
});
gulp.task("copy-es6-shim", function () {
    return gulp.src(root_path.nmSrc + '/es6-shim/es6-sh*', {
        base: root_path.nmSrc + '/es6-shim/'
    }).pipe(gulp.dest(root_path.package_lib + '/es6-shim/'));
});
gulp.task("copy-rxjs", function () {
    return gulp.src(root_path.nmSrc + '/rxjs/bundles/*.*', {
        base: root_path.nmSrc + '/rxjs/bundles/'
    }).pipe(gulp.dest(root_path.package_lib + '/rxjs/'));
});
gulp.task("copy-rxjs-all", function () {
    return gulp.src(root_path.nmSrc + '/rxjs/**/*.js')
        .pipe(gulp.dest(root_path.package_lib + '/rxjs/'));
});

gulp.task("copy-reflect", function () {
    return gulp.src(root_path.nmSrc + '/reflect-metadata/reflect.js')
    .pipe(gulp.dest(root_path.package_lib + 'reflect/'));
});


gulp.task("copy-zone", function () {
    return gulp.src(root_path.nmSrc + '/zone.js/dist/zone.min.js')
        .pipe(gulp.dest(root_path.package_lib + 'zone/'));
});

gulp.task("copy-systemjs", function () {
    return gulp.src(root_path.nmSrc + '/systemjs/dist/system.src.js')
        .pipe(gulp.dest(root_path.package_lib + 'systemjs/'));
});

gulp.task('sass', ['sass-titan'], function () {
    gulp.src([root_path.primeResources + '**/*.scss', '!**/*-titan.scss'])
        .pipe(sass())
        .pipe(gulp.dest(root_path.resourcesInWebRoot));
});
gulp.task('sass-cleanup', function () {
    del(['resources/layout/*.css', 'resources/theme/*.css']);
   
});

gulp.task('sass-titan', function () {
    gulp.src(root_path.primeResources + '**/*-titan.scss')
        .pipe(sass())
        .pipe(gulp.dest(root_path.primeResources))
        .pipe(gulp.dest(root_path.resourcesInWebRoot));
});

gulp.task("primengDependencies", function () {
    gulp.src(["./resources/primeng.deps/**/*"])//, "!resources/demo/**", "!resources/sass/**/*.scss"])
        .pipe(gulp.dest("./wwwroot/resources/primeng.deps"));
});
gulp.task("resourcesPrimeSpreadJs", function () {
    gulp.src(["./resources/spreadjs/**/*", "!resources/**/*.scss"])//, "!resources/demo/**", "!resources/sass/**/*.scss"])
        .pipe(gulp.dest("./wwwroot/resources/spreadjs"));
});
gulp.task("resourcesPrimeLayout", function () {
    gulp.src(["./resources/layout/**/*", "!resources/**/*.scss"])//, "!resources/demo/**", "!resources/sass/**/*.scss"])
       .pipe(gulp.dest("./wwwroot/resources/layout"));
});


gulp.task("resourcesPrimeThemes", function () {
    gulp.src(["./resources/theme/**/*", "!resources/**/*.scss"])//, "!resources/demo/**", "!resources/sass/**/*.scss"])
        .pipe(gulp.dest("./wwwroot/resources/theme"));
});

gulp.task("copy-thirdparty-files", ["sass","resourcesPrimeSpreadJs", "resourcesPrimeLayout", "resourcesPrimeThemes"]);

gulp.task("moment", function () {
    gulp.src(root_path.nmSrc + "moment/**/*")
        .pipe(gulp.dest(root_path.package_lib + "moment/"));
});


gulp.task("NMprimeResources", function () {
    gulp.src(root_path.nmSrc + "primeng/**/*")
        .pipe(gulp.dest(root_path.package_lib + "primeng/"));
});

gulp.task('copy-titanResources', function () {
    gulp.src('./titanResources/**/*')
        .pipe(gulp.dest(root_path.webroot + 'library/titanResources/'));
});
gulp.task("css", function () {
    gulp.src(root_path.app + "**/*.css", { base: root_path.app })
        .pipe(gulp.dest(root_path.webroot + "app/"));
});

gulp.task("html", function () {
    gulp.src(root_path.app + "**/*.html", { base: root_path.app })
        .pipe(gulp.dest(root_path.webroot + "app/"));
});

gulp.task('bootstrap', function () {
    gulp.src(root_path.nmSrc + 'bootstrap/**/*')
        .pipe(gulp.dest(root_path.package_lib + 'bootstrap/'))
})

gulp.task('tsClean', function () {
    del['./app/**/*', '!app/**/*.ts', '!./app/**/*.js.map']
});

gulp.task("tsCompile", ['tsClean'], function () {
    return tsProject.src()
        .pipe(sourcemaps.init())
        .pipe(tsProject())
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(root_path.webroot + "app/"));
});

gulp.task('tsCompileAndCopytsToWWWRoot', ['tsCompile'], function () {
    gulp.src(root_path.app + "**/*.ts", { base: root_path.app })
        .pipe(gulp.dest(root_path.webroot + "app/"));
});

gulp.task("moment", function () {
    gulp.src(root_path.nmSrc + "moment/**/*")
        .pipe(gulp.dest(root_path.package_lib + "moment/"));
});
gulp.task("icons", function () {
    gulp.src('./icons' + '/**/*.*')
        .pipe(gulp.dest(root_path.webroot + 'icons'));
});
gulp.task('copy-systemjs-config', function () {
    gulp.src('systemJsConfig/' + '*.js')
        .pipe(gulp.dest(root_path.webroot))
});

gulp.task('copy-to-wwwroot',
    [
        'copy-systemjs-config',
        'copy-angular2',
        'copy-es6-shim',
        'copy-rxjs',
        'copy-rxjs-all',
        'copy-reflect',
        'copy-zone',
        'copy-systemjs',
        'copy-thirdparty-files',
        'primengDependencies',
        'NMprimeResources',
        'moment',
        'html',
        'css',
        'copy-titanResources',
        'bootstrap',
        'icons',
        'tsCompile'
        
    ]);

gulp.task('copy-to-wwwroot-preprod',
    [
        'copy-preprodlocation',
        'copy-systemjs-config',
        'copy-angular2',
        'copy-es6-shim',
        'copy-rxjs',
        'copy-rxjs-all',
        'copy-reflect',
        'copy-zone',
        'copy-systemjs',
        'copy-thirdparty-files',
        'moment',
        'resourcesPrimeThemes',
        'NMprimeResources',

       
        'html',
        'css',
        'copy-titanResources',
        'bootstrap',
        'icons',
        'tsCompile'
    ]);

gulp.task('copy-to-wwwroot-location1',
    [
        'copy-locationoption1',
        'copy-systemjs-config',
        'copy-angular2',
        'copy-es6-shim',
        'copy-rxjs',
        'copy-rxjs-all',
        'copy-reflect',
        'copy-zone',
        'copy-systemjs',
        'copy-thirdparty-files',
        'moment',
        'resourcesPrimeThemes',
        'NMprimeResources',

        
        'html',
        'css',
        'copy-titanResources',
        'bootstrap',
        'icons',
        'tsCompile'
    ]);

gulp.task('copy-to-wwwroot-location2',
    [
        'copy-locationoption2',
        'copy-systemjs-config',
        'copy-angular2',
        'copy-es6-shim',
        'copy-rxjs',
        'copy-rxjs-all',
        'copy-reflect',
        'copy-zone',
        'copy-systemjs',
        'copy-thirdparty-files',
        'moment',
        'resourcesPrimeThemes',
        'NMprimeResources',

        
        'html',
        'css',
        'copy-titanResources',
        'bootstrap',
        'icons',
        'tsCompile'
    ]);

gulp.task('copy-to-wwwroot-qalocation',
    [
        'copy-qalocation',
        'copy-systemjs-config',
        'copy-angular2',
        'copy-es6-shim',
        'copy-rxjs',
        'copy-rxjs-all',
        'copy-reflect',
        'copy-zone',
        'copy-systemjs',
        'copy-thirdparty-files',
        'moment',
        'resourcesPrimeThemes',
        'NMprimeResources',

      
        'html',
        'css',
        'copy-titanResources',
        'bootstrap',
        'icons',
        'tsCompile'
    ]);

gulp.task('htmlwatch', function () {
    gulp.watch(root_path.app + "**/*.html", ['html']);
});

gulp.task('tsCompileWatch', function () {
    gulp.watch(root_path.app + "**/*.ts", ['tsCompile']);
});

gulp.task("sourceMap", function () {
    gulp.src(root_path.app + "**/*.map", { base: root_path.app })
        .pipe(gulp.dest(root_path.webroot + "app/"));
});

gulp.task("ts", function () {
    gulp.src(root_path.app + "**/*.ts", { base: root_path.app })
        .pipe(gulp.dest(root_path.webroot + "app/"));
});

gulp.task('tswatch', function () {
    gulp.watch(root_path.app + "**/*.ts", ['ts']);
    /*gulp.src(root_path.app + "**!/!*.ts")
        .pipe(watch(root_path.app + "**!/!*.ts"))
        .pipe(gulp.dest(root_path.webroot + "app/"));
*/
    /*return watch(root_path.app + "**!/!*.ts", {ignoreInitial:false })
        .pipe(gulp.dest(root_path.webroot + "app/"))*/
});

gulp.task("copy-@types", function () {
    return gulp.src(root_path.nmSrc + '/es6-shim/es6-sh*', {
        base: root_path.nmSrc + '/es6-shim/'
    }).pipe(gulp.dest(root_path.package_lib + '/es6-shim/'));
});

gulp.task("copy-locationoption1",
    function () {
        return gulp.src(apiServiceLocalOption1Url + '*.ts')
            .pipe(gulp.dest(apiServiceDestinationUrl));
    });
gulp.task("copy-locationoption2",
    function () {
        return gulp.src(apiServiceLocalOption2Url + '*.ts')
            .pipe(gulp.dest(apiServiceDestinationUrl));
    });
gulp.task("copy-preprodlocation",
    function () {
        return gulp.src(apiServicePreProdUrl + '*.ts')
            .pipe(gulp.dest(apiServiceDestinationUrl));
    });
gulp.task("copy-qalocation",
    function () {
        return gulp.src(apiServiceQAUrl + '*.ts')
            .pipe(gulp.dest(apiServiceDestinationUrl));
    });



//gulp.task("prepod-deployment-package", ['sass','copy-preprodlocation', 'tsCompile', 'css', 'html', 'sourceMap', 'ts', 'NMprimeResources', 'primeResources']);

gulp.task("prepod-deployment-package", ['copy-preprodlocation', 'copy-to-wwwroot']);

gulp.task("copy-dev-res", ["ts", 'sourceMap', 'css', 'html']);

//gulp.task("copy-dev-res-all", ['sass', "ts", 'sourceMap', 'css', 'html', 'NMprimeResources', 'primeResources']);
gulp.task("copy-dev-res-all",
    ['sass', "ts", 'sourceMap', 'css', 'html', 'NMprimeResources', 'resourcesPrimeLayout', 'resourcesPrimeSpreadJs', 'resourcesPrimeLayout']);


gulp.task("copy-front-dev-only", ['css', 'html']);
gulp.task("copy-dev-ts-sourceMap", ["ts", 'sourceMap']);


gulp.task("copy-all", ["copy-rxjs", 'copy-angular2', 'copy-systemjs', 'copy-es6-shim']);