var RegForm=document.querySelector("#productForm");
var NameInput=document.querySelector("#name");
var DesInput=document.querySelector("#description");
var PriceInput=document.querySelector("#price");
var users=[];
RegForm.onsubmit = function(R){
    R.preventDefault();
    var user={
        name: NameInput.value,
        description: DesInput.value,
        price: PriceInput.value
    }

    users.push(user);
    console.log(users);
    PrintData();

}
function PrintData() {
    var Data = "";
    for (var i = 0; i < users.length; i++) {
        Data += `<tr>
            <td>${users[i].name}</td>
            <td>${users[i].description}</td>
            <td>${users[i].price}</td>
        </tr>`;
    }
    document.querySelector(".BodyT").innerHTML = Data;
}