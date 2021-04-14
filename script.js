// CREATE a REQUEST INSTANCE
var req = new XMLHttpRequest();
//initate a connection or create a connection
req.open('GET','https://restcountries.eu/rest/v2/all',true);
//sending the request
req.send();
//load the function
//this function will be triggered only when  the data has been received  successfully;
req.onload=function(){
var data=JSON.parse(this.response);
console.log(data);
}