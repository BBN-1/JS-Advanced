class List {
    constructor() {
      this.result = [];
      this.size = this.result.length;
    }
  
    add(el) {
      this.result.push(el);
      this.result.sort((a, b) => a - b);
      this.size = this.result.length;
    }
  
    remove(index) {
      if (index < 0 || index >= this.result.length) {
        throw new Error("index is not valid");
      }
  
      this.result.splice(index, 1);
      this.size = this.result.length;
    }
  
    get(index) {
      if (index < 0 || index >= this.result.length) {
        throw new Error("index is not valid");
      }
      return this.result[index];
    }
  }