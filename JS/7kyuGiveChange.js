//7kyu give change
function giveChange(amount) {
    v100 = (Math.trunc(amount / 100))
    amountRemain = (amount - (v100*100))
    v50 = (Math.trunc(amountRemain / 50))
    amountRemain = (amountRemain - (v50*50))
    v20 = (Math.trunc(amountRemain / 20))
    amountRemain = (amountRemain - (v20*20))
    v10 = (Math.trunc(amountRemain / 10))
    amountRemain = (amountRemain - (v10*10))
    v5 = (Math.trunc(amountRemain / 5))
    amountRemain = (amountRemain - (v5*5))
    v1 = (Math.trunc(amountRemain / 1))
    amountRemain = (amountRemain - (v1*1))
    changeArr = [v1,v5,v10,v20,v50,v100];
    return changeArr
  }
  //this could 100% be made smaller and more complex, but it works.
  //test giveChange(365) should output [0,1,1,0,1,3]