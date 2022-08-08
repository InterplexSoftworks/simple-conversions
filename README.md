# Simple Conversions
[![npm version](https://img.shields.io/badge/simple--conversions-v1.0.8-blue)](https://npm.im/simple-conversions)
[![license](https://img.shields.io/badge/license-ISC-green)](https://npm.im/simple-conversions)
----
A NPM package / GitHub repository to simply convert measurements and other things.
----
Install using
```
npm i simple-conversions
```
How to use:

# Length
```js
var convert = require('simple-conversions')

console.log(convert.MilesToKM(1)) // 1 = amount of miles
```
Output: 1.61
```js
var convert = require('simple-conversions')

console.log(convert.InToCM(1)) // 1 = amount of inches
```
Output: 2.54
```js
var convert = require('simple-conversions')

console.log(convert.InToFT(12)) // 12 = amount of inches
```
Output: 1
```js
var convert = require('simple-conversions')

console.log(convert.FtToIN(1)) // 1 = amount of feet
```
Output: 12
```js
var convert = require('simple-conversions')

console.log(convert.CmToFT(30.48)) // 30.48 = amount of centimeters
```
Output: 1
```js
var convert = require('simple-conversions')

console.log(convert.FtToCM(1)) // 1 = amount of feet
```
Output: 30.48
# Per-Hour measurements
```js
var convert = require('simple-conversions')

console.log(convert.MphToKPH(1)) // 1 = amount of miles per hour
```
Output: 1.609344
```js
var convert = require('simple-conversions')

console.log(convert.KphToMPH(1)) // 1 = amount of kilometers per hour
```
Output: 0.621371192237334
```js
var convert = require('simple-conversions')

console.log(convert.KphToKT(1)) // 1 = amount of kilometers per hour
```
Output: 1.852
```js
var convert = require('simple-conversions')

console.log(convert.MphToKT(1)) // 1 = amount of miles per hour
```
Output: 0.8688097306689835
```js
var convert = require('simple-conversions')

console.log(convert.KtToMPH(1)) // 1 = amount of knots
```
Output: 1.151
```js
var convert = require('simple-conversions')

console.log(convert.KtToKPH(1)) // 1 = amount of knots
```
Output: 0.5399568034557235
# Temperatures
```js
var convert = require('simple-conversions')

console.log(convert.FtoC(32)) // 32 = fahrenheit value
```
Output: 0
```js
var convert = require('simple-conversions')

console.log(convert.CtoF(0)) // 0 = celsius value
```
Output: 32
```js
var convert = require('simple-conversions')

console.log(convert.FtoK(32)) // 32 = fahrenheit value (to kelvin)
```
Output: 273.15
```js
var convert = require('simple-conversions')

console.log(convert.CtoK(0)) // 0 = celsius value (to kelvin)
```
Output: 273.15
```js
var convert = require('simple-conversions')

console.log(convert.KtoF(273.15)) // 273.15 = kelvin value
```
Output: 32
```js
var convert = require('simple-conversions')

console.log(convert.KtoC(273.15)) // 273.15 = kelvin value
```
Output: 0

# Repository
[GitHub](https://github.com/InterplexSoftworks/simple-conversions)<br>
[GitHub/Bugs](https://github.com/InterplexSoftworks/simple-conversions/issues)<br>
[GitHub/README](https://github.com/InterplexSoftworks/simple-conversions#readme)<br>
[NPM Package](https://npm.im/simple-conversions)<br>
[Run on RunKit](https://npm.runkit.com/simple-conversions)<br>


Thanks for looking at!