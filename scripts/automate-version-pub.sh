#! /bin/bash
git add . && git commit -m 'sync' && git push && npm version patch && npm publish && sleep 3 && npm install -g ezdk

