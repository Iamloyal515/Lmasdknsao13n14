function showCategory(category) {
    const categories = document.getElementsByClassName('category-products');
    const buttons = document.getElementsByClassName('category-btn');

    for (let i = 0; i < categories.length; i++) {
        categories[i].style.display = 'none';
    }

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('selected');
    }

    document.getElementById(category + '-category').style.display = 'block';
    event.target.classList.add('selected');
}
