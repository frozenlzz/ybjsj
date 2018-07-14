
// 引入base64、md5
import md5 from 'js-md5'
let Base64 = require('js-base64').Base64
function jsonData(simpleObject){
    // 将数据转json字符串
		let jsonData = JSON.stringify(simpleObject)
		console.log(jsonData)
		// jsonData加密
		let encode = Base64.encode(jsonData)
		console.log(encode)
		// base64加密的数据
		let object = encode
		// md5加密的 （加密数据 + 本地存的随机码）
		let sign = md5.hex(encode + localStorage.randomKey)
		const data = {
			object,
			sign
		}
		let jsonData1 = JSON.stringify(data)
		return jsonData1
}
export {jsonData}
