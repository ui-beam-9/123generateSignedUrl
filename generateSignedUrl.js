// 导入crypto模块用于计算MD5哈希
const crypto = require('crypto');

// 定义变量
const url = 'https://vip.123pan.cn';
// 123云盘的链接，可以换成自己的自定义域名
const uid = 123456789;
// 123云盘的UID
const path = 'image/icon/Plex_A.png';
// 123云盘的图片路径，这里默认是icon目录，改成自己的目录
const timestamp = 8299472400;
// 123云盘的链接签名有效期时间戳，这里默认时间到2233-01-01 01:00:00，建议修改
const rand = Math.floor(Math.random() * 1000000);
// 生成一个随机数
const authKey = 'e3f0e2c67';
// 123云盘的鉴权密钥

// 计算md5hash
const md5Hash = crypto.createHash('md5').update(`/${uid}/${path}-${timestamp}-${rand}-${uid}-${authKey}`).digest('hex');

// 构建完整的URL
const fullUrl = `${url}/${uid}/${path}?auth_key=${timestamp}-${rand}-${uid}-${md5Hash}`;

console.log(fullUrl);

// 运行此脚本以查看结果