const filterInput = document.getElementById('filterInput');

function filterNames() {
  // console.log('I Work 🤷‍♂️')
  const filterValue = document
    .getElementById('filterInput')
    .value.toUpperCase();
  console.log(filterValue);
  const ul = document.getElementById('names');
  const li = ul.querySelectorAll('li.collection-item');
  for (let i = 0; i < li.length; i++) {
    let a = li[i].getElementsByTagName('a')[0];
    // if matched
    if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      // if there is a match
      li[i].style.display = '';
    } else {
      li[i].style.display = 'none';
    }
  }
}

// EVENT LISTENERS
filterInput.addEventListener('keyup', filterNames);
