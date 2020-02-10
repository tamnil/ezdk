#! /bin/bash
git add . && git commit -m 'sync' && git push && npm version patch && git push && npm publish && sleep 5 && npm install -g ezdk

