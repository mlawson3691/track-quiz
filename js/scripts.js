$(function() {

  var questionCounter = 0;
  var rails = 0;
  var drupal = 0;
  var android = 0;
  var design = 0;
  var net = 0;

  $("#submit").click(function(event) {
    $('.alert').hide();

    if (questionCounter === 0 && $("#name").val()) {
      var name = $("#name").val();
      $(".name").text(name);
      questionCounter += 1;
      $("#nameForm").hide();
      $("#question1").fadeIn();
    } else if ($("input:radio[name=question" + questionCounter + "]:checked").val()) { // Make sure user answered the question before clicking submit

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
          $("#result i").addClass("devicon-ruby-plain");
        } else if (drupal >= rails && drupal >= android && drupal >= design && drupal >= net) {
          language = "PHP & Drupal";
          $("#result i").addClass("devicon-drupal-plain");
        } else if (android >= rails && android >= drupal && android >= design && android >= net) {
          language = "Java & Android";
          $("#result i").addClass("devicon-android-plain");
        } else if (design >= rails && design >= android && design >= drupal && design >= net) {
          language = "CSS & Design";
          $("#result i").addClass("devicon-css3-plain");
        } else if (net >= rails && net >= android && net >= drupal && net >= design) {
          language = "C# & .NET";
          $("#result i").addClass("devicon-csharp-plain");
        }
        $("#language").text(language);
        $("#result").fadeIn();
        $("#reset").fadeIn();
      }
    } else {
      $(".alert").fadeIn();
    }

    event.preventDefault();
  });

  $("#reset").click(function(){
    location.reload();
  });

});
