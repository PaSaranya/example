#!/bin/bash

set -xe
echo "inside Shellscript"
cd example
echo "******************npm install****************************"
npm install
mocha tests --recursive
