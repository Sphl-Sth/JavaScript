function addTask(){

    //getting input from field
    var task = document.getElementById("task").value;
    
    //create a new list item
    var listItem = document.createElement("li");
    listItem.appendChild(document.createTextNode(task));
    
    
    document.getElementById("list").appendChild(listItem);
    
        //to clear the input
        document.getElementById("task").value = ""; 
    
    }

function delTask(){
    document.getElementById("list").innerHTML = "";
}
    
    