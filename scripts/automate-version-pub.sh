#! /bin/bash
git add . && git commit -m 'sync' && git push && npm version patch && npm publish && npm install -g ezdk

