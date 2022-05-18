/* 
Given an array of objects / dictionaries to represent new inventory,
and an array of objects / dictionaries to represent current inventory,
update the quantities of the current inventory

if the item doesn't exist in current inventory, add it to the inventory
return the current inventory after updating it.
*/

const newInv1 = [
    { name: "Grain of Rice", quantity: 9000 },
    { name: "Peanut Butter", quantity: 50 },
    { name: "Royal Jelly", quantity: 20 },];
const currInv1 = [
    { name: "Peanut Butter", quantity: 20 },
    { name: "Grain of Rice", quantity: 1 },
];
const expected1 = [
    { name: "Peanut Butter", quantity: 70 },
    { name: "Grain of Rice", quantity: 9001 },
    { name: "Royal Jelly", quantity: 20 },];const newInv2 = [];const currInv2 = [{ name: "Peanut Butter", quantity: 20 }];const expected2 = [{ name: "Peanut Butter", quantity: 20 }];const newInv3 = [{ name: "Peanut Butter", quantity: 20 }];const currInv3 = [];const expected3 = [{ name: "Peanut Butter", quantity: 20 }];/**
   * Updates the current inventory based on the new inventory.
   * - Time: O(?).
   * - Space: O(?).
   * @typedef {Object} Inventory
   * @property {string} Inventory.name The name of the item.
   * @property {number} Inventory.quantity The quantity of the item.
   * @param {Array<Inventory>} newInv A shipment of new inventory.
   *    An array of inventory objects.
   * @param {Array<Inventory>} currInv
   * @return The currInv after being updated.
   */
function updateInventory(newInv, currInv) {
    if (newInv && !currInv) {
        return newInv
    } else if (!newInv && currInv) {
        return currInv
    } else {
        for (var i = 0; i < currInv.length; i++){
            for (var j = 0; j<newInv.length; j++){
                if (newInv[j][0]!=currInv[i][0]){
                    currInv += newInv[j];
                } else { 
                    currInv[i][quantity]+= newInv[j][quantity]
                } 
            }
        }
        return currInv
    }
}
console.log(updateInventory(newInv1, currInv1))