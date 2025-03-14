function openTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
    document.getElementById(tabName).classList.add('active');
    event.currentTarget.classList.add('active');
}

function toggleInputField() {
    const store = document.getElementById('store').value;
    const optionalInput = document.getElementById('optionalInput');
    if (store === 'eBay') {
        optionalInput.placeholder = '% pubblicitaria';
    } else {
        optionalInput.placeholder = 'prezzo boost';
    }
}

document.getElementById('calculatorForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const rates = { eBay: 0.1, Vinted: 0 };
    const amount = document.getElementById('amount').value;
    const optionalValue = document.getElementById('optionalInput').value;
    const store = document.getElementById('store').value;
    let commission;
    if (store === 'eBay') {
        commission = amount * rates[store] + (amount * (optionalValue / 100));
    } else if (store === 'Vinted') {
        commission = Number(optionalValue);
    }
    document.getElementById('result').innerHTML = `Commissione: €${commission.toFixed(2)}`;
});

document.querySelectorAll('.video-filter').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.video-filter').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filter = button.dataset.filter;
        document.querySelectorAll('.video-item').forEach(video => {
            video.style.display = (filter === 'all' || video.dataset.platform === filter) ? 'block' : 'none';
        });
    });
});

document.querySelectorAll('.video-item').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.add('animate');
        setTimeout(() => {
            card.classList.remove('animate');
        }, 300);
    });
});

function startTitleAnimation() {
    const title = document.getElementById('title-animation');
    title.classList.add('start-animation');
    setTimeout(() => {
        title.classList.remove('start-animation');
    }, 3000); // Adjust the duration as needed
}

function toggleCheckmark(card) {
    card.classList.toggle('checked');
}
