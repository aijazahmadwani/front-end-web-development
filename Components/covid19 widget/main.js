indiaURL = "https://api.covid19india.org/state_district_wise.json";
let totalCasesIndia = 0, totalDeathsIndia = 0, totalRecoveredIndia = 0, totalActiveIndia = 0;
// SELECT INDIA STATS ELEMENTS
const totalCases = document.getElementById("totalCases");
const totalRecovered = document.getElementById("totalRecovered");
const totalDeaths = document.getElementById("totalDeaths");
const totalActive = document.getElementById("totalActive");

// SELECT JK STATS ELEMENTS
const totalCasesJK = document.getElementById("totalCasesJK");
const totalRecoveredJK = document.getElementById("totalRecoveredJK");
const totalDeathsJK = document.getElementById("totalDeathsJK");
const totalActiveJK = document.getElementById("totalActiveJK");



async function getData() {
    const a = await fetch(indiaURL);
    const res = await (a.json());
    return res;
}
getData().then(res => {
    keys = Object.keys(res);
    // console.log(keys);
    for (i = 1; i < keys.length; i++) {
        let active = [],
            confirmed = [],
            recovered = [],
            deceased = [];

        if (res[keys[i]].statecode === "JK") {
            let jkTotalCases = [],
                jkTotalRecovered = [],
                jkTotalDeaths = [],
                jkTotalActive = [];
            let jk = res[keys[i]];
            for (let key of Object.keys(jk.districtData)) {
                jkTotalActive.push(jk.districtData[key].active);
                jkTotalCases.push(jk.districtData[key].confirmed);
                jkTotalRecovered.push(jk.districtData[key].recovered);
                jkTotalDeaths.push(jk.districtData[key].deceased);
            }

            // Getting sum of numbers
            var activeSumJK = jkTotalActive.reduce(function (a, b) {
                return a + b;
            }, 0);
            var confirmedSumJK = jkTotalCases.reduce(function (a, b) {
                return a + b;
            }, 0);
            var recoveredSumJK = jkTotalRecovered.reduce(function (a, b) {
                return a + b;
            }, 0);
            var deceasedSumJK = jkTotalDeaths.reduce(function (a, b) {
                return a + b;
            }, 0);
            totalCasesJK.innerHTML += confirmedSumJK;
            totalRecoveredJK.innerHTML += recoveredSumJK;
            totalDeathsJK.innerHTML += deceasedSumJK;
            totalActiveJK.innerHTML += activeSumJK;
        }
        for (let key of Object.keys(res[keys[i]].districtData)) {
            active.push(res[keys[i]].districtData[key].active);
            confirmed.push(res[keys[i]].districtData[key].confirmed);
            recovered.push(res[keys[i]].districtData[key].recovered);
            deceased.push(res[keys[i]].districtData[key].deceased);
        }
        // Getting sum of numbers
        var activeSum = active.reduce(function (a, b) {
            return a + b;
        }, 0);
        var confirmedSum = confirmed.reduce(function (a, b) {
            return a + b;
        }, 0);
        var recoveredSum = recovered.reduce(function (a, b) {
            return a + b;
        }, 0);
        var deceasedSum = deceased.reduce(function (a, b) {
            return a + b;
        }, 0);
        totalCasesIndia += confirmedSum;
        totalDeathsIndia += deceasedSum;
        totalRecoveredIndia += recoveredSum;
        totalActiveIndia += activeSum;
    }
    totalCases.innerHTML += totalCasesIndia;
    totalRecovered.innerHTML += totalRecoveredIndia;
    totalDeaths.innerHTML += totalDeathsIndia;
    totalActive.innerHTML += totalActiveIndia;
}).catch(error => {
    console.log(error)
});
