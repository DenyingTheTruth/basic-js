class VigenereCipheringMachine {
  constructor(mode = true) {
    this.mode = mode;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this.square = [];
  }

  generateSquare() {
    for (let i = 0; i < this.alphabet.length; i++) {
      let row = this.alphabet.slice(i);
      row += this.alphabet.slice(0, i);
      this.square.push(row);
    }
  }

  repeatKey(key, messageLength) {
    return key
      .repeat(Math.ceil(messageLength / key.length))
      .substring(0, messageLength);
  }

  encrypt(message, key) {
    if (typeof message === "undefined" || typeof key === "undefined")
      throw new Error();
    let encryptMessage = "",
      newKey = this.repeatKey(key, message.length),
      i,
      j;
    message = message.toUpperCase();
    newKey = newKey.toUpperCase();
    this.generateSquare();
    for (let m = 0; m < message.length; m++) {
      if (message[m] == " ") {
        encryptMessage += message[m];
        message = message.substring(0, m) + message.substring(m + 1);
        m--;
      } else {
        i = this.alphabet.indexOf(message[m]);
        j = this.alphabet.indexOf(newKey[m]);
        if (i !== -1 && j !== -1) {
          encryptMessage += this.square[i][j];
        } else {
          encryptMessage += message[m];
        }
      }
    }
    if (this.mode) {
      return encryptMessage;
    } else {
      return encryptMessage
        .split("")
        .reverse()
        .join("");
    }
  }
  decrypt(message, key) {
    if (typeof message === "undefined" || typeof key === "undefined")
      throw new Error();
    let decryptMessage = "",
      newKey = this.repeatKey(key, message.length),
      i,
      j;
    message = message.toUpperCase();
    newKey = newKey.toUpperCase();
    this.generateSquare();
    for (let m = 0; m < message.length; m++) {
      if (message[m] == " ") {
        decryptMessage += message[m];
        message = message.substring(0, m) + message.substring(m + 1);
        m--;
      } else {
        i = this.alphabet.indexOf(newKey[m]);
        j = this.square[i].indexOf(message[m]);
        if (i !== -1 && j !== -1) {
          decryptMessage += this.alphabet[j];
        } else {
          decryptMessage += message[m];
        }
      }
    }
    if (this.mode) {
      return decryptMessage;
    } else {
      return decryptMessage
        .split("")
        .reverse()
        .join("");
    }
  }
}

module.exports = VigenereCipheringMachine;
