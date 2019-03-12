const input = document.getElementById('todo_input');
const list = document.getElementById("todo_list")
const todo_item = []

input.addEventListener("keyup", function(event) {
  if (event.keyCode === 13 ) {
  	const itemNode = Item(this.value);
  	newItem = { node: itemNode, isComplete: false};
  	todo_item.push(newItem)
  	Display(list,"all")
  }
});

function Complete(id){
	var text_id = String("text" + id)
	var check = document.getElementById(id);
	var text = document.getElementById(text_id);
	text.style['opacity'] = "0.5";
	text.style["text-decoration"] = "line-through";
	todo_item[id].isComplete = true;
	update_count()
}
function Delete(no_id){
	var id = no_id.substring(2,no_id.length)
	todo_item.splice(Number(id),1);
	Display(list,"all")
}

function Display(list,type){
	while (list.firstChild) {
    	list.removeChild(list.firstChild);
	}
	if(type == "all"){
		for(i=0; i<todo_item.length; i++){
			list.appendChild(todo_item[i].node)
		}
	}
	else if(type == "active"){
		for(i=0;i<todo_item.length;i++){
			if(todo_item[i].isComplete == false){
				list.appendChild(todo_item[i].node)
			}
		}
		
	}
	else if(type == "comp")	{
		for(i=0;i<todo_item.length;i++){
			if(todo_item[i].isComplete == true){
				list.appendChild(todo_item[i].node)
			}
		}
	}
	else if(type == "clear"){
		for(i=0;i<todo_item.length;i++){
			if(todo_item[i].isComplete == true){
				todo_item.splice(i,1);
				i = i - 1
			}

		}
		for(i=0; i<todo_item.length; i++){
			list.appendChild(todo_item[i].node)
		}
	}
	update_count()
}

function Item(text_value){
	const itemNode = document.createElement("LI");
	const text = document.createElement("H1");
	const wrapper = document.createElement("DIV");
	const checkbox = document.createElement("INPUT");
	const no = document.createElement("IMG");
	const lab = document.createElement("LABEL")
	checkbox.setAttribute("id", todo_item.length);
	checkbox.setAttribute("type","checkbox");
	checkbox.setAttribute('onclick','Complete(this.id);')
	lab.setAttribute("for",todo_item.length)
	wrapper.appendChild(checkbox);
	wrapper.appendChild(lab);
	wrapper.setAttribute("class","todo-app__checkbox")
	text.innerHTML = text_value;
	text.setAttribute("class","todo-app__item-detail")
	text.setAttribute("id","text"+todo_item.length)
	no.src = "img/x.png"
	no.setAttribute("class","todo-app__item-x")
	no.setAttribute('id',"no"+todo_item.length)
	no.setAttribute('onclick','Delete(this.id);')
	itemNode.setAttribute("class","todo-app__item")
	itemNode.appendChild(wrapper);
	itemNode.appendChild(text)
	itemNode.appendChild(no)
	return itemNode
}

function update_count(){
	todoCount = document.getElementById("todo-count");
	todoCount.innerHTML = todo_item.filter(ele => !ele.isComplete).length + " left";
}



