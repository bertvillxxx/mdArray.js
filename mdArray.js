const subArray1 = ["Gunevieve", "Juan", "Luna", "Gabriel", "Elise"];
const subArray2 = [24, 65, 21, 5, 9];

if (subArray1.length !== subArray2.length){
    console.error("Error: subArray1 and subArray2 must have the same length.");
    return;
}
const restructuredArray = [];
for (let i = 0; i < subArray1.length; i++){
    restructuredArray.push([subArray1[i], subArray2[i]]);
}
restructuredArray.forEach(element => console.log(element));