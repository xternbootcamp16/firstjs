$(document).foundation()

document.querySelector('form').onsubmit = function(ev) {
  ev.preventDefault();
  var details = document.querySelector('.details');
  var name = this.name;
  var hairColor = this.hair_color;
  var age = this.age;
  var birthplace = this.birthplace;

  var colorDiv = '<div style="height: 100px; width: 100px; background-color: ' + hairColor.value + '"></div>';

  details.innerHTML += ' \
    <dl> \
      <dt>Name</dt> \
      <dd>' + name.value + '</dd> \
          \
      <dt>Hair Color</dt> \
      <dd>' + colorDiv + '</dd> \
        \
      <dt>Age</dt> \
      <dd>' + age.value + '</dd> \
        \
      <dt>Birthplace</dt> \
      <dd>' + birthplace.value + '</dd> \
    </dl>';
};
