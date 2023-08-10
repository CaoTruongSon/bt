let peopleArray = [ 
    { name: "John Doe", age: 30, address: "123 Main St, City", hobbies: ["Đọc sách", "Du lịch"] }, { name: "Jane Smith", age: 25, address: "456 Park Ave, Town", hobbies: ["Nấu ăn", "Chơi piano"] }, 
    { name: "Bob Johnson", age: 40, address: "789 Broadway, Village", hobbies: ["Đi bộ", "Xem phim"] } 
    ];

const table = document.querySelectorAll("table");
function renderHTML(){
    const datab = `
    <thead>
		<th>Tên</th> 
		<th>Tuổi</th> 
		<th>Địa chỉ</th> 
		<th>Sở thích</th>
        <th>Chỉnh sửa</th>
    </thead>
    <tbody>
        ${peopleArray.map(function(item, index){
            return`
            <tr>
            <td>${item.name}</td>
            <td>${item.age}</td>
            <td>${item.address}</td>
            <td>${item.hobbies.join(", ")}</td>
            <td>
            <button
            type = "button"
            class = "btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            onclick = "onpenModalEdit(${index})"
            >
            Edit
            </button>
            <button type = "button" class = "btn btn-primary" onclick="deleteFunction(${index})">Delete</button>
            </td>
            </tr>`;

        }).join("")}
        </tbody>
`;
    table[0].innerHTML = datab;
}

const name = document.getElementById("name");
const age = document.getElementById("age");
const address = document.getElementById("address");
const hobbies = document.getElementById("hobbies");
let indexEdit;

function saveFunction(){
    const newdata= {
    name: name.value,
    age: age.value,
    address: address.value,
    hobbies: [hobbies.value],
};
//indexEdit đặt trong if thì nó có điều kiện là các số khác 0
if (indexEdit === 0 || indexEdit){
    peopleArray[indexEdit] = newdata;
}
else{
peopleArray.push(newdata);
}
renderHTML();
const close = document.getElementById("close");
close.click();
}

function openModelAdd(){
    indexEdit = -1;
    name.value = "";
    age.value= "";
    address.value= "";
    hobbies.value= "";
}

function onpenModalEdit(index){
    indexEdit = index;
    name.value = peopleArray[index].name;
    age.value = peopleArray[index].age;
    address.value = peopleArray[index].address;
    hobbies.value = peopleArray[index].hobbies.join(", ");
    console.log(index);
}

function deleteFunction(index){
    peopleArray.splice(index, 1);
    renderHTML();
}

renderHTML();