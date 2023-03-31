export default {
	myVar1: [],
	myVar2: {},
	myFun1: () => {
		//write code here
		global.echartInstance.callFunc("Echarts1", "getHeight").then(res => {
			console.log(res);
		})
	},
	myFun2: async () => {
		//use async-await or promises
	}
}