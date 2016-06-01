$(document).foundation();

var BasicForm = {

  init: function() {
    document.querySelector('form').onsubmit = this.addValuesToDetails;
  },

  buildColorDiv: function(color) {
    if (color === undefined) {
      color = 'red';
    }
    return '<div style="height: 100px; width: 100px; background-color: ' + color + '"></div>';
  },

  buildList: function(listValues) {
    var dl = document.createElement('dl');
    dl.style.border = '1px solid #ff0033';
    dl.appendChild(this.buildListItem('Name', listValues.name));
    dl.appendChild(this.buildListItem('Hair Color', listValues.hairColor));
    dl.appendChild(this.buildListItem('Age', listValues.age));
    dl.appendChild(this.buildListItem('Birthplace', listValues.birthplace));
    return dl;
  },

  buildListItem: function(term, definition) {
    var li = document.createElement('li');
    var dt = document.createElement('dt');
    var dd = document.createElement('dd');
    dt.innerHTML = term;
    dd.innerHTML = definition;
    li.appendChild(dt);
    li.appendChild(dd);
    return li;
  },

  addValuesToDetails: function(ev) {
    ev.preventDefault();
    var details = document.querySelector('.details');
    var formValues = {
      name: this.name.value,
      age: this.age.value,
      birthplace: this.birthplace.value,
      hairColor: BasicForm.buildColorDiv(this.hairColor.value)
    };

    details.appendChild(BasicForm.buildList(formValues));
  }
};

BasicForm.init();
