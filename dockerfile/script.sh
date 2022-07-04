#!/bin/sh

ls -la /home/projects/
cd /home/projects/
yarn install
yarn start && rm -rf ./node_modules
