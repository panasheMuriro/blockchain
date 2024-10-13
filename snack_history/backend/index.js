import express from 'express';
import bodyParser from 'body-parser';
const app = express();
import { Blockchain, Block } from './blockchain.js';

// initialize
let snackBlockchain = new Blockchain();

app.use(bodyParser.json());

// --- CREATE OPERATIONS---
// 1. Create Snack 

app.post('/snack', (req, res) => {
  const { snackName, user } = req.body;

  if (!snackName || !user) {
    return res.status(400).json({ error: 'Invalid request. Snack name and user are required.' });
  }

  const newSnack = {
    snack: snackName,
  };

  const newBlock = new Block(
    snackBlockchain.chain.length,
    new Date().toISOString(),
    newSnack,
    user
  );

  snackBlockchain.addBlock(newBlock);
  res.status(200).json({ message: 'Snack logged!', block: newBlock });

});

// --- READ OPERATIONS ---
// get entrire snack history
app.get('/snack-history', (req, res) => {
  res.status(200).json({ history: snackBlockchain.chain });
});

app.listen(3000, () => {
  console.log('Snack history app running on port 3000');
});
