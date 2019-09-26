# Kin Laboratory

[![Build Status](https://travis-ci.org/kinecosystem/laboratory.svg)](https://travis-ci.org/kinecosystem/laboratory)

The Kin Laboratory is a suite of tools to help one learn about exploring the Kin Kin network. 
See it in action: [https://laboratory.kin.org/](https://laboratory.kin.org/).

## Developing
```
npm install
./node_modules/.bin/gulp develop
```

## Building for production
```
npm install
./node_modules/.bin/gulp build
```

## Internal documentation
The [docs.md](./docs.md) file contains code documentation on the laboratory. The docs.md is only relevant for developing the laboratory.


## some additional notes
1. this works with node v8.16.1
2. build with ./node_modules/.bin/gulp build
3. you need to deploy the entire dist folder (including /images)
4. dont forget to invalidate the cache 
