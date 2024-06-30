class ApiResponse{
	constructor(message,dataName="data",data){
		this.status="Sucess"
		this.message=message
		this[dataName]=data
	}
}

export default ApiResponse