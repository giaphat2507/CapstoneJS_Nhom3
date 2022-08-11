//validation for registration

/**
 * Hàm nhận vào 2 tham số và trả về đúng hoặc sai. True khi hợp lệ, false khi ko hợp lệ
 * @param {*} value giá trị đầu vào 
 * @param {*} selectorError nơi in ra lỗi 
 * @param {*} name là text hiện trị ra tên trường bị lỗi
 */
 function kiemTraRong (value, selectorError, name) {
    //.trim (): loại bỏ khoảng trống đầu và cuối chuỗi
    //    abc    => abc 
    if (value.trim() !== '') 
    {
        document.querySelector(selectorError).innerHTML = '';
        return true;
    }
    document.querySelector(selectorError).innerHTML = name + ' không được bỏ trống ';
    return false;
    }

    
    function kiemTraTatCaKyTu (value, selectorError, name) {
        var regexLetter = /^[A-Z a-z]+$/;
        if (regexLetter.test(value)) {
            document.querySelector(selectorError).innerHTML = ''; 
            return true;
        }
        document.querySelector(selectorError).innerHTML = name + ' tất cả là chữ';
        return false;
    }
    
    function kiemTraTatCaSo (value, selectorError, name) {
        var regexLetter = /^[0-9]+$/;
        if (regexLetter.test(value)) {
            document.querySelector(selectorError).innerHTML = ''; 
            return true;
        }
        document.querySelector(selectorError).innerHTML = name + ' tất cả là số';
        return false;
     }
    
     function kiemTraEmail (value, selectorError, name) {
        var regexLetter = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\ [[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (regexLetter.test(value)) {
            document.querySelector(selectorError).innerHTML = ''; 
            return true;
        }
        document.querySelector(selectorError).innerHTML = name + ' không đúng định dạng';
        return false;
     }
    
     function kiemTraNgay (value, selectorError,name) {
        var regexLetter = /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/;
        if (regexLetter.test(value)) {
            document.querySelector(selectorError).innerHTML = ''; 
            return true;
        }
        document.querySelector(selectorError).innerHTML = name + ' không đúng định dạng';
        return false;
     }
    
     function kiemTraDoDai (value, selectorError, name, minlength, maxlength) {
         var lengthValue = value.length;
         if (lengthValue > maxlength || lengthValue < minlength) {
             document.querySelector(selectorError).innerHTML = name + ' từ ' + minlength + ' đến ' + maxlength;
             return false;
         }
         document.querySelector(selectorError).innerHTML = ''; 
            return true;
     }
    
     function kiemTraGiaTri (value, selectorError, name, minvalue, maxvalue) {
         value = Number(value);
    
         if (value > maxvalue || value < minvalue) {
            document.querySelector(selectorError).innerHTML = name + ' từ ' + minvalue + ' đến ' + maxvalue;
            return false;
         }
         document.querySelector(selectorError).innerHTML = ''; 
            return true;
    
     }

     /**
      * 
      * @param {*} password password khởi tạo
      * @param {*} confirmedpassword confirm lại password
      * @param {*} selectorError nơi in ra lỗi 
      * @param {*} name text hiển thị ra khi lỗi
      * @returns 
      */

function kiemtraPassword (password, confirmedpassword,selectorError, name) {

    if (password != confirmedpassword) {
        document.querySelector(selectorError).innerHTML = name + " không khớp với mật khẩu đã tạo"; 
        return false
    }

    document.querySelector(selectorError).innerHTML = ''; 
    return true;
    

}
    
    