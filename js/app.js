//Obtener la referencia del evento
var btnActualizar = document.getElementById('btnActualizar');

//Agregar un event listener para cada click
btnActualizar.addEventListener('click',actualizar);

function actualizar()
{
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function ()
  {
    if (this.readyState == 4 && this.status == 200)
    {
      var response = JSON.parse(this.responseText);
      if (response.status == "ok")
      {
        response.students.forEach(function(student)
        {

        });
      }
    }
  };
  xhttp.open("GET","http://nyc.pixan.io/ajax/public/api/students",true);
  xhttp.send();
}
