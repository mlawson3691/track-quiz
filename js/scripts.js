$(function() {

  var questionCounter = 0;
  var rails = 0;
  var drupal = 0;
  var android = 0;
  var design = 0;
  var net = 0;

  // Based on the current question, increase the user's score for each language based on their answers
  var score = function(question) {
    if (question === 1) {
      if ($("input:radio[name=question1]:checked").val() === "1") {
        design += 3;
      } else {
        rails += 1;
        drupal += 1;
        android += 1;
        net += 1;
      }
    } else if (question === 2) {
      if ($("input:radio[name=question2]:checked").val() === "1") {
        drupal += 1;
      } else {
        rails += 1;
      }
    } else if (question === 3) {
      if ($("input:radio[name=question3]:checked").val() === "1") {
        rails += 1;
        drupal += 2;
        net += 1;
        design += 1;
      } else {
        android += 3;
      }
    } else if (question === 4) {
      if ($("input:radio[name=question4]:checked").val() === "1") {
        net += 2;
      } else {
        rails += 2;
        drupal += 1;
      }
    } else if (question === 5) {
      if ($("input:radio[name=question5]:checked").val() === "1") {
        drupal += 1;
        design += 1;
        android += 1;
      } else {
        net += 1;
        android += 1;
        design += 1;
      }
    }
  };

  // Evaluates and displays the appropriate language, links, and icons based on user's score
  var evaluate = function() {

    var language, trackLink;

    if (rails >= drupal && rails >= android && rails >= design && rails >= net) {
      language = "Ruby & Rails";
      $("#icon1").addClass("devicon-ruby-plain");
      $("#icon2").addClass("devicon-rails-plain");
      trackLink = "<a href='http://www.epicodus.com/ruby' target='_blank'>" + language + "</a>";
    } else if (drupal >= rails && drupal >= android && drupal >= design && drupal >= net) {
      language = "PHP & Drupal";
      $("#icon1").addClass("devicon-php-plain");
      $("#icon2").addClass("devicon-drupal-plain");
      trackLink = "<a href='http://www.epicodus.com/php' target='_blank'>" + language + "</a>";
    } else if (android >= rails && android >= drupal && android >= design && android >= net) {
      language = "Java & Android";
      $("#icon1").addClass("devicon-java-plain");
      $("#icon2").addClass("devicon-android-plain");
      trackLink = "<a href='http://www.epicodus.com/java' target='_blank'>" + language + "</a>";
    } else if (design >= rails && design >= android && design >= drupal && design >= net) {
      language = "CSS & Design";
      $("#icon1").addClass("devicon-css3-plain");
      $("#icon2").hide();
      trackLink = "<a href='http://www.epicodus.com/css' target='_blank'>" + language + "</a>";
    } else if (net >= rails && net >= android && net >= drupal && net >= design) {
      language = "C# & .NET";
      $("#icon1").addClass("devicon-csharp-plain");
      $("#icon2").addClass("devicon-windows8-original");
      trackLink = "<a href='http://www.epicodus.com/c-sharp' target='_blank'>" + language + "</a>";
    }

    $("#trackLink").html(trackLink);
    $("#language").text(language);
  };

  // Next Button
  $("#submit").click(function(event) {
    $('.alert').hide();

    if (questionCounter === 0 && $("#name").val()) { // first successful button click
      var name = $("#name").val();
      $(".name").text(name);
      questionCounter += 1;
      $("#nameForm").hide();
      $("#question1").fadeIn();
    } else if ($("input:radio[name=question" + questionCounter + "]:checked").val()) { // subsequent successful button clicks

      score(questionCounter);

      // Hide the current question and show either the next one or the final result
      $('#question' + questionCounter).hide();
      if (questionCounter < 5) {
        questionCounter += 1;
        $('#question' + questionCounter).fadeIn();
      } else {
        $("#submit").hide();

        evaluate();

        $("#result").fadeIn();
        $("#reset").fadeIn();
      }
    } else {
      $(".alert").fadeIn();
    }

    event.preventDefault();
  });

  // "Take it Again" Button
  $("#reset").click(function(){
    location.reload();
  });
});
