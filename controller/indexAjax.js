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



