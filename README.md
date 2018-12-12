# laboratory

The Stellar Laboratory is a suite of tools to help one learn about exploring the Stellar network. See it in action: [https://www.stellar.org/laboratory/](https://www.stellar.org/laboratory/).

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
## Customizing the urls
Should you want to customizr the urls shown on the lab site, do the following:
1. build the lab
2. edit the bash script configure_lab_netowrk.sh, to the urls you want
3. run the script
4. deploy the resulting files in the dist folder to an s3 bucket.

## Internal documentation
The [docs.md](./docs.md) file contains code documentation on the laboratory. The docs.md is only relevant for developing the laboratory.
