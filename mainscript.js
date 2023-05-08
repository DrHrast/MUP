const show_pic = (path) => {
    document.querySelector('#img_name').innerHTML = path;
    document.querySelector('#image').src = path;
}