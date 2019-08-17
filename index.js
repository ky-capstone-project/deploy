const PORT = process.env.PORT || 5000;
const path = require('path');
const express = require('express');
const app = express();

app.listen(PORT, () => {console.log('deployed')})

app.use(express.static(path.join(__dirname, './', 'public')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public', 'index.html'));
});