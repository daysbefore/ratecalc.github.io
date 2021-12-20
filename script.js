const AccRateInput = document.getElementById("ActualRate");
const TarRateInput = document.getElementById("TR");
const SalaryInput = document.getElementById("Salary");

AccRateInput.addEventListener("change",calc);
TarRateInput.addEventListener("change",calc);
SalaryInput.addEventListener("change",calc);
//DCostInput.addEventListener("change",calc);

function calc(){
    let ActualRate = parseFloat(AccRateInput.value);
    let TR = parseFloat(TarRateInput.value);
    let Salary = parseFloat(SalaryInput.value);
    

    AccRateInput.value = ActualRate.toFixed(2);
    TarRateInput.value = TR.toFixed(2);
    SalaryInput.value = Salary.toFixed(2);
    


    let DailyCost = parseFloat((((Salary*1.168)+(1000/15)+2000)/216).toFixed(2));
    let RateVariance = parseFloat((ActualRate-TR).toFixed(2));
    let ActualMargin = parseFloat((((ActualRate-DailyCost) / ActualRate) * 100).toFixed(2));
    let ActualRateVAT = parseFloat((ActualRate)*(1.2).toFixed(2));


    document.getElementById("RateVariance").textContent = `\£ ${RateVariance}`;
    document.getElementById("ActualMargin").textContent = `\% ${ActualMargin}`;
    document.getElementById("ActualRateVAT").textContent = `\£ ${ActualRateVAT}`;
    document.getElementById("DailyCost").textContent = `\£ ${DailyCost}`;

}