const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
class Context {
  static good = "*** good ***";
  static bad = "*** bad ***";
  static interact(validate) {
    if (validate) {
      console.log(Context.good);
    } else {
      console.log(Context.bad);
    }
  }
}

class Strategy {
  constructor(type, str) {
    this.type = type;
    this.str = str;
  }
  validate() {
    let valid = 1;
    if (this.type === "n" && !isNaN(this.str)) {
      valid = 1;
    } else if (this.type === "u" && isNaN(this.str)) {
valid = Upper.method(this.str)
    } else if (this.type === "l" && isNaN(this.str)) {
valid = Lower.method(this.str)
    } else {
      valid = 0;
    }
    Context.interact(valid);
  }
}

class Upper{
  static method(str){
    let valid = 1;
          for (let i = 0; i < str.length - 1; i++) {
        if (str[i] !== str[i].toUpperCase()) {
          valid = 0;
          break;
        }
      }
    return valid;
  }
}

class Lower{
  static method(str){
    let valid = 1
          for (let i = 0; i < str.length - 1; i++) {
        if (str[i] !== str[i].toLowerCase()) {
          valid = 0;
          break;
        }
      }
    return valid;
  }
}

rl.question("Input type (n)umber, (u)pper, (l)ower: ", (type) => {
  rl.question("Prompt: ", (string) => {
    new Strategy(type, string).validate();
    rl.close();
  });
});
