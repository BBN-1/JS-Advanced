class Stringer {
    constructor(innerString, innerLength) {
      this.innerString = innerString;
      this.innerLength = Number(innerLength);
    }
  
    increase(length) {
      this.innerLength += length;
    }
  
    decrease(length) {
      this.innerLength -= length;
      if (this.innerLength < 0) {
        this.innerLength = 0;
      }
    }
  
    toString() {
      return this.innerLength === 0
        ? "..."
        : this.innerString.slice(0, this.innerLength) + "...";
    }
  }
  