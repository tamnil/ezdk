# EZDK ( DK , DKC ) Docker docker-compose  abbreviation
[![Build Status](https://travis-ci.com/tamnil/ezdk.svg?branch=master)](https://travis-ci.com/tamnil/ezdk)

Common commands with less typing , by abberviation  - docker and docker-compose commands.

Useful for developers and remote/mobile access with limited level of input rate.

If overrides is not found dk and dkc

## Requirements

* node >= 8

## Install
from https://www.npmjs.com/package/ezdk

```
  npm install -g ezdk

```
## Examples

Aliases:
  
  * docker => dk
  * docker-compose => dkc
  
### Docker
```
removes all images:
dk rmia 

removes all containers:
dk rma 

```

### Docker-compose
```
docker-compose up
dkc u

docker-compose up --build
dkc ub
```

## Dictionaries:
### dk (docker)
https://github.com/tamnil/ezdk/blob/master/dict/dk.dict.js

### dkc (docker-compose)
https://github.com/tamnil/ezdk/blob/master/dict/dkc.dict.js


## Compatibility

  Not tested on windows "cmd" environment, only on POSIX systems, you can use WSDL ou cygwin to emulate the anvironment
  
## Author
      Tamnil Saito Junior <tamnil@gmail.com>
