

document.querySelector('#btnSubmit').onclick = function () {


    // console.log('1234');
    var accountNew = new Account()

    // lấy thông tin từ người dùng nhập vào 

    accountNew.email = document.querySelector('#email').value;
    accountNew.password = document.querySelector('#password').value;
    accountNew.name = document.querySelector('#name').value;
    accountNew.gender = document.querySelector('input[type=radio][name=gender]:checked').value;
  

    accountNew.phone = document.querySelector('#phone').value;

    var confPassword = '';
    confPassword= document.querySelector('#PasswordConfirm').value;

    // console.log(accountNew);
    // console.log(confPassword);
  


    // validation

    var valid = true;

    valid &= kiemTraRong(accountNew.email, '#error_email', 'Email') & kiemTraRong(accountNew.password, '#error_password', 'Password') & kiemTraRong(confPassword, '#error_confirm_password', 'Confirm password') & kiemTraRong(accountNew.name, '#error_name', 'Tên') & kiemTraRong(accountNew.phone, '#error_phone', 'Số điện thoại')
   
    valid &= kiemtraPassword(accountNew.password,confPassword,'#error_match_password', 'Mật khẩu xác nhận')


    /* ----------- kiểm tra định dạng dữ liệu----------*/

    valid &= kiemTraTatCaKyTu(accountNew.name, '#error_name', 'Tên') & kiemTraTatCaSo(accountNew.phone, '#error_phone', 'Số điện thoại') & kiemTraEmail(accountNew.email, '#error_email', 'Email');

    /* ----------- kiểm tra độ dài----------*/

    valid &= kiemTraDoDai(accountNew.password, '#error_password', 'Password', 6, 32);

    if (!valid) {
        return;
    }


    //gọi api đưa dữ liệu về backend
    var promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Users/signup',
        method: 'POST',
        data: accountNew //dữ liệu gửi đi

    })

    promise.then(function (result) {
        console.log(result.data.content);
        alert('Đăng ký tài khoản thành công')
    });

    promise.catch(function (error) {
        console.log(error)
    })

}