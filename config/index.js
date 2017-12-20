var configValues = require("./config");
module.exports = {
	getDbConnectionString:function(){
		return `mongodb://${configValues.username}:${configValues.password}@ds159866.mlab.com:59866/nodeapp`;
	}
}