const woodCalculate = (chairQuantity, tableQuantity, bedQuantity) => {
    let chairWood = 3;
    let tableWood = 10;
    let bedWood = 50;

    let totalChairWood = chairWood * chairQuantity;
    let totalTableWood = tableWood * tableQuantity;
    let totalBedWood = bedWood * bedQuantity;

    let totalWood = totalChairWood + totalTableWood + totalBedWood;
    return totalWood;
}

let totalWood = woodCalculate(3, 2, 3);
console.log(`Total Wood Need: ${totalWood} CFT`);