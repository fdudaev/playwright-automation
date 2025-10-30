/* let prodName = ["IEL", "MDL", "ENT", "ASPP", "ASPP2000", "POP", "PUP"];
//create a loop that goes through prodName array and saves then as a separate variables 
for (let i = 0; i < prodName.length; i++) {
  let prodVar = prodName[i];
  let prodVarName = `prod_${prodVar}`;
  eval(prodVarName + " = prodName[i];");
}   
 //print the variables
 */