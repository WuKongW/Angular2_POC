System.config({
    transpiler: 'typescript', /** 编译typescript*/
    typescriptOptions: {
        emitDecoratorMetadata: true
    },
    map: {
        'app': 'app', /** 指定代码所在路径*/
        'rxjs': 'node_modules/rxjs',
        '@angular': 'node_modules/@angular'/** 指定Angular2所在路径*/
    },
    packages: {/** 指定入口文件！！*/
        'app': {
            main: 'main.ts',
            defaultExtension: 'ts'
        },
        'rxjs': {
            main: 'index.js'
        },
        '@angular/core': {
            main: 'index.js'
        },
        '@angular/common': {
            main: 'index.js'
        },
        '@angular/compiler': {
            main: 'index.js'
        },
        '@angular/platform-browser': {
            main: 'index.js'
        },
        '@angular/platform-browser-dynamic': {
            main: 'index.js'
        },
        '@angular/router': {
            main: 'index.js'
        }
    }
});
