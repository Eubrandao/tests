const sp = 67836.43
const rj = 36678.66
const mg = 29229.88
const es = 27165.48
const outros = 19849.53

const total = sp + rj + mg + es


const percentualSp = sp * 100 / total
const percentualRj = rj * 100 / total
const percentualMg= mg * 100 / total
const percentualEs = es * 100 / total
const percentualOutros = outros * 100 / total



console.log("A representação de SP foi de:" +" " + Math.round(percentualSp) + "%")
console.log("A representação de RJ foi de:" +" " + Math.round(percentualRj)  + "%")
console.log("A representação de MG foi de:" +" " + Math.round(percentualMg)  + "%")
console.log("A representação de ES foi de:" +" " + Math.round(percentualEs)  + "%")
console.log("A representação de outros estados foi de:" +" " + Math.round(percentualOutros)  + "%")
