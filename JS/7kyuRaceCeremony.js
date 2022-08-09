function racePodium(blocks) {
    let f = Math.ceil(blocks/3)+1
   let s = f-1
   let t = blocks-(f+s)
   if(t==0){
     t=1
     s=s-1
   }
   return [s,f,t]
 }