let pName = document.querySelector(".pname");
let pDetails = document.querySelector(".pde");
let pPrice = document.querySelector(".ppric");
let url = document.querySelector(".imurl");
let submit = document.querySelector(".add");
let productsDiv = document.querySelector(".products");

// Empty Array To Store The Tasks
let arrayOfProducts = [];

// Check if Theres Tasks In Local Storage
if (localStorage.getItem("products")) {
  arrayOfProducts = JSON.parse(localStorage.getItem("products"));
}

// Trigger Get Data From Local Storage Function
getDataFromLocalStorage();

// Add Task
submit.onclick = function () {
  if (pName.value !== "") {
    addTaskToArray(pName.value,pDetails.value,pPrice.value,url.value); // Add Task To Array Of Tasks
    pName.value = "";
    pDetails.value = "";
    pPrice.value = "";
    url.value = ""; // Empty Input Field
  }
};

// Click On Task Element
productsDiv.addEventListener("click", (e) => {
  // Delete Button
  if (e.target.classList.contains("del")) {
    // Remove Task From Local Storage
    deleteProductWith(e.target.parentElement.getAttribute("data-id"));
    // Remove Element From Page
    e.target.parentElement.remove();
  }
  
});

function addTaskToArray(name,details,price,url) {
  // Task Data
  const product = {
    id: Date.now(),
    name: name,
   details:details,
   price: price,
   url : url,
  };
  // Push Task To Array Of Tasks
  arrayOfProducts.push(product);
  // Add Tasks To Page
  addElementsToPageFrom(arrayOfProducts);
  // Add Tasks To Local Storage
  addDataToLocalStorageFrom(arrayOfProducts);
}

function addElementsToPageFrom(arrayOfProducts) {
  // Empty Tasks Div
  productsDiv.innerHTML = "";
  // Looping On Array Of Tasks
  arrayOfProducts.forEach((product) => {
    // Create Main Div
    let div = document.createElement("div");
    div.className = "product";
  
    
    div.setAttribute("data-id", product.id);
    
    // Create Delete Button
    
    let img = document.createElement("img");
img.src=product.url;

    // Append Button To Main Div
    div.appendChild(img);
   
     let n=document.createElement("h3");
     n.appendChild(document.createTextNode(product.name));
     let d=document.createElement("p");
     d.appendChild(document.createTextNode(product.details));
     let p=document.createElement("h3");
     
     p.appendChild(document.createTextNode(product.price));
     
     
      div.appendChild(n);
     div.appendChild(d);
     div.appendChild(p);
     
     

     
    // Append Button To Main Div
   
    // Add Task Div To Tasks Container
    productsDiv.appendChild(div);
  });
}

function addDataToLocalStorageFrom(arrayOfProducts) {
  window.localStorage.setItem("products", JSON.stringify(arrayOfProducts));
}

function getDataFromLocalStorage() {
  let data = window.localStorage.getItem("products");
  if (data) {
    let products = JSON.parse(data);
    addElementsToPageFrom(products);
  }
}
