$(function() {

  var questionCounter = 1;

  var rails = 0;
  var drupal = 0;
  var android = 0;
  var design = 0;
  var net = 0;

  $("#submit").click(function(event) {
    if (questionCounter === 1) {
      if ($("input:radio[name=question1]:checked").val() === "1") {
        design += 3;
      } else {
        rails += 1;
        drupal += 1;
        android += 1;
        net += 1;
      }
    } else if (questionCounter === 2) {
      if ($("input:radio[name=question2]:checked").val() === "1") {
        drupal += 1;
      } else {
        rails += 1;
      }
    } else if (questionCounter === 3) {
      if ($("input:radio[name=question3]:checked").val() === "1") {
        rails += 1;
        drupal += 1;
        net += 1;
        design += 1;
      } else {
        android += 3;
      }
    } else if (questionCounter === 4) {
      if ($("input:radio[name=question4]:checked").val() === "1") {
        net += 2;
      } else {
        rails += 1;
        drupal += 1;
      }
    } else if (questionCounter === 5) {
      if ($("input:radio[name=question5]:checked").val() === "1") {
        drupal += 1;
        rails += 1;
        design += 1;
      } else {
        net += 1;
        android += 1
      }
    }
    $('#question' + questionCounter).hide();
    if (questionCounter < 5) {
      questionCounter += 1;
      $('#question' + questionCounter).fadeIn();
    } else {
      $("#submit").hide();
      console.log("rails: " + rails);
      console.log("drupal: " + drupal);
      console.log("android: " + android);
      console.log("net: " + net);
      console.log("design: " + design);
      $("#result").show();
    }

    event.preventDefault();
  });

});
