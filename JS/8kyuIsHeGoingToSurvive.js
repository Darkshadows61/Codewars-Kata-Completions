function hero(bullets, dragons){
    if (bullets && dragons == 0) {
      return true
    } else if (bullets/dragons >= 2){
      return true
    } else {
        return false
      }
    }