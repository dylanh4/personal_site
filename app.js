'use strict';

var menu = document.getElementsByClassName('handle');
var nav = document.getElementById('header_ul');

function handleClick() {
  if (nav.className === 'inactive') {
    nav.className === 'active';
  }
  else (nav.className === 'inactive');
}

menu.addEventListener('click', handleClick);
