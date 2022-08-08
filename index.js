exports.MilesToKM = function(num) {
    var errors = `A number wasn't provided.`
    var KM = 1.61
    var MI = num
    const answer = num * KM
    if(isNaN(answer)) return errors;
    const finish =  `${answer}`
        return finish
        }

exports.InToCM = function(num) {
    var errors = `A number wasn't provided.`
    var cm = 2.54
    var inc = num
    const answer = inc * cm
    if(isNaN(answer)) return errors;
    const finish =  `${answer}`
        return finish
        }
        
exports.InToFT = function(num) {
    var errors = `A number wasn't provided.`
    var ft = 12
    var inc = num
    const answer = inc / ft
    if(isNaN(answer)) return errors;
    const finish =  `${answer}`
        return finish
        }

exports.FtToIN = function(num, num2) { // How it works: <function>.FtToIN(5, 1) . answer = 61
    var errors = `A number wasn't provided.`
    var inc = 12
    var ft1 = num
    var ft2 = num2
    if(isNaN(ft1)) return errors;
    if(isNaN(ft2)) return errors;
    const answerTest1 = ft1 * inc
    const answer = answerTest1 + ft2
    if(isNaN(answer)) return errors;
    const finish =  `${answer}`
        return finish
        }

exports.CmToFT = function(num) {
    var errors = `A number wasn't provided.`
    var inc = 2.54
    var ft = 12
    var cm = num
    const answer = cm / inc / ft
    if(isNaN(answer)) return errors;
    const finish =  `${answer}`
        return finish
        }

exports.FtToCM = function(num, num2) { // How it works: <function>.FtToCM(5, 4) . answer = 162.56
    var errors = `A number wasn't provided.`
    var inc = 12
    var cm = 2.54
    var ft1 = num
    var ft2 = num2
    if(isNaN(ft1)) return errors;
    if(isNaN(ft2)) return errors;
    const answerTest1 = ft1 * inc
    const answer = (answerTest1 + ft2) * cm
    if(isNaN(answer)) return errors;
    const finish =  `${answer}`
        return finish
        }

exports.FtoC = function(num) {
    var errors = `A temperature wasn't provided.`
    var sub = 32
    var mb = 0.5556
    var f = num
    if(isNaN(f)) return errors;
    const answerTest1 = f - sub
    const answer = (answerTest1) * mb
    if(isNaN(answer)) return errors;
    const finish =  `${answer}`
        return finish
        }
        
exports.CtoF = function(num) {
    var errors = `A temperature wasn't provided.`
    var addt = 32
    var mb = 1.8
    var c = num
    if(isNaN(c)) return errors;
    const answerTest1 = c * mb
    const answer = (answerTest1) + addt
    if(isNaN(answer)) return errors;
    const finish =  `${answer}`
        return finish
        }

exports.MphToKPH = function(num) {
    var errors = `A value wasn't provided.`
    var mb = 1.609344
    var mph = num
    if(isNaN(mph)) return errors;
    const answer = mph * mb
    if(isNaN(answer)) return errors;
    const finish =  `${answer}`
        return finish
        }

exports.KphToMPH = function(num) {
    var errors = `A value wasn't provided.`
    var dividee = 1.609344
    var kph = num
    if(isNaN(kph)) return errors;
    const answer = kph / dividee
    if(isNaN(answer)) return errors;
    const finish =  `${answer}`
        return finish
        }

exports.MphToKT = function(num) {
    var errors = `A value wasn't provided.`
    var dividee = 1.151
    var mph = num
    if(isNaN(mph)) return errors;
    const answer = mph / dividee
    if(isNaN(answer)) return errors;
    const finish =  `${answer}`
        return finish
        }

exports.KphToKT = function(num) {
    var errors = `A value wasn't provided.`
    var mb = 1.852
    var kph = num
    if(isNaN(kph)) return errors;
    const answer = kph * mb
    if(isNaN(answer)) return errors;
    const finish =  `${answer}`
        return finish
        }

exports.KtToMPH = function(num) {
    var errors = `A value wasn't provided.`
    var mb = 1.151
    var kt = num
    if(isNaN(kt)) return errors;
    const answer = kt * mb
    if(isNaN(answer)) return errors;
    const finish =  `${answer}`
        return finish
        }

exports.KtToKPH = function(num) {
    var errors = `A value wasn't provided.`
    var dividee = 1.852
    var kt = num
    if(isNaN(kt)) return errors;
    const answer = kt / dividee
    if(isNaN(answer)) return errors;
    const finish =  `${answer}`
        return finish
        }

exports.CtoK = function(num) {
    var errors = `A temperature wasn't provided.`
    var addt = 273.15
    var c = num
    if(isNaN(c)) return errors;
    const answer = c + addt
    if(isNaN(answer)) return errors;
    const finish =  `${answer}`
        return finish
        }

exports.FtoK = function(num) {
    var errors = `A temperature wasn't provided.`
    var addt = 273.15
    var sub = 32
    var dividee = 0.5556
    var f = num
    if(isNaN(f)) return errors;
    const answerTest1 = f - sub
    const answerTest2 = answerTest1 / dividee
    const answer =  answerTest2 + addt
    if(isNaN(answer)) return errors;
    const finish =  `${answer}`
        return finish
        }

exports.KtoC = function(num) {
    var errors = `A temperature wasn't provided.`
    var sub = 273.15
    var k = num
    if(isNaN(k)) return errors;
    const answer = k - sub
    if(isNaN(answer)) return errors;
    const finish =  `${answer}`
        return finish
        }

exports.KtoF = function(num) {
    var errors = `A temperature wasn't provided.`
    var sub = 273.15
    var addt = 32
    var times = 1.8
    var k = num
    if(isNaN(k)) return errors;
    const answerTest1 = k - sub
    const answerTest2 = answerTest1 * times
    const answer =  answerTest2 + addt
    if(isNaN(answer)) return errors;
    const finish =  `${answer}`
        return finish
        }