
function add(q1, q2, q3, q4, q5) {
  return q1 + q2 + q3 + q4 + q5;
};




$(document).ready(function () {
  $("form#questionaire").submit(function (event) {
    event.preventDefault();
    const q1 = parseInt($("#select1").val());
    const q2 = parseInt($("input:radio[name=q2]:checked").val());
    const q3 = parseInt($("#select2").val());
    const q4 = parseInt($("input:radio[name=q4]:checked").val());
    const q5 = parseInt($("#select3").val());

    const result = add(q1, q2, q3, q4, q5)
    // $("#test").text(result);

    if (result >= 14) {
      $('#result1').show();
    } else if (result < 13 && result > 7) {
      $('#result2').show();
    } else {
      $('#result3').show();
    }



  });
});