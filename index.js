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
      for (let i = 0; i < this.str.length - 1; i++) {
        if (this.str[i] !== this.str[i].toUpperCase()) {
          valid = 0;
          break;
        }
      }
    } else if (this.type === "l" && isNaN(this.str)) {
      for (let i = 0; i < this.str.length - 1; i++) {
        if (this.str[i] !== this.str[i].toLowerCase()) {
          valid = 0;
          break;
        }
      }
    } else {
      valid = 0;
    }
    Context.interact(valid);
  }
}

rl.question("Input type (n)umber, (u)pper, (l)ower: ", (type) => {
  rl.question("Prompt: ", (string) => {
    new Strategy(type, string).validate();
    rl.close();
  });
});

// new Strategy("u", "123").validate();
// new Strategy("l", "123").validate();
// new Strategy("n", "123").validate(); // good

// new Strategy("u", "asdf").validate();
// new Strategy("l", "asdf").validate(); // good
// new Strategy("n", "asdf").validate();

// new Strategy("u", "ASDF").validate(); // good
// new Strategy("l", "ASDF").validate();
// new Strategy("n", "ASDF").validate();
