"use strict"

// Simply Bank App

const account1 = {
    userName: "Cecil Ireland",
    transactions: [500, 250, -300, 5000, -850, -110, -170, 1100],
    cardNumber: [],
    interest: 1.5,
    pin: 1111,
    transactionsDates: [
        '2020-10-02T14:43:31.074Z',
        '2020-10-29T11:24:19.761Z',
        '2020-11-15T10:45:23.907Z',
        '2021-01-22T12:17:46.255Z',
        '2021-02-12T15:14:06.486Z',
        '2021-03-09T11:42:26.371Z',
        '2021-05-21T07:43:59.331Z',
        '2021-06-22T15:21:20.814Z',
    ],
    currency: 'USD',
    locale: 'en-US',
}

const account2 = {
    userName: "Amani Salt",
    transactions: [
        2000, 6400, -1350, -70, -210, 400, 54, -2000, 5500, -30, 100, 209, 39, 50,
    ],
    cardNumber: [],
    interest: 1.3,
    pin: 2222,
    transactionsDates: [
        '2020-10-02T14:43:31.074Z',
        '2020-10-29T11:24:19.761Z',
        '2020-11-15T10:45:23.907Z',
        '2021-01-22T12:17:46.255Z',
        '2021-02-12T15:14:06.486Z',
        '2021-03-09T11:42:26.371Z',
        '2021-05-21T07:43:59.331Z',
        '2021-06-22T15:21:20.814Z',
        '2020-10-02T14:43:31.074Z',
        '2020-10-29T11:24:19.761Z',
        '2020-11-15T10:45:23.907Z',
        '2021-01-22T12:17:46.255Z',
        '2021-02-12T15:14:06.486Z',
        '2021-03-09T11:42:26.371Z',
    ],
    currency: 'UAH',
    locale: 'uk-UA',

}

const account3 = {
    userName: "Corey Martinez",
    transactions: [900, -200, 280, 300, -200, 150, 1400, -400],
    cardNumber: [],
    interest: 0.8,
    pin: 3333,
    transactionsDates: [
        '2020-10-02T14:43:31.074Z',
        '2020-10-29T11:24:19.761Z',
        '2020-11-15T10:45:23.907Z',
        '2021-01-22T12:17:46.255Z',
        '2021-02-12T15:14:06.486Z',
        '2021-03-09T11:42:26.371Z',
        '2021-05-21T07:43:59.331Z',
        '2021-06-22T15:21:20.814Z',
    ],
    currency: 'EUR',
    locale: 'fr-CA',
}

const account4 = {
    userName: "Kamile Searle",
    transactions: [530, 1300, 500, 40, 190],
    cardNumber: [],
    interest: 1,
    pin: 4444,
    transactionsDates: [
        '2020-10-02T14:43:31.074Z',
        '2020-10-29T11:24:19.761Z',
        '2020-11-15T10:45:23.907Z',
        '2021-01-22T12:17:46.255Z',
        '2021-02-12T15:14:06.486Z',
    ],
    currency: 'EUR',
    locale: 'fr-CA',
}

const account5 = {
    userName: "Oliver Avila",
    transactions: [630, 800, 300, 50, 120],
    cardNumber: [],
    interest: 1.1,
    pin: 5555,
    transactionsDates: [
        '2020-10-02T14:43:31.074Z',
        '2020-10-29T11:24:19.761Z',
        '2020-11-15T10:45:23.907Z',
        '2021-01-22T12:17:46.255Z',
        '2021-02-12T15:14:06.486Z',
    ],
    currency: 'EUR',
    locale: 'fr-CA',
}

const accounts = [account1, account2, account3, account4, account5]

// Elements
const labelWelcome = document.querySelector(".welcome")
const labelDate = document.querySelector(".current_date")
const labelBalance = document.querySelector(".balance_value")
const labelSumIn = document.querySelector(".total_value_in")
const labelSumOut = document.querySelector(".total_value_out")
const labelSumInterest = document.querySelector(".total_value_interest")
const labelTimer = document.querySelector(".timer")
const labelFirstLastName = document.querySelector(".card_first_last_name")

const containerNav = document.querySelector(".nav")
const containerApp = document.querySelector(".app")
const containerTransactions = document.querySelector(".transactions")
const containerSendOperation = document.querySelector(".operation_transfer")
const containerLoanOperation = document.querySelector(".operation_loan")
const containerClouseAccountOperation =
    document.querySelector(".operation_close")
const containerRegistration = document.querySelector(".registration_wrapper")

const btnRegistration = document.querySelector(".registration_btn")
const btnAproveReg = document.querySelector(".aprove_registration_btn")
const btnLogin = document.querySelector(".login_btn")
const btnTransfer = document.querySelector(".form_btn_transfer")
const btnLoan = document.querySelector(".form_btn_loan")
const btnClose = document.querySelector(".form_btn_close")
const btnSort = document.querySelector(".container_transactions_header")
const btnSend = document.querySelector(".navigation_btn_send")
const btnReceive = document.querySelector(".navigation_btn_receive")
const btnTopUp = document.querySelector(".navigation_btn_topup")
const btnPayment = document.querySelector(".navigation_btn_payment")
const btnSetting = document.querySelector(".setting_wrapper")
const btnBack = document.querySelector(".back_btn");
const btnExit = document.querySelector(".container_exit_btn")

const btnCardNumber = document.querySelector(".card_number_img_wrapper")
const cardNumber = document.querySelector(".card_number_item")
const imgCardN1 = document.querySelector(".card_number_img1")
const imgCardN2 = document.querySelector(".card_number_img2")

const inputRegName = document.querySelector(".reg_input_name")
const inputRegFirstName = document.querySelector(".reg_input_first_name")
const inputRegNickname = document.querySelector(".reg_input_nickname")
const inputRegPin = document.querySelector(".reg_input_pin")
const inputLoginUsername = document.querySelector(".login_input_user")
const inputLoginPin = document.querySelector(".login_input_pin")
const inputTransferTo = document.querySelector(".form_input_to")
const inputTransferAmount = document.querySelector(".form_input_amount")
const inputLoanAmount = document.querySelector(".form_input_loan_amount")
const inputCloseNickname = document.querySelector(".form_input_user")
const inputClosePin = document.querySelector(".form_input_pin")



const preloader = document.getElementById("preloader")
// Preloader function
const preloaderFunction = (window.onload = function () {
    const func = () => {
        preloader.style.opacity = 0
        containerNav.classList.remove("display_none")
        containerNav.classList.add("display_flex_column")
    }
    setTimeout(func, 1 * 2500)
})

const formatCurrency = function (value, locale, currency) {
    return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: currency
    }).format(value);

}
const displayTransactions = function (account, sort = false) {
    containerTransactions.innerHTML = ""
    const transactionSort = sort
        ? account.transactions.slice().sort((x, y) => x - y)
        : account.transactions

    transactionSort.forEach(function (transaction, index) {
        const transType = transaction > 0 ? "deposit" : "withdrawal";

        const date = new Date(account.transactionsDates[index]);
        const day = `${date.getDate()}`.padStart(2, 0);
        const month = `${date.getMonth() + 1}`.padStart(2, 0);
        const year = date.getFullYear();

        const transDate = `${day}/${month}/${year}`

        const transTypeIcn =
            transaction > 0
                ? `<div class="transaction_icon">
        <img src="img/shopping_icon.png" alt="shopping" />
      </div>`
                : `<div class="transaction_icon">
      <img src="img/food_icon.png" alt="food">
    </div>`
        const formattedTrans = formatCurrency(transaction, account.locale, account.currency)
        const transactionRow = `
    <div class="transactions_row">
    <div class="transactions_type transactions_type_${transType}">
    ${transTypeIcn} <div class="tratns_time_wrapper">${transType}
    <div class="transactions_date">${transDate}</div>
    </div>
     <div class="transactions_value">${formattedTrans}</div>
  </div>
    `
        containerTransactions.insertAdjacentHTML("afterbegin", transactionRow)
    })


    const transactionRowWithdrawal = [...document.querySelectorAll(".transactions_row")];
    transactionRowWithdrawal.forEach(function (row, index) {
        if (index % 2 === 0) {
            row.style.backgroundColor = "#191c44";
        }
    })

    const transactionIcon = [...document.querySelectorAll(".transaction_icon")];
    transactionIcon.forEach(function (icon, index) {
        if (index % 2 === 0) {
            icon.style.backgroundColor = "#121433";
        }
    })
}

const createNicknames = function (accounts) {
    accounts.forEach(function (account) {
        account.nicname = account.userName
            .toLowerCase()
            .split(" ")
            .map((word) => word[0])
            .join("")
    })
}
createNicknames(accounts)
0

const displayBalance = function (account) {
    const balance = account.transactions.reduce((acc, trans) => acc + trans, 0)
    account.balance = balance
    labelBalance.textContent = formatCurrency(balance, account.locale, account.currency)
}

const displayTotal = function (account) {
    const depositesTotal = account.transactions
        .filter((transaction) => transaction > 0)
        .reduce((acc, transaction) => acc + transaction, 0)
    labelSumIn.textContent = `${depositesTotal.toFixed(2)}$`

    const withdrawalsTotal = account.transactions
        .filter((transaction) => transaction < 0)
        .reduce((acc, transaction) => acc + transaction, 0)
    labelSumOut.textContent = `${withdrawalsTotal.toFixed(2)}$`

    const interestTotal = account.transactions
        .filter((transaction) => transaction > 0)
        .map((deposite) => (deposite * account.interest) / 100)
        .filter((interest, index, arr) => {
            return interest >= 5
        })
        .reduce((acc, interest) => acc + interest, 0)
    labelSumInterest.textContent = `${interestTotal}$`
}

const updateUi = function (account) {
    // Display transactions
    displayTransactions(account)
    // Display balance
    displayBalance(account)
    // Display total
    displayTotal(account)
}

let currentAccount;
const now = new Date();


const addClassTransactionContainer = function () {
    if (containerTransactions.className == "transactions") {
        containerTransactions.classList.add("display_none")
    } else if (containerTransactions.className == "transactions display_none") {
        containerTransactions.classList.remove("display_none")
    }
}
const addClassContainerSendOperation = function () {
    containerSendOperation.classList.toggle("display_none")
    containerSendOperation.classList.toggle("display_flex_column")
    containerLoanOperation.classList.remove("display_flex_column")
    containerLoanOperation.classList.add("display_none")
    containerClouseAccountOperation.classList.add("display_none")
    containerClouseAccountOperation.classList.remove("display_flex_column")
    if (
        containerSendOperation.className ==
        "operation operation_transfer display_flex_column" &&
        containerTransactions.className == "transactions"
    ) {
        containerTransactions.classList.add("display_none")
    }
}
const addClassContainerLoanOperation = function () {
    containerSendOperation.classList.add("display_none")
    containerSendOperation.classList.remove("display_flex_column")
    containerLoanOperation.classList.toggle("display_none")
    containerLoanOperation.classList.toggle("display_flex_column")
    containerClouseAccountOperation.classList.add("display_none")
    containerClouseAccountOperation.classList.remove("display_flex_column")
    if (
        containerTransactions.className == "transactions" &&
        containerLoanOperation.className ==
        "operation operation_loan display_flex_column"
    ) {
        containerTransactions.classList.add("display_none")
    }
}
const addContainerClouseAccountOperation = function () {
    containerClouseAccountOperation.classList.toggle("display_none")
    containerClouseAccountOperation.classList.toggle("display_flex_column")
    containerSendOperation.classList.add("display_none")
    containerSendOperation.classList.remove("display_flex_column")
    containerLoanOperation.classList.remove("display_flex_column")
    containerLoanOperation.classList.add("display_none")
    if (
        containerTransactions.className == "transactions" &&
        containerClouseAccountOperation.className ==
        "operation operation_close display_flex_column"
    ) {
        containerTransactions.classList.add("display_none")
    }
}
// Event Handlers
let counterReg = 0;


btnRegistration.addEventListener("click", function () {
    containerNav.classList.add("display_none");
    containerNav.classList.remove("display_flex_column");
    containerRegistration.classList.remove("display_none");
    containerRegistration.classList.add("display_flex_column");
})
btnAproveReg.addEventListener("click", function () {
    const pin = inputRegPin.value;
    const account = {
        userName: `${inputRegName.value} ${inputRegFirstName.value}`,
        transactions: [],
        cardNumber: [],
        interest: 1.1,
        pin: pin,
        transactionsDates: [
        ],
        currency: 'EUR',
        locale: 'fr-CA',
        nicname: `${inputRegNickname.value}`

    }
    if (inputRegName.value == '') {
        inputRegName.classList.add('reg_error');
    };
    if (inputRegFirstName.value == '') {
        inputRegFirstName.classList.add('reg_error');
    };
    if (inputRegNickname.value == '') {
        inputRegNickname.classList.add('reg_error');
    };
    if (inputRegPin.value == '') {
        inputRegPin.classList.add('reg_error');
    };

    console.log(accounts);
    accounts.forEach(function (account, index) {
        if (account.nicname == inputRegNickname.value) {
            alert("sad")

        }
    })
    if (inputRegName.value != '' && inputRegFirstName.value != '' && inputRegNickname.value != '' && inputRegPin.value != '') {
        accounts.push(account)
        counterReg++;
        inputRegName.classList.remove('reg_error');
        inputRegFirstName.classList.remove('reg_error');
        inputRegNickname.classList.remove('reg_error');
        inputRegPin.classList.remove('reg_error');
        inputRegName.value = '';
        inputRegFirstName.value = '';
        inputRegNickname.value = '';
        inputRegPin.value = '';

    }
})
btnBack.addEventListener('click', function () {
    containerNav.classList.remove("display_none");
    containerNav.classList.add("display_flex_column");
    containerRegistration.classList.add("display_none");
    containerRegistration.classList.remove("display_flex_column");
})

btnLogin.addEventListener("click", function (e) {
    e.preventDefault()
    currentAccount = accounts.find(
        (account) => account.nicname === inputLoginUsername.value

    )
    if (
        currentAccount?.pin == inputLoginPin.value &&
        inputLoginUsername.value !== "" &&
        inputLoginPin.value !== ""
    ) {
        // Display UI and welcome message
        containerApp.style.opacity = 100
        // create new date
        const day = `${now.getDate()}`.padStart(2, 0);
        const month = `${now.getMonth() + 1}`.padStart(2, 0);
        const year = now.getFullYear();
        labelDate.textContent = `${day}/${month}/${year}`;

        labelWelcome.textContent = `Раді що ви знову з нами, ${currentAccount.userName.split(" ")[0]
            }!`
        labelFirstLastName.textContent = `${currentAccount.userName}`
        // Clear inputs
        inputLoginUsername.value = ""
        inputLoginPin.value = ""
        inputLoginPin.blur()

        if (containerApp.className === "app display_none") {
            containerApp.classList.remove("display_none")
            addClassTransactionContainer()
            addContainerClouseAccountOperation()
        }
        containerNav.classList.add("display_none")
        containerNav.classList.remove("display_flex_column")
        updateUi(currentAccount)
    }

})

btnCardNumber.addEventListener("click", function () {
    imgCardN1.classList.toggle("display_none")
    imgCardN2.classList.toggle("display_none")

    if (imgCardN2.className == "card_number_img2") {
        cardNumber.innerHTML = "**** **** **** ****"
    } else if (imgCardN2.className == "card_number_img2 display_none") {
        cardNumber.innerHTML = "3990 3444 7778 2999"
    }
    console.log(accounts);
})

btnTransfer.addEventListener("click", function (e) {
    e.preventDefault()
    const transferAmount = +inputTransferAmount.value
    const recipientNickname = inputTransferTo.value
    const recipientAccount = accounts.find(
        (account) => account.nicname === recipientNickname
    )

    inputTransferTo.value = ""
    inputTransferAmount.value = ""

    if (
        transferAmount > 0 &&
        currentAccount.balance >= transferAmount &&
        currentAccount.nicname !== recipientAccount?.nicname
    ) {
        // add transaction
        currentAccount.transactions.push(-transferAmount)
        recipientAccount.transactions.push(transferAmount);

        //    add transaction date
        currentAccount.transactionsDates.push(new Date().toISOString());
        recipientAccount.transactionsDates.push(new Date().toISOString());

        updateUi(currentAccount)
    }
})

btnSend.addEventListener("click", function () {
    addClassTransactionContainer()
    addClassContainerSendOperation()
})

btnReceive.addEventListener("click", function () {
    addClassTransactionContainer()
    addClassContainerLoanOperation()
})
btnSetting.addEventListener("click", function () {
    addClassTransactionContainer()
    addContainerClouseAccountOperation()
})
btnLoan.addEventListener("click", function (e) {
    e.preventDefault()
    const loanAmount = Math.floor(inputLoanAmount.value);
    if (
        loanAmount > 0 &&
        currentAccount.transactions.some(
            (trans) => trans >= (loanAmount * 10) / 100
        )
    ) {
        currentAccount.transactions.push(loanAmount);
        currentAccount.transactionsDates.push(new Date().toISOString());
        updateUi(currentAccount)
    }
    inputLoanAmount.value = ""
})
let transactionsSorted = false
btnSort.addEventListener("click", function (e) {
    e.preventDefault()
    displayTransactions(currentAccount, !transactionsSorted)
    transactionsSorted = !transactionsSorted

    if (btnSort.textContent == "↓") {
        btnSort.textContent = "↑"
    } else if (btnSort.textContent == "↑") {
        btnSort.textContent = "↓"
    }
})

const clearLoginInputs = function () {
    inputCloseNickname.value = "";
    inputClosePin.value = "";
    labelWelcome.textContent = `Увійдіть в свій акаунт`;
}

btnClose.addEventListener("click", function (e) {
    e.preventDefault()
    if (
        inputCloseNickname.value === currentAccount.nicname &&
        +inputClosePin.value === currentAccount.pin
    ) {
        const currentAccountIndex = accounts.findIndex(
            (account) => account.nicname === currentAccount.nicname
        )
        accounts.splice(currentAccountIndex, 1);
        containerApp.classList.add("display_none");
        containerNav.classList.remove("display_none");
        containerNav.classList.add("display_flex_column");
    }
    clearLoginInputs()
})
btnExit.addEventListener("click", function (e) {
    containerApp.classList.add("display_none");
    containerNav.classList.remove("display_none");
    containerNav.classList.add("display_flex_column");
    currentAccount = "";
    clearLoginInputs();
})
