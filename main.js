let budget = 500000;
let expenses = [];

function updateUI() {
  const total = expenses.reduce((sum, e) => sum + e.amount, 0);
  const remaining = budget - total;
  document.getElementById("root").innerHTML = \`
    <h1>남은돈 Pocket</h1>
    <p>남은 돈: <strong>\${remaining.toLocaleString()}원</strong></p>
    <input id="inputItem" placeholder="항목" />
    <input id="inputAmount" type="number" placeholder="금액" />
    <button onclick="addExpense()">지출 추가</button>
    <ul>\${expenses.map(e => '<li>' + e.item + ' - ' + e.amount.toLocaleString() + '원</li>').join('')}</ul>
  \`;
}

function addExpense() {
  const item = document.getElementById("inputItem").value;
  const amount = Number(document.getElementById("inputAmount").value);
  if (item && amount) {
    expenses.push({ item, amount });
    updateUI();
  }
}

window.onload = updateUI;