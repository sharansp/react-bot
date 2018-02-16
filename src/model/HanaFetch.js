import axios from 'axios'
// import {getOutputMsg,getHanaUrl,constHanaUrl} from './HanaFetch';


export default function getHanaResponse(intentName,hanaUrl){
	let hanaPromise = new Promise((resolve, reject) => {
		debugger
		let url = hanaUrl //|| constHanaUrl(intentName);
	axios.get(url)
			 .then((response) => {
							resolve({
								intentName,
								data:response.data.d.results[0]
							});
						})
						.catch( (error) => {
							console.log(error);
							reject(error);
						})
					});
			return hanaPromise;
}

export function getOutputMsg(iName,dataVal){
		return `The Stock Available is ${dataVal.QUAN} ${dataVal.MSEHL}`
	}

export function getHanaUrl(data){
	debugger;
	let url=false;
	switch(data.result.metadata.intentName){
		case  'StockAvailability': 
			url=`https://sapfw.sial.com/hanadse/sial/sapnext/ewm/wm/odata/WarehouseMonitor.xsodata/WarehouseStock?$skip=0&$filter=((SAPClient eq '100' and CAT eq 'F2' and MATNR eq '234451-BULK' and LGNUM eq 'W002'))&$select=MSEHL,QUAN&$inlinecount=allpages`;
			
		break;

		case  'ListPrice': 
			url=`https://sapfw.sial.com/hanadse/sial/sapnext/ewm/wm/odata/WarehouseMonitor.xsodata/WarehouseStock?$skip=0&$filter=((SAPClient eq '100' and CAT eq 'F2' and MATNR eq '234451-BULK' and LGNUM eq 'W002'))&$select=MSEHL,QUAN&$inlinecount=allpages`;
		break;

		case  'OrderStatus': 
			url=`https://sapfw.sial.com/hanadse/sial/sapnext/ewm/wm/odata/WarehouseMonitor.xsodata/WarehouseStock?$skip=0&$filter=((SAPClient eq '100' and CAT eq 'F2' and MATNR eq '234451-BULK' and LGNUM eq 'W002'))&$select=MSEHL,QUAN&$inlinecount=allpages`;
		break;

		}
		return url;	
}
class HanaFetch {
	
	constructor() {	}

	//baseURL = "https://sapfw.sial.com/hanadse/sial/sapnext/ewm/wm/odata/WarehouseMonitor.xsodata/WarehouseStock?&$filter=((SAPClient eq '100' and CAT eq 'F2' and MATNR eq '" + slots.ProductId + "' and LGNUM eq '" + slots.Plant + "'))&$format=json";

	

	

	getHanaresponse(){
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

// export default getHanaResponse;