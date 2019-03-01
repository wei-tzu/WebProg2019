var buttom = document.getElementsByClassName("image-viewer__button");
var pic_list = ["images/pizza01.jpg",
				"https://img.ltn.com.tw/Upload/liveNews/BigPic/600_phpgq6M03.jpg",
				"https://www.teepr.com/wp-content/uploads/2016/04/1958327_1075777115812542_6368173901134153648_n.jpg",
				"https://imgur.dcard.tw/fazmAG7.jpg",
				"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRD95BZdXeewfob59XGIt4PFX-XYfJBGu3DksGYq8nm2y4m12fjNQ",
				"https://www.51r.cn/thumbs/379/379994.jpg",
				]
var current = 0
buttom[1].addEventListener("click",next_pic);
buttom[0].addEventListener("click",back_pic);
disable = false;

function next_pic(){
	if (current < pic_list.length - 1){
		current ++;
		document.getElementById("display").src = "images/loading.gif";
		document.getElementById("display").src = pic_list[current];
		document.getElementById("source").innerHTML = pic_list[current];
		if(disable == true){
			document.getElementsByClassName("disabled")[0].classList.remove("disabled");
			disabled = false;
		}
	}
	else{
		this.classList.add("disabled");
		disable = true;
	}
} 
function back_pic(){
	if (current > 0){
		current--;
		document.getElementById("display").src = "images/loading.gif";
		document.getElementById("display").src = pic_list[current];
		document.getElementById("source").innerHTML = pic_list[current];
		if(disable == true){
			document.getElementsByClassName("disabled")[0].classList.remove("disabled");
			disabled = false;
		}
	}
	else{
		this.classList.add("disabled");
		disable = true;
	}
	
}




