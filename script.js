const modalWrapper = document.querySelector('.modal-wrapper');
const tableUsers = document.querySelector('.table-users');
let id;

// Create element and render users
const renderUser = doc => {
  const tr = `
    <tr data-id='${doc.id}'>
      <td>${doc.data().firstName}</td>
      <td>${doc.data().firstTest}</td>
      <td>${doc.data().secondTest}</td>
    </tr>
  `;
  tableUsers.insertAdjacentHTML('beforeend', tr);
}

// Real time listener
db.collection('users').onSnapshot(snapshot => {
  snapshot.docChanges().forEach(change => {
    if(change.type === 'added') {
      renderUser(change.doc);
    }
  })
})

