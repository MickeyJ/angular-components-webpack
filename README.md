## Angular - Webpack - ES2015
### with Express to deploy it

[Live Demo](https://ng-components.herokuapp.com/)

```bash
  
$ npm install
  
```

Development
```bash
  
$ npm run dev
  
```

Staging (testing minified angular)
```bash
  
$ npm run stage
  
```

Production (actually building the bundle and serve it up with Express)
```bash
  
$ npm run build
  
```
For deploying to heroku, change your __.gitignore__ file to *include* the public bundle.
Also, *ignore* the src folder all together.

Should look like this...

```
  
node_modules
src/*
#public/bundle.js
  
```