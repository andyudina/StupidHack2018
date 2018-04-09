const child        = require('child-process-promise'),
      runSequence  = require('run-sequence'),
      historyApi   = require('connect-history-api-fallback'),
      browserSync  = require('browser-sync'),
      ngrok        = require('ngrok'),
      gulp         = require('gulp'),
      gutil        = require('gulp-util'),
      sass         = require('gulp-sass'),
      autoprefixer = require('gulp-autoprefixer'),
      sourcemaps   = require('gulp-sourcemaps'),
      eyeglass     = require('eyeglass'),
      browserify   = require('browserify'),
      babelify     = require('babelify'),
      source       = require('vinyl-source-stream'),
      buffer       = require('vinyl-buffer'),
      pug          = require('gulp-pug'),
      uglify       = require('gulp-uglify'),
      del          = require('del'),
      flatten      = require('gulp-flatten');

// Config

const dir = {
  dist: {
    root:    '_site',
    assets:  '_site/assets',
    styles:  '_site/css',
    scripts: '_site/js'
  },
  src: {
    root:    'src',
    assets:  'src/assets',
  },
}
const bfy = browserify({
  entries: dir.src.root+'/app.js',
  paths: [dir.src.root],
  debug: true,
  transform: [ babelify.configure({
    presets: [ 'react',
               'es2015'
      ],
    plugins: [ 'transform-react-pug',
               'transform-react-jsx',
               'transform-object-rest-spread',
               'transform-class-properties'
      ]
  })]
});

var   sassOptions = {
  eyeglass: {
    enableImportOnce: false
  },
  importer: function(uri, prev, done) {
    done(sass.compiler.types.NULL);
  }
}
var   sassDistOptions = {
  eyeglass: {
    enableImportOnce: false
  },
  outputStyle: 'compressed',
  importer: function(uri, prev, done) {
    done(sass.compiler.types.NULL);
  }
}

var   messages  = {
  jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build',
  pugBuild:    '<span style="color: grey">Running:</span> $ pug build',
  scssBuild:   '<span style="color: grey">Running:</span> $ scss build',
  jsBuild:     '<span style="color: grey">Running:</span> $ js build',
  assetsCopy:  '<span style="color: grey">Running:</span> $ assets copy',
}


// Main tasks

gulp.task('default', function() {
  return runSequence('watch','browser-sync','build-pipeline');
});

gulp.task('dist', function(){
  return runSequence('dist-pipeline');
});

gulp.task('watch', function () {
  return runSequence(
    'pug:watch',
    'assets:watch',
    'scripts:watch',
    'styles:watch',
    'misc:watch'
    );
});

gulp.task('browser-sync', function() {
  return browserSync.init({
    server: {
      baseDir: dir.dist.root,
      middleware: [ historyApi() ]
    },
    scrollElements: ['.project-body-content']
  }, function(err,bs){
    ngrok.connect(bs.options.get('port'), function(err,url){
      console.log(' -------------------------------------');
      console.log('\r', '      NGROK:', url);
      console.log(' -------------------------------------');
    });
  });
});
gulp.task('build-pipeline', function() {
  return runSequence( 'pug', 'scripts', 'sass', 'assets', 'misc', 'browser-sync-notify' );
});
gulp.task('dist-pipeline', function() {
  return runSequence( 'pug:dist', 'scripts:dist', 'sass:dist', 'assets', 'misc' );
});
gulp.task('browser-sync-notify', function(){
  return browserSync.reload();
});


// Pug

gulp.task('pug', function buildHTML(){
  browserSync.notify(messages.pugBuild);
  return gulp.src(dir.src.root+'/index.pug')
             .pipe(pug())
             .pipe(gulp.dest(dir.dist.root));
})
gulp.task('pug:dist', function buildHTML(){
  return gulp.src(dir.src.root+'/index.pug')
             .pipe(pug({
                locals: {ga: 'UA-49268167-2'}
             }))
             .pipe(gulp.dest(dir.dist.root));
})
gulp.task('pug:watch', function(){
  return gulp.watch([
    dir.src.root+'/**/*.pug'
    ], ['pug']);
});


// Styles

gulp.task('sass', function () {
  browserSync.notify(messages.scssBuild);
  del(dir.dist.styles);
  return gulp.src(dir.src.root+'/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass(eyeglass(sassOptions)).on("error", sass.logError))
    .pipe(autoprefixer(['last 2 versions'], { cascade: true }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(dir.dist.styles))
    .pipe(browserSync.reload({stream:true}));
});
gulp.task('sass:dist', function () {
  del(dir.dist.styles);
  return gulp.src(dir.src.root+'/**/*.scss')
    .pipe(sass(eyeglass(sassDistOptions)).on("error", sass.logError))
    .pipe(autoprefixer(['last 2 versions'], { cascade: true }))
    .pipe(gulp.dest(dir.dist.styles));
});
gulp.task('styles:watch', function(){
  return gulp.watch(
    dir.src.root+'/**/*.scss',
    ['sass']
    );
});


// Scripts


gulp.task('scripts', function () {
  browserSync.notify(messages.jsBuild);
  del(dir.dist.scripts);

  return bfy
    .bundle()
    .pipe(source(dir.src.root+'/app.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
        // Add transformation tasks to the pipeline here.
        .on('error', gutil.log)
    .pipe(sourcemaps.write('./'))
    .pipe(flatten())
    .pipe(gulp.dest(dir.dist.scripts))
    .pipe(browserSync.reload({stream:true}));
});
gulp.task('scripts:dist', function () {
  del(dir.dist.scripts);

  return bfy
    .transform('envify', {
        global:   true, // also apply to node_modules
        NODE_ENV: 'production',
    })
    .bundle()
    .pipe(source(dir.src.root+'/app.js'))
    .pipe(buffer())
    .pipe(uglify())
    .on('error', gutil.log)
    .pipe(flatten())
    .pipe(gulp.dest(dir.dist.scripts));
});
gulp.task('scripts:watch', function(){
  return gulp.watch(dir.src.root+'/**/*.js', ['scripts']);
});


// Assets

gulp.task('assets', function(){
  browserSync.notify(messages.assetsCopy);
  return runSequence( 'assets:clean', 'assets:copy' );
})
gulp.task('assets:copy', function(){
  return gulp.src(dir.src.assets+'/**/*')
             .pipe(gulp.dest(dir.dist.assets));
})
gulp.task('assets:clean', function(){
  return del(dir.dist.assets);
})
gulp.task('assets:watch', function(){
  return gulp.watch([
    dir.src.assets+'/**/*'
    ], ['assets']);
});


// Misc

var miscFiles = [
  dir.src.root+'.htaccess'
  ]

gulp.task('misc', function(){
  browserSync.notify(messages.miscCopy);
  return true;
  // return runSequence('misc:copy');
})
gulp.task('misc:copy', function(){
  return gulp.src(miscFiles).pipe(gulp.dest(dir.dist.root));
})
gulp.task('misc:clean', function(){
  return miscFiles.forEach(function(element) {
    del(dir.dist.root + '/' + element);
  });
})
gulp.task('misc:watch', function(){
  return gulp.watch(miscFiles, ['misc'])
})



