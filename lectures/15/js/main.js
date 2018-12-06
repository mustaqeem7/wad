let details = {
    balance : 0,
    title : "Muhammad Mustaqeem",
    currency : "PKRS",
    IBAN : "IBAN1234567890"};

function SetTitle(){
    var Acctitle = document.getElementById('title');
    Acctitle.innerText = details.title;
}
function SetBalance(){
    var AccBalanace = document.getElementById('balance');
    AccBalanace.innerText = " ";
    AccBalanace.innerText = details.balance;
}
function SetCurrency(){
    var AccCurrency = document.getElementById('currency');
    AccCurrency.innerText = details.currency;
}
function SetIBAN(){
    var AccIBAN = document.getElementById('IBAN');
    AccIBAN.innerText = details.IBAN;
}

function SetDeposit(event) {
    var InputDeposit = document.getElementById('deposit');
    var Message = document.getElementById('deposit-msg');
    Message.innerHTML = "";
    if (event.which === 13 || event.key === "Enter") {
        if (!isNaN(InputDeposit.value))
        {
            details.balance += parseInt(InputDeposit.value,10);
            var AccBalanace = document.getElementById('balance');
            SetBalance();
            var table = document.getElementById('transaction-table');
            table.innerHTML += '<tr>'+
                '<td align="left" valign="middle" scope="col">'+ new Date() +'</td>\n' +
                '<td align="left" valign="middle" scope="col">Deposit</td>\n' +
                '<td align="left" valign="middle" scope="col">' + parseInt(InputDeposit.value,10) + '</td>\n' +
                '</tr>';
            InputDeposit.value ='';
        }
        else {
            var message = "Enter Valid Amount";
            var fMessage = message.fontcolor("red");
            Message.innerHTML += fMessage;

        }
    }
}
function GetWithdraw(event) {
    var InputWithdraw = document.getElementById('withdraw');
    var Message = document.getElementById('withdraw-msg');
    Message.innerHTML = "";
    if (event.which === 13 || event.key === "Enter") {
        if (!isNaN(InputWithdraw.value))
        {
            if (parseInt(InputWithdraw.value, 10) <= details.balance)
            {
                details.balance -= parseInt(InputWithdraw.value, 10);
                var AccBalanace = document.getElementById('balance');
                SetBalance();
                var table = document.getElementById('transaction-table');
                table.innerHTML += '<tr>'+
                                   '<td align="left" valign="middle" scope="col">'+ new Date() +'</td>\n' +
                                   '<td align="left" valign="middle" scope="col">Withdraw</td>\n' +
                                   '<td align="left" valign="middle" scope="col">' + parseInt(InputWithdraw.value,10) + '</td>\n' +
                                   '</tr>';
                InputWithdraw.value='';
            }
            else
            {
                var message = "Don't Have Sufficient Amount In Account";
                var finalMessage = message.fontcolor("orange");
                Message.innerHTML += finalMessage;
            }
        }
        else {
            var message = "Enter Valid Amount";
            var finalMessage = message.fontcolor("red");
            Message.innerHTML += finalMessage;
        }
    }
}
SetTitle();
SetBalance();
SetCurrency();
SetIBAN();