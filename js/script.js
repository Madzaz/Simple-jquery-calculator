$(document).ready(function () {
  function izvrsiOperaciju(operator) {
    var broj1 = parseInt($("#broj1").val());
    var broj2 = parseInt($("#broj2").val());
    var result;

    switch (operator) {
      case "saberi":
        result = broj1 + broj2;
        break;
      case "pomnozi":
        result = broj1 * broj2;
        break;
      case "podeli":
        if (broj1 === 0 || broj2 === 0) {
          $("#rezultat").text("Ne možete deliti sa 0");
          return;
        }
        result = broj1 / broj2;
        break;
      case "oduzmi":
        result = broj1 - broj2;
        break;
    }

    $("#rezultat").text(result);
  }

  $("#saberi, #pomnozi, #podeli, #oduzmi").click(function () {
    izvrsiOperaciju($(this).attr("id"));
  });
});
