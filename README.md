# 123云盘鉴权直链生成 JavaScript 代码示例
## 1. 描述
### 1.1 功能说明
本代码用于123云盘自动鉴权，鉴权成功后返回直链

### 1.2 使用说明
首先需要安装所需要的依赖
```SHELL
npm install crypto-js
```
然后直接运行代码即可
```
node generateSignedUrl.js
```
### 1.3 参数说明
* 以下参数均来源于官方文档：https://www.123pan.com/faq?problem=dev_guide



| 参数名 | 必填 | 示例 | 说明 |
| --- | --- | --- | --- |
| url | 是 | https://vip.123pan.cn | 123云盘链接，可以换成自己的自定义域名，注意后面不要带"/" |
| uid | 是 | 123456789 | 123云盘UID |
| path | 是 | image/icon/123.png | 123云盘的文件路径，这里默认是icon目录，改成自己的目录文件路径，注意前后不要带"/" |
| timestamp | 是 | 8299472400 | 123云盘的链接签名有效期时间戳，这里默认时间到2233-01-01 01:00:00，建议修改 |
| rand | 是 | 316691 | 自动生成随机数 |
| authKey | 是 | e3f0e2c67 | 123云盘的鉴权密钥 |
| md5Hash | 是 | /123456789/image/icon/image/icon/123.png-8299472400-316691-123456789-e3f0e2c67 | md5函数，使用32位小写 |

![官方参数说明](https://mirror.ghproxy.com/https://github.com/ui-beam-9/123generateSignedUrl/image/123-sign.png)
### 1.4 最终效果
* 运行效果

![运行效果]([/image/123-sign-ok.png](https://mirror.ghproxy.com/https://github.com/ui-beam-9/123generateSignedUrl/image/123-sign-ok.png)

* 鉴权后URL
```
https://vip.123pan.cn/123456789/image/icon/Plex_A.png?auth_key=8299472400-196658-123456789-8ab32c2e45dce726416f9947a752d456
```
## 此代码仅做个人学习使用，如有侵权，请联系我删除


