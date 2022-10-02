class Hex {
    constructor(value) {
      this.value = value;
    }
  
    valueOf() {
      return this.value;
    }
  
    toString() {
      return `0x${(this.value.toString(16)).toUpperCase()}`;
    }
  
    plus(input) {
      if (input === "object") {
          let result = this.value + input.value
          return new Hex(result)
  
      } else {
          let result = this.value + input
          return new Hex(result)
      }
    }
  
    minus(input) {
      if (input === "object") {
          let result = this.value - input.value
          return new Hex(result)
  
      } else {
          let result = this.value - input
          return new Hex(result)
      }
    }
  
    parse(input) {
      return parseInt(input, 16);
    }
  }