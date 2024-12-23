function createRandomPromise(promiseName) {
  const timeTaken = (Math.random() * 2 + 1).toFixed(3);
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ name: promiseName, timeTaken: timeTaken });
    }, timeTaken * 1000);
  });
}

const outputTable = document.getElementById('output');
outputTable.innerHTML = `
  <tr>
    <td colspan="2" class="text-center">Loading...</td>
  </tr>
`;

const promises = [
  createRandomPromise('Promise 1'),
  createRandomPromise('Promise 2'),
  createRandomPromise('Promise 3'),
  createRandomPromise('Promise 4')
];

Promise.all(promises).then(results => {
  outputTable.innerHTML = '';

  let totalTime = 0;
  results.forEach(result => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${result.name}</td>
      <td>${result.timeTaken} s</td>
    `;
    outputTable.appendChild(row);
    totalTime += parseFloat(result.timeTaken);
  });

  const totalRow = document.createElement('tr');
  totalRow.innerHTML = `
    <td>Total</td>
    <td>${totalTime.toFixed(3)} s</td>
  `;
  outputTable.appendChild(totalRow);
});

