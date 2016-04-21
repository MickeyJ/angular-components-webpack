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
For deploying to heroku, change your 
.gitignore file to *include* the public bundle like this...

```
  
node_modules
#public/bundle.js
  
```