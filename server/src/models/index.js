const mongoose = require('mongoose');
const bulk = require('bulk-require');
const dbConfig = require('../config').db;

const mongooseConnection = mongoose.connect(`${dbConfig.username}:${dbConfig.password}@${dbConfig.host}:${dbConfig.port}/${dbConfig.database}`);

const models = bulk(__dirname, ['./!(*index).js']); // 路由配置文件的集合, 忽略 index.js
const db = { mongooseConnection };

// 加载 model
Object.keys(models).forEach((item) => {
  db[item] = mongoose.model(item, new mongoose.Schema(models[item].default));
});

module.exports = db;
