const express = require('express');

const PORT = 3000;
const app = express();
const path = require('path');


// statically serve everything in the build folder on the route '/build'
app.use('/dist', express.static(path.join(__dirname, '../dist')));


app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../src/index.html'));
});


app.listen(PORT, () => console.log(`The server is listening on PORT ${PORT}`));
