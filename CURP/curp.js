window.onload = function () {
  var name = document.getElementById('name'), lastnameone = document.getElementById('lastnameone'), lastnametwo = document.getElementById('lastnametwo'), year = document.getElementById('year'), month = document.getElementById('month'), day = document.getElementById('day'), state = document.getElementById('state'),  man = document.getElementById('m'),  woman = document.getElementById('f'), curpInput = document.getElementById('curp');
 
  function generateCurp() {
    var curp = ''; curp = lastnameone.value[0] || ''; curp += getFirstVowel(lastnameone.value); curp += lastnametwo.value[0] || ''; curp += name.value[0] || ''; curp += year.value || '';
    curp += month.value || ''; curp += day.value || ''; curp += man.checked ? 'M' : 'F'; curp += state.value || ''; curp += getFirstConsonant(lastnameone.value ) || '';
    curp += getFirstConsonant(lastnametwo.value ) || '';  curp += getFirstConsonant(name.value ) || '';

    curpInput.value = curp.toUpperCase();

    generateJSON();
  }

  function generateJSON() {
    var json = {
      name: name.value,
      ApellidoPaterno: lastnameone.value,
      ApellidoMaterno: lastnametwo.value,
      dob: {
        Año: year.value,
        Mes: month.value,
        Día: day.value
      },
      Estado: state.value,
      Sexo: man.checked ? 'M' : 'F'
      
    }
    document.getElementById('json').value = JSON.stringify(json);
  }

  var curpFields = document.getElementsByClassName('curp-field');

  for (var i = 0; i < curpFields.length; i++) {
    var ev = curpFields[i].type != 'text' ? 'click' : 'input';
    curpFields[i].addEventListener(ev, generateCurp);
  }

}

function getFirstVowel(word){
  for(var x = 1; x< word.length; x++){
    if(['a', 'e', 'i', 'o', 'u'].indexOf(word[x].toLowerCase()) !== -1) { return word[x]}
  }
  return 'x';
}

function getFirstConsonant(word){
  for(var x = 1; x< word.length; x++){
    if(['a', 'e', 'i', 'o', 'u'].indexOf(word[x].toLowerCase()) == -1) { return word[x]}
  }
  return 'x';
}

