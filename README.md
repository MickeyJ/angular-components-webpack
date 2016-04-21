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
For deploying to heroku, change your __.gitignore__ file to __*include*__ the public bundle.
Also, __*ignore*__ the webpack configuration and src folder all together.

Should look like this...

```
  
# -- Always Ignore --  
node_modules
  

# -- Deployment Files --
# public/bundle.js
  

# -- Development Files --
src/*
webpack.config.js
  
```