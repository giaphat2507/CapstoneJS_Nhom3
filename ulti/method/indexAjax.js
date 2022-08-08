// function layListProductAPI() {
    var promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Product',//đường dẫn backend cung cấp
        method: 'GET', //method backend cung cấp 
        ResponseType: JSON

    })

    // xử lý thành công 
    promise.then(function (result) {
        console.log(result.data.content);
        //sau khi lấy dữ liệu từ backend về dùng dữ liệu đó tạo ra tr trên table
        // renderSinhVien(result.data.content);
    })
    //xử lý thất bại 
    promise.catch(function (err) {
    })

    // console.log (layListProductAPI())

// }
// gọi hàm lấy dữ liệu từ server khi trang web vừa load xong
// window.onload = function () {
//     layListProductAPI();
// }