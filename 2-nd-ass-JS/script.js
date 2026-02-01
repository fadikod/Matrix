const btn = document.querySelector('.btn');

btn.addEventListener('click', function (e) {
  e.preventDefault(); 

  document.querySelector('#my-form').style.background = 'red';


  document.body.classList.add('bg-dark');


  const ul = document.querySelector('.items');
  ul.lastElementChild.outerHTML = '<h1>Hello</h1>';


  btn.style.background = 'green';
});
