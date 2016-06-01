$(document).foundation();

var buildColorDiv = function(color) {
  return '<div style="height: 100px; width: 100px; background-color: ' + color + '"></div>'
};

var buildList = function(listValues = {}) {
  return ' \
    <dl> \
      <dt>Name</dt> \
      <dd>' + listValues.name + '</dd> \
          \
      <dt>Hair Color</dt> \
      <dd>' + listValues.hairColor + '</dd> \
        \
      <dt>Age</dt> \
      <dd>' + listValues.age + '</dd> \
        \
      <dt>Birthplace</dt> \
      <dd>' + listValues.birthplace + '</dd> \
    </dl>';
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

  details.innerHTML += buildList(formValues);
};

document.querySelector('form').onsubmit = addValuesToDetails;
