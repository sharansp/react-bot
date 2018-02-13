class HanaFetch {
	
	constructor() {	}

	getHanaresponse(){
		debugger;
		let hanaPromise = new Promise((resolve, reject) => {
		  fetch("https://facebook.github.io/react-native/docs/network.html")
		  .then(res => {
			resolve(res);
			//res.json()
		  })
		  .then(
			(result) => {
			  resolve(result);
			},
			(error) => {
			  reject(error);
			}
		  )
		});
		
		hanaPromise.then((successMessage) => {
		  console.log("Yay! " + successMessage);
		}, (e)=>{console.log(e)});
		return hanaPromise;
	  }
}

export default HanaFetch;