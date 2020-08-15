
var productNameInput = document.getElementById("productNameInput");
var productPriceInput = document.getElementById("productPriceInput");
var productCategoryInput = document.getElementById("productCategoryInput");
var productDescriptionInput = document.getElementById("productDescriptionInput");

var searchInput = document.getElementById("searchInput");

var productList;



if (localStorage.getItem("ourProducts") == null) {
    productList = [];
}
else {
    productList = JSON.parse(localStorage.getItem("ourProducts"));
    displayProduct(productList);
}
function addProduct() {
    var product = {
        name: productNameInput.value,
        price: productPriceInput.value,
        category: productCategoryInput.value,
        desc: productDescriptionInput.value
    };
    productList.push(product);

    localStorage.setItem("ourProducts", JSON.stringify(productList));
    displayProduct(productList);
    clearForm();

}

function displayProduct(anyArray) {
    var cartoona = "";
    for (var i = 0; i < anyArray.length; i++) {
        cartoona += `<tr>
        <td>${i}</td>
        <td>${anyArray[i].name}</td>
        <td>${anyArray[i].price}</td>
        <td>${anyArray[i].category}</td>
        <td>${anyArray[i].desc}</td>
        <td><button class="btn btn-warning">Update</button></td>
        <td><button onclick="deletProduct(${i})" class="btn btn-danger">Delete</button></td>
        </tr>`;
    }
    document.getElementById("table-body").innerHTML = cartoona;
}

function clearForm() {
    productNameInput.value = "";
    productPriceInput.value = "";
    productCategoryInput.value = "";
    productDescriptionInput.value = "";
}

function deletProduct(index) {
    productList.splice(index, 1);
    localStorage.setItem("ourProducts", JSON.stringify(productList));
    displayProduct(productList);
}


function searchProduct(){
    var term=searchInput.value;
    var wantedProducts=[];
    for(var i=0; i<productList.length;i++){
        if(productList[i].name.toLowerCase().includes(term.toLowerCase())){
            wantedProducts.push(productList[i]);
        }
    }
    displayProduct(wantedProducts);
}