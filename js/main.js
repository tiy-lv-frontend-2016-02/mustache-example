$(document).ready(function(){
  var data = {
    name: 'Michael',
    students: [
      {
        fname: 'Chris',
        lname: 'Bergstrom'
      },
      {
        fname: 'Mark',
        lname: 'Medeiros'
      },
      {
        fname: 'Calvin',
        lname: 'Wilson'
      }
    ],
    car: {
      'type': 'truck'
    }
  };

  var template = $("#hereTemplate").text();

  var rendered = Mustache.render(template, data);
  $("#app").html(rendered);
});



// example
// $("#app").on('click', 'img', function () {

// })