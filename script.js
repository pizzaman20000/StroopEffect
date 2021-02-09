const modalWrapper = document.querySelector('.modal-wrapper');
const tableUsers = document.querySelector('.table-users');
let id;

function get(name){
  if(name=(new RegExp('[?&]'+encodeURIComponent(name)+'=([^&]*)')).exec(location.search))
     return decodeURIComponent(name[1]);
}

// Create element and render users
const renderUser = (doc, index) => {
  const tr = `
    <tr data-id='${doc.id}'>
      <td>${index}</td>
      <td>${doc.data().name}</td>
      <td>${doc.data().time}</td>
    </tr>
  `;
  tableUsers.insertAdjacentHTML('beforeend', tr);
}

function initDatabase()
{
  let test_name = get('test_name');
  console.log(test_name);
  if (test_name==undefined)
    test_name = 'group1';

  db.collection(test_name).onSnapshot(snapshot => {
    var index = 1;
    snapshot.docChanges().forEach(change => {
      if(change.type === 'added') {
        renderUser(change.doc, index);
        index++;
      }
    })
  })
}

initDatabase();
