function getProductByID() {
    var promise = axios({
        url: "https://shop.cyberlearn.vn/api/Product/getbyid?id=1" ,  //Đường dẫn backend cung cấp
        method: 'GET',//method backend cung cấp
        ResponseType: JSON
    });
    //Xử lý thành công
    promise.then(function (result) {
        console.log(result.data.content);
        renderProductDetail(result.data.content);
        // renderRelateProduct(result.data.content);
    });
    //Xử lý thất bại
    promise.catch(function (err) {
    });
}
const renderProductDetail = (ObjectProduct) => {
    var html = '';
    var sp = ObjectProduct;
    html = `
    <div class="thumbnail col-md-4">
    <img src="${sp.image}" alt="">
</div>
<div class="detail col-md-8">
<div class="card_detail">
    <h1>${sp.name}</h1>
    <span>${sp.description}</span>
    <p>Available size</p>
    <ul>
        <li><a href="#">36</a></li>
        <li><a href="#">37</a></li>
        <li><a href="#">38</a></li>
        <li><a href="#">39</a></li>
        <li><a href="#">40</a></li>
        <li><a href="#">41</a></li>
        <li><a href="#">42</a></li>
    </ul>
    <h2>${sp.price}$</h2>
    <div class="soLuong">
        <a href="#" class="plus">+</a>
        <span>1</span>
        <a href="#" class="minus">-</a>
    </div>
        <button>Add to cart</button>
</div>
</div>
        `;
    document.querySelector('.container').innerHTML = html;
}


// const renderRelateProduct = (ObjectProduct) => {
//     var html = '';
//     var arrayProduct = ObjectProduct.relatedProducts
//     for (const value of arrayProduct) {
//         html += `
//         <div class="grid-item col-12 col-sm-6 col-lg-4">
//             <div class="card">
//             <div class="thumbnail">
//                 <img src="${value.image}" alt="">
//             </div>
//             <div class="detail">
//                 <h1>${value.name}</h1>
//                 <p>${value.shortDescription}</p>
//             </div>
//             <div class="pay">
//                 <div class="btn-buy">
//                     <a href="./detail.html?productid=${value.id}">Buy now</a>
//                 </div>
//                 <div class="price">
//                     <p>${value.price}$</p>
//                 </div>
//             </div>
//         </div>
//         </div>
//             `;
//     }
//     document.querySelector('.grid-content').innerHTML = html;
// }
function layListProductAPI() {
    var promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Product',//đường dẫn backend cung cấp
        method: 'GET', //method backend cung cấp 
        ResponseType: JSON

    })

    // xử lý thành công 
    promise.then(function (result) {
        console.log(result.data.content);
        //sau khi lấy dữ liệu từ backend về dùng dữ liệu đó tạo ra giao diện
        renderProduct(result.data.content);
    })
    //xử lý thất bại 
    promise.catch(function (err) {
    })
}

    // console.log (layListProductAPI())

// }
// gọi hàm lấy dữ liệu từ server khi trang web vừa load xong
window.onload = function () {
    layListProductAPI();

}
// tạo hàm render dữ liệu sản phẩm ra màn hình 

function renderProduct (arrayProduct) {
    var html = '';
for (i=0; i < arrayProduct.length; i++) {
    var product = arrayProduct[i];

    html += `

    <div class="column col-12 col-sm-12 col-md-6 col-lg-4">
            <div class="card">
              <img src="${product.image}" alt="">
              <div class="info">
                <h4>${product.name}</h4>
                <p>${product.shortDescription}</p>
              </div>
              <div class="button row">
              
                  <button> <a href="detail.html?id=${product.id}">Buy Now</a></button>
                  <div class="price">
                    <h4>${product.price}$</h4>
                    </div>
              </div>
            </div>
    </div>

    `

}
document.querySelector('#productList').innerHTML =html;
 }
window.onload = function () {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get('id');
    console.log('params', myParam)
    getProductByID(myParam);
}

