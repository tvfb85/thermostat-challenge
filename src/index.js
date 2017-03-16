$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperature();

  var rotation = -90;

  $("#up").click(function(){
    if (thermostat.temperature < thermostat.MAX_TEMP) {
     rotation = (rotation + 5) ;
     $('#ticker').css({'transform' : 'rotate('+ rotation +'deg)'});
     thermostat.tempIncrease(1);
   }
     updateTemperature();
  });

  $("#down").click(function(){
    if (thermostat.temperature > 10) {
     rotation = (rotation - 5) ;
     $('#ticker').css({'transform' : 'rotate('+ rotation +'deg)'});
     thermostat.tempDecrease(1);
    }
     updateTemperature();
  });

  function updateTemperature() {
    $('#inner').attr('class', thermostat.setEnergyUsage());
    $('#temperature').text(thermostat.temperature);
  }

  $('#reset').click(function() {
      thermostat.reset();
      updateTemperature();
      rotation = -90;
      $('#ticker').css({'transform' : 'rotate('+ -90 +'deg)'});
    });

  $('#psm').click(function() {
    if (thermostat.powerSaving) {
      thermostat.powerSavingOff();
      $('#psm').toggleClass('on off');
    } else {
      thermostat.powerSavingOn();
      if (thermostat.temperature > 25) {
        thermostat.temperature = 25;
        updateTemperature();
        rotation = -65;
        $('#ticker').css({'transform' : 'rotate('+ rotation +'deg)'});
      }
        $('#psm').toggleClass('off on');
      }

    })

});
