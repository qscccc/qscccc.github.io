window.onload = getMyLocation;

function getMyLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(displayLocation, displayError);	
	}else{
		alert("Oops, no getlocation support");
	}
}

function displayLocation(position) {
	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;
	
	var div = document.getElementById("location");
	div.innerHTML = "Your are at latitude: " + latitude +", Longitude: " + longitude;	
}

function displayError(error){
	var errorType = {
		0: "Unknown error",
		1: "permission denied by user", 
		2: "Position is not available ", 
		3: "Request timed out"
	};
	var errorMessage = errorType[error.code];
	if (error.code == 0 || error.code ==2){
		errorMessage = errorMessage + " " + error.message;
	}
	var div = document.getElementById("location");
	div.innerHTML = errorMessage;
}
