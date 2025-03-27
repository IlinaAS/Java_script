function calculatePrice() {
    const sizePrice = parseInt(document.getElementById('size').value);
    let ingredientsPrice = 0;

    const ingredientCheckboxes = document.querySelectorAll('input[type="checkbox"]');
    ingredientCheckboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            ingredientsPrice += parseInt(checkbox.value);
        }
    });

    const totalPrice = sizePrice + ingredientsPrice;
    document.getElementById('totalPrice').innerText = totalPrice;
};

document.getElementById('pizzaForm').addEventListener('submit', function(event) {
    event.preventDefault(); // предотвратить отправку формы
    alert('Ваш заказ принят! Общая стоимость: ' + document.getElementById('totalPrice').innerText + 'Руб');
});
