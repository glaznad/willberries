const getGoods = () => {
  const links = document.querySelectorAll('.navigation-link');

  const getData = () => {
    fetch('https://willberries-850c6-default-rtdb.firebaseio.com/db.json')
      .then(res => res.json())
      .then(data => {
        console.log('data: ', data);
        localStorage.setItem('data', JSON.stringify(data));
      });
  }

  links.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      getData();
    });
  })

  localStorage.setItem('goods', JSON.stringify([1, 2, 3, 4]));

  const goods = localStorage.getItem('goods');
  console.log(JSON.parse(goods));

  console.log(localStorage);

  localStorage.removeItem('goods');

  console.log(localStorage);
};

getGoods();