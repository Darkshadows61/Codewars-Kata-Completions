const isValid=s=>{
    let result=[]
    let par={
      ')':'(',
      ']':'[',
      '}':'{'
    }
    for(let i=0;i<s.length;i++){
      let item=s[i]
      if(par[item]===undefined){
        result.push(item)
      }
      else{
        if(par[item]===result[result.length-1])result.pop()
        else return false
      }
    }
    return (!result.length)
  }