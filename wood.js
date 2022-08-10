/*
fixed: per item wood requirments
--------------------------------

1. Chair --> 3 cft
2. table --> 10 cft
3. bed --> 50 cft

vary: quantity
*/

function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const totalChairWood = chairQuantity * perChairWood;
    const totalTableWood = tableQuantity * perTableWood;
    const totalBedWood = bedQuantity * perBedWood;

    const totalWood = totalChairWood + totalTableWood + totalBedWood;
    return totalWood;
}

const getTotalWood = woodCalculator(3, 2, 5);
console.log(getTotalWood);