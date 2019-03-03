var myImages = ["http://dl.stickershop.line.naver.jp/products/0/0/1/1140900/android/stickers/5747056.png","http://dl.stickershop.line.naver.jp/products/0/0/1/1140900/android/stickers/5747076.png","http://dl.stickershop.line.naver.jp/products/0/0/1/1140900/android/stickers/5747067.png","http://dl.stickershop.line.naver.jp/products/0/0/1/1140900/android/stickers/5747075.png"] ;
// four pictures 


function previousImage() {
	var currentPicture = document.getElementById("display") ;
	var nameOfPicture = currentPicture.src ;
	var pictureCurrentPosition = myImages.indexOf(nameOfPicture) ;
	if( pictureCurrentPosition != 0 ){
		currentPicture.src = myImages[pictureCurrentPosition - 1] ;
		var sourceOfPicture = document.getElementById("sourceOfPicture") ;	
		sourceOfPicture.href = currentPicture.src ;
		sourceOfPicture.innerHTML = "source:" + currentPicture.src ;
		if( pictureCurrentPosition == 1 ){
			var previousBotton = document.getElementById("previous").classList.add("disabled") ;
		}
		else if ( pictureCurrentPosition == ( myImages.length - 1 ) ){
			var nextBotton = document.getElementById("next").classList.remove("disabled") ;
		}

	}
}


function nextImage() {
	var currentPicture = document.getElementById("display") ;
	var nameOfPicture = currentPicture.src ;
	var pictureCurrentPosition = myImages.indexOf(nameOfPicture) ;
	if( pictureCurrentPosition != ( myImages.length - 1 )){
		currentPicture.src = myImages[pictureCurrentPosition + 1] ;
		var sourceOfPicture = document.getElementById("sourceOfPicture") ;	
		sourceOfPicture.href = currentPicture.src ;
		sourceOfPicture.innerHTML = "source:" + currentPicture.src ;
		if( pictureCurrentPosition == ( myImages.length - 2 ) ){
			var nextBotton = document.getElementById("next").classList.add("disabled") ;
		}
		else if ( pictureCurrentPosition == 0 ){
			var previousBotton = document.getElementById("previous").classList.remove("disabled") ;
		}
	}
}

