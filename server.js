// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB 연결
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ MongoDB 연결 성공'))
.catch((err) => console.error('❌ MongoDB 연결 실패:', err));

// 기본 API
app.get('/', (req, res) => {
  res.send('서버 작동 중입니다!');
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`🚀 서버가 포트 ${PORT}에서 실행 중입니다`);
});
