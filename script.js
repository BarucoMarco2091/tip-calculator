const calculateTipButton = document.querySelector('.calculate-tip');
calculateTipButton.addEventListener('click', () => {
    const resultsDiv = document.createElement('div');
    resultsDiv.className = 'new-results';
    resultsDiv.innerHTML =
        `
    <div id="new-results">
        <p>Tip amount<br>/ person</p>
        <span id="tip-per-person">$ 0.00</span>
        <p>Total<br>/ person</p>
        <span id="total-person">$ 0.00</span>
        <button type="button" class="reset" onclick="reset()">Reset</button>
    </div>
    `
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';
    resultsContainer.appendChild(resultsDiv);
    const resetButton = document.querySelector('.reset');
    resetButton.addEventListener('click', reset);
    tipAmountPerPerson();
    totalPerson();
});

function tipAmountPerPerson() {
    const bill = parseFloat(document.getElementById('bill').value.replace(",", "."));
    const numberOfPeople = parseFloat(document.getElementById('people').value);
    const selectedButton = document.querySelector('.card-button.active');
    if (!isNaN(bill) && !isNaN(numberOfPeople) && selectedButton) {
        const selectedTip = parseFloat(selectedButton.value) / 100;
        const tipPerPerson = (bill * selectedTip) / numberOfPeople;
        const answer = document.getElementById('tip-per-person');
        answer.innerHTML = `$ ${tipPerPerson.toFixed(2)}`;
    } else {
        alert('Digite os valores');
    }
};

function totalPerson() {
    const bill = parseFloat(document.getElementById('bill').value.replace(",", "."));
    const numberOfPeople = parseFloat(document.getElementById('people').value);
    const selectedButton = document.querySelector('.card-button.active');
    if (!isNaN(bill) && !isNaN(numberOfPeople) && selectedButton) {
        const selectedTip = parseFloat(selectedButton.value) / 100;
        const totalBillPerson = (bill + (bill * selectedTip)) / numberOfPeople;
        const answer = document.getElementById('total-person');
        answer.innerHTML = `$ ${totalBillPerson.toFixed(2)}`;
    } else {
        alert('Digite os valores');
    };
};

function addTipButtonListeners() {
    const tipButtons = document.querySelectorAll('.card-button');
    tipButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Remove a classe "active" de todos os botões
            tipButtons.forEach(btn => btn.classList.remove('active'));
            // Adiciona a classe "active" ao botão clicado
            this.classList.add('active');
            // Aqui você pode adicionar a lógica para calcular a gorjeta com base na porcentagem
            // Usar o valor do atributo "value"
        });
    });
};

// Função reset que remove o elemento 'new-results'
function reset(event) {
    const buttonClicked = event.target;
    const resultsDiv = buttonClicked.closest('#new-results'); // Seleciona o div mais próximo com id "new-results"
    if (resultsDiv) {
        resultsDiv.remove(); // Remove o div 'new-results'
    };
};

addTipButtonListeners();
