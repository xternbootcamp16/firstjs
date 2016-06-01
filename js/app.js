$(document).foundation();

var buildColorDiv = function(color) {
  if (color === undefined) {
    color = 'red';
  }
  return '<div style="height: 100px; width: 100px; background-color: ' + color + '"></div>'
};

var buildList = function(listValues) {
  var dl = document.createElement('dl');
  dl.style.border = '1px solid #ff0033';
  dl.appendChild(buildListItem('Name', listValues.name));
  dl.appendChild(buildListItem('Hair Color', listValues.hairColor));
  dl.appendChild(buildListItem('Age', listValues.age));
  dl.appendChild(buildListItem('Birthplace', listValues.birthplace));
  return dl;
};

var buildListItem = function(term, definition) {
  var li = document.createElement('li');
  var dt = document.createElement('dt');
  var dd = document.createElement('dd');
  dt.innerHTML = term;
  dd.innerHTML = definition;
  li.appendChild(dt);
  li.appendChild(dd);
  return li;
};

var addValuesToDetails = function(ev) {
  ev.preventDefault();
  var details = document.querySelector('.details');
  var formValues = {
    name: this.name.value,
    age: this.age.value,
    birthplace: this.birthplace.value,
    hairColor: buildColorDiv(this.hairColor.value)
  };

  details.appendChild(buildList(formValues));
};

document.querySelector('form').onsubmit = addValuesToDetails;
