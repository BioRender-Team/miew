/* global Miew:false */
(function () {
  var viewer = new Miew({
    container: document.getElementsByClassName('miew-container')[0],
    load: '1CRN',
  });

  if (viewer.init()) {
    viewer.run();
  }

  const ul = document.getElementById('events');

  viewer.addEventListener('rotate', (e) => {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode('rotate: ' + e.angle));
    li.style.backgroundColor = '#ffca99';
    ul.appendChild(li);
  });

  viewer.addEventListener('zoom', (e) => {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode('factor: ' + e.factor));
    li.style.backgroundColor = '#bdffc4';
    ul.appendChild(li);
  });
}());
