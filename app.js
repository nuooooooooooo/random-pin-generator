function randomPinGenerator() {
    let seed = new Date().getTime();
    
    while (true) {
      seed = seed * 19911 % 189140181;
      let convertFloat = String(seed / 189140181)
      convertFloat = convertFloat.split("").slice(8)
      let pinArray = []
      for (let i = 0; i < 4; i++){
        pinArray.push(convertFloat[i])
      }
      let pin = parseInt(pinArray.join(""))
      
      return pin
    }
 
}

console.log(randomPinGenerator())
