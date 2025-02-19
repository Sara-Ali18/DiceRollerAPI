const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/roll', (req, res) => {
    const diceRoll = Math.floor(Math.random() * 6) + 1;
    res.json({ roll: diceRoll });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
