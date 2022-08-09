//8kyu remove string spaces
function noSpace(x) {
    return x.split(' ').filter(x => x.length>0).join('')
  }
  
  //test noSpace('8 j 8   mBliB8g  imjB8B8  jl  B')