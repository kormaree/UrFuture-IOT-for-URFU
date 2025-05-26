document.querySelector('#elastic-directions').oninput = function() {
    let value = this.value.trim();
    let elasticItems = document.querySelectorAll('.elastic-directions li');
    if (value != '') {
        elasticItems.forEach(function(elem){
            if (elem.innerText.search(value) == -1) {
                elem.classList.add('hide');
            }
            else {
                elem.classList.remove('hide');
            }
        });
    }
    else {
        elasticItems.forEach(function(elem){
            elem.classList.remove('hide');
        });
    }
}