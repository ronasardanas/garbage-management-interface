
$(document).ready(function () {
 $(window).on('load', function () {
  $(".se-pre-con").fadeOut("slow");;
});

 
 $('#container').click(function(){
  $('#trashcan-modal').modal('toggle');
})

 function loadlink(){

  $.ajax({
    "url": "request.php",
    "type": 'POST',
    'data': { "getStatus" : 'get'},
    success: function(result) {
      computePercentage(5);
    },
    error: function (err) {
      console.log(err);
    }
  });
}

loadlink(); 
setInterval(function(){
  loadlink() 
}, 1000);

});



var total_goals = 100;
var percentage = 0;
var goals_completed = 0 ;

function computePercentage(value) {
  var distance = parseInt(value);
  percentage = (26 - (distance))/26;
  percentage = percentage *100;
  if(percentage>=100){
    goals_completed = 100;
  }else if(percentage<=0 || isNaN(percentage))
  {
    goals_completed = 0;
  }
  else
  {
    goals_completed = percentage
  }

  bar.animate(goals_completed/total_goals);
}

var bar = new ProgressBar.Circle(container, {
  color: '#aaa',
  // This has to be the same size as the maximum width to
  // prevent clipping
  strokeWidth: 5,
  trailWidth: 5,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#aaa', width: 5 },
  to: { color: '#FF9A00', width: 5 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('0%');
    } else if (value >=100){
      circle.setText("100%");
    }
    else {
      circle.setText(value+"%");
    }

  }
});
bar.text.style.fontFamily = '"Bebas"';
bar.text.style.fontSize = '5rem';
bar.text.style.color = '#FF9A00';





  // Number from 0.0 to 1.0
