# DK ( EZDK ) Docker docker-compose  abbreviation
[![Build Status](https://travis-ci.com/tamnil/ezdk.svg?branch=master)](https://travis-ci.com/tamnil/ezdk)

Tamnil Saito Junior <tamnil@gmail.com>

Common commands with less typing , by abberviation docker and docker-compose commands


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




## Compatibility

  Not tested on windows "cmd" environment, only on POSIX systems, you can use WSDL ou cygwin to emulate the anvironment
