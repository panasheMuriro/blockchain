import crypto from 'crypto';

export class Block {
  constructor(index, timestamp, snack, user, previousHash = "") {
    this.index = index;
    this.timestamp = timestamp;
    this.snack = snack;
    this.user = user;
    this.previousHash = previousHash;
    this.hash = this.calculateHash();
  }

  calculateHash() {
    return crypto
      .createHash("sha256")
      .update(
        this.index +
          this.previousHash +
          this.timestamp +
          JSON.stringify(this.snack) +
          this.user
      )
      .digest("hex");
  }
}

export class Blockchain {
  constructor() {
    let firstBlock = this.createFirstBlock();
    this.chain = [firstBlock];
  }

  createFirstBlock() {
    return new Block(
      0,
      new Date().toISOString(),
      "First Snack",
      "System Autogenerated",
      "0"
    );
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(newBlock) {
    newBlock.previousHash = this.getLatestBlock().hash;
    newBlock.hash = newBlock.calculateHash();
    this.chain.push(newBlock);
  }

  isChainValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];

      if (currentBlock.hash !== currentBlock.calculateHash()) {
        return false;
      }

      if (currentBlock.previousHash !== previousBlock.hash) {
        return false;
      }
    }
    return true;
  }
}
