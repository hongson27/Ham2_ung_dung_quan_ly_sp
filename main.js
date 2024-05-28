class Product {
    constructor(name) {
        this.name = name;
    }
    getName() { return this.name; }
    editName(name) { this.name = name; }
}

function productList(product) {
    let txt = '';
    for (let i=0; i<product.length; i++) {
        txt += '<tr>';
        txt += '<td>' + product[i].getName() + '</td>';
        txt += '<td>' + '<button class="btn btn-outline-success" onclick="editProduct('+i+')">Edit</button>' + '</td>';
        txt += '<td>' + '<button class="btn btn-outline-success" onclick="deleteProduct('+i+')">Delete</button>' + '</td>';
        txt += '<td></td>';
        txt += '</tr>';
    }
    document.getElementById('tbody').innerHTML = txt;
    totalProduct();
}

let phone1 = new Product('Wiko Bloom');
let phone2 = new Product('Iphone  6S');
let phone3 = new Product('Iphone 11');
let product_list = [phone1, phone2, phone3];

productList(product_list);

function totalProduct() {
    document.getElementById('total').innerHTML = product_list.length + ' products';
}


function addProduct() {
    let name = document.getElementById('name').value;
    let new_product = new Product(name);
    product_list.push(new_product);
    productList(product_list);
    totalProduct();
    document.getElementById('name').value = '';
}
let productId = 0;
function editProduct(i) {
    document.getElementById('name').value = product_list[i].getName();
    productId = i;
}

function updateProduct() {
    let name = document.getElementById('name').value;
    product_list[productId].editName(name);
    productList(product_list);
    totalProduct();
}

function deleteProduct(i) {
    product_list.splice(i, 1);
    productList(product_list);
    totalProduct();
}


