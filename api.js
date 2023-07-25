const swayBtn = document.getElementById('sway-btn');
const amountIn = document.getElementById('amount');
const resultOut = document.getElementById('result');

swayBtn.addEventListener('click', () =>{
    const amount = amountIn.value;
    const baseUrl = `http://dashboard.encryptbox.co.uk/api/v1/live/${amount}`

    fetch (baseUrl).then(response => response.json())
    .then(data =>{
        const exchangeRate = data['busd'].ng;
        const convertedAmount = amount * exchangeRate;
        result.innerText = `${amount} busd is ${convertedAmount} Naira`;

    })
    .catch(error => {
        console.log('An error occured', error)
        result.innerText = "error transaction, please try again later"
    })
})