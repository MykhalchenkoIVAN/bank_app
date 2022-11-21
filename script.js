'use strict';

// Simply Bank App

const account1 = {
    userName: 'Cecil Ireland',
    transactions: [500, 250, -300, 5000, -850, -110, -170, 1100],
    interest: 1.5,
    pin: 1111,
};

const account2 = {
    userName: 'Amani Salt',
    transactions: [2000, 6400, -1350, -70, -210, -2000, 5500, -30],
    interest: 1.3,
    pin: 2222,
};

const account3 = {
    userName: 'Corey Martinez',
    transactions: [900, -200, 280, 300, -200, 150, 1400, -400],
    interest: 0.8,
    pin: 3333,
};

const account4 = {
    userName: 'Kamile Searle',
    transactions: [530, 1300, 500, 40, 190],
    interest: 1,
    pin: 4444,
};

const account5 = {
    userName: 'Oliver Avila',
    transactions: [630, 800, 300, 50, 120],
    interest: 1.1,
    pin: 5555,
};

const accounts = [account1, account2, account3, account4, account5];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance_value');
const labelSumIn = document.querySelector('.total_value_in');
const labelSumOut = document.querySelector('.total_value_out');
const labelSumInterest = document.querySelector('.total_value_interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerTransactions = document.querySelector('.transactions');

const btnLogin = document.querySelector('.login_btn');
const btnTransfer = document.querySelector('.form_btn_transfer');
const btnLoan = document.querySelector('.form_btn_loan');
const btnClose = document.querySelector('.form_btn_close');
const btnSort = document.querySelector('.btn_sort');

const inputLoginUsername = document.querySelector('.login_input_user');
const inputLoginPin = document.querySelector('.login_input_pin');
const inputTransferTo = document.querySelector('.form_input_to');
const inputTransferAmount = document.querySelector('.form_input_amount');
const inputLoanAmount = document.querySelector('.form_input_loan_amount');
const inputCloseUsername = document.querySelector('.form_input_user');
const inputClosePin = document.querySelector('.form_input_pin');

const displayTransactions = function (transactions) {
    containerTransactions.innerHTML = '';
    transactions.forEach(function (transaction, index) {
        const transType = transaction > 0 ? 'deposit' : 'withdrawal';



        const transactionRow = `
    <div class="transactions_row">
    <div class="transactions_type transactions_type_${transType}">
      ${index + 1} ${transType}
    </div>
     <div class="transactions_value">${transaction}</div>
  </div>
    `
        containerTransactions.insertAdjacentHTML('afterbegin', transactionRow)

    });
}


displayTransactions(account2.transactions)