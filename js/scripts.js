$(function() {

  var questionCounter = 1;
  var rails = 0;
  var drupal = 0;
  var android = 0;
  var design = 0;
  var net = 0;

  $("#submit").click(function(event) {
    $('.alert').hide();
    // Make sure user answered the question before clicking submit
    if ($("input:radio[name=question" + questionCounter + "]:checked").val()) {

      // Based on the current question, increase the user's score for each language based on their answers
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

      // Hide the current question and show either the next one or the final result
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

        var language;

        if (rails >= drupal && rails >= android && rails >= design && rails >= net) {
          language = "Ruby & Rails";
        } else if (drupal >= rails && drupal >= android && drupal >= design && drupal >= net) {
          language = "PHP & Drupal";
        } else if (android >= rails && android >= drupal && android >= design && android >= net) {
          language = "Java & Android";
        } else if (design >= rails && design >= android && design >= drupal && design >= net) {
          language = "CSS & Design";
        } else if (net >= rails && net >= android && net >= drupal && net >= design) {
          language = "C# & .NET";
        }
        $("#language").text(language);
        $("#result").show();
      }
    } else {
      $(".alert").fadeIn();
    }

    event.preventDefault();
  });

});
