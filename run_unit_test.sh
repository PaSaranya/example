#!/bin/bash

set -xe

cd example
npm install
mocha tests --recursive