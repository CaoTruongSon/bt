let peopleArray = [ 
    { name: "John Doe", age: 30, address: "123 Main St, City", hobbies: ["Đọc sách", "Du lịch"] },
    { name: "Jane Smith", age: 25, address: "456 Park Ave, Town", hobbies: ["Nấu ăn", "Chơi piano"] }, 
    { name: "Bob Johnson", age: 40, address: "789 Broadway, Village", hobbies: ["Đi bộ", "Xem phim"] } 
    ];  
var div = document.querySelectorAll("div"); 
div[10].classList.add("add1"); 
var tbody = document.createElement("tbody");
var output = document.getElementById("output");
output.append(tbody);
function out0(){
peopleArray.forEach(function(item){
    var tr = document.createElement("tr");
    tbody.append(tr);
    for (i in item){
        var td = document.createElement("td");
        td.textContent = item[i];
        tr.append(td);
    }
    var editbutton = document.createElement("button");
    editbutton.textContent = "editPerson";
    tr.append(editbutton);
    editbutton.style.marginTop = "8px";
    editbutton.style.marginLeft = "14px";
    editbutton.addEventListener("click", function(){
        out2(item);
    })

    var deletePerson = document.createElement("button");
    deletePerson.textContent = "deletePerson";
    tr.append(deletePerson);
    deletePerson.style.marginTop = "8px";
    deletePerson.addEventListener("click", function(){
        out5(item);
        div[10].classList.add("add1"); 
    })
});
}
out0();
var input = document.querySelectorAll("input");
function out1(){
    let new2 = input[3].value.split(",");
    let a = new2[0];
    let b = new2[1];
    tbody.innerHTML = "";
    let newarr = [
        { name: input[0].value, age: input[1].value, address: input[2].value, hobbies: [a,b] },
    ];
    for (var i = 0; i < newarr.length;i ++){
    peopleArray.push(newarr[i]);
    }
    out0();
}
var save;
function out2(item){
    div[10].classList.remove("add1");
    save = item;
}

function out3(){
    div[10].classList.add("add1");
}

function out4(){
    let new2 = input[7].value.split(",");
    let a = new2[0];
    let b = new2[1];
    tbody.innerHTML = "";
    let index = peopleArray.indexOf(save);
    let newarr =
        { name: input[4].value, age: input[5].value, address: input[6].value, hobbies: [a,b] };
    peopleArray.splice(index, 1, newarr);
    div[10].classList.add("add1");
    out0();
}

function out5(item){
    tbody.innerHTML = "";
    let index = peopleArray.indexOf(item);
    
    peopleArray.splice(index, 1);
    out0();
}

function out6(){
    div[10].classList.add("add1"); 
}


