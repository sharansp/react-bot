import axios from 'axios'

class HanaFetch {
	
	//constructor() {	}

	//baseURL = "https://sapfw.sial.com/hanadse/sial/sapnext/ewm/wm/odata/WarehouseMonitor.xsodata/WarehouseStock?&$filter=((SAPClient eq '100' and CAT eq 'F2' and MATNR eq '" + slots.ProductId + "' and LGNUM eq '" + slots.Plant + "'))&$format=json";

	

	getResponse (intentName){
		let hanaPromise = new Promise((resolve, reject) => {
		axios.get("https://sapfw.sial.com/hanadse/sial/sapnext/ewm/wm/odata/WarehouseMonitor.xsodata/WarehouseStock?$skip=0&$filter=((SAPClient eq '100' and CAT eq 'F2' and MATNR eq '234451-BULK' and LGNUM eq 'W002'))&$select=MSEHL,QUAN&$inlinecount=allpages")
              .then( (response) => {
								console.log(intentName);
								debugger
                resolve({
									intentName,
									data:response.data.d.results[0]
								});
              })
              .catch( (error) => {
								debugger
                console.log(error);
                reject(error);
							})
						});
				// hanaPromise.then(
				// 	(successMessage) => {

				// 		console.log("Yay! " + successMessage);
				// 	},
				// 	(e)=>{
				// 		console.log(e);
				// 	});
				return hanaPromise;
	}

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
		
		hanaPromise.then(
			(successMessage) => {
		  console.log("Yay! " + successMessage);
			},
			(e)=>{
				console.log(e);
			});
		return hanaPromise;
	  }
}

export default HanaFetch;