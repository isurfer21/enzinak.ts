# enzinak.ts
View-stack based micro-framework with built-in utility library in TypeScript

### Demonstration
You can see the boiler-plate application made using this framework at [isurfer21.github.io/enzinak.ts/](https://isurfer21.github.io/enzinak.ts/) for your reference.

You can explore this framework more by referring the typescript source-code files in `ts/` folder.

### Development
You can either download or `git clone` the repository, so as to make it available on your system.

#### Setup
Install typescript on your system as globally accessible
```
npm install -g typescript
```
After installation verify it's accessiblity by checking the SDK version
```
tsc -v
```

#### Build
Go to the project folder and run this command to create it's build
```
tsc -b
```
It will generate a typescript equivalent javascript files in `js/` folder  

#### Watch
At the root of project folder, run this command to continuously watch typescript files for new changes to re-build it
```
tsc -w
```
It will continuously generate a typescript equivalent javascript files in `js/` folder  