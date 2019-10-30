// Your code goes here
document.querySelectorAll('.nav-link').forEach((el) => {
  el.addEventListener('mouseenter', () => {
    el.style.color = '#B22222';
  });
});

document.querySelectorAll('.nav-link').forEach((el) => {
  el.addEventListener('mouseleave', () => {
    el.style.color = '#000';
  });
});

document.querySelectorAll('h2').forEach((el) => {
  el.addEventListener('dblclick', () => {
    el.style.backgroundColor = '#32cd32';
    el.style.color = '#fff';
  });
});

document.querySelectorAll('h2').forEach((el) => {
  el.addEventListener('click', () => {
    el.style.backgroundColor = '#fff';
    el.style.color = '#000';
  });
});

let package = document.querySelectorAll('.btn');
package[0].addEventListener('click', () => {
  alert('You have signed up for Fun In The Sun!');
});

package[1].addEventListener('click', () => {
  alert('You have signed up for Mountain Excursion!');
});

package[2].addEventListener('click', () => {
  alert('You have signed up for the Island Getaway!');
});

const mainText = document.querySelectorAll('p').forEach((el) => {
  el.addEventListener('mouseenter', () => {
    el.style.background = '#B22222';
    el.style.color = '#FFF';
  });
  el.addEventListener('mouseleave', () => {
    el.style.background = '#FFF';
    el.style.color = '#000';
  });
});

const img1 = document.getElementById('map');

img1.addEventListener('mouseenter', () => {
  img1.setAttribute('class', 'rotated-image');
});

img1.addEventListener('mouseleave', () => {
  img1.setAttribute('class', 'unrotated-image');
});
