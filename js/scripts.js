// Business Logic //
function validateForm() {
  return false;
};

function add(q1, q2, q3, q4, q5) {
  return q1 + q2 + q3 + q4 + q5;
};



// User Interface Logic//
$(document).ready(function () {
  $("form#questionaire").submit(function (event) {
    event.preventDefault();
    const userNameInput = $("input#userName").val();
    const q1 = parseInt($("#select1").val());
    const q2 = parseInt($("input:radio[name=q2]:checked").val());
    const q3 = parseInt($("#select2").val());
    const q4 = parseInt($("input:radio[name=q4]:checked").val());
    const q5 = parseInt($("#select3").val());

    let formValidation = validateForm()
    const result = add(q1, q2, q3, q4, q5)


    $("#questionaire").toggle();

    $(".userName").text(userNameInput);

    if (formValidation === "") {
      alert("Must enter your name")
    }

    if (result >= 13) {
      $('#result1').show();
    } else if (result < 12 && result > 6) {
      $('#result2').show();
    } else {
      $('#result3').show();
    }

  });
});