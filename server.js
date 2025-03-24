const express = require('express');
const app = express();
const PORT = 8000;

// 開放 public 資料夾（或你放 index.html 的路徑）
app.use(express.static(__dirname + '/public'));

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
