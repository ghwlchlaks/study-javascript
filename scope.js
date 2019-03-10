// var의 호이스팅

var yangpa5 = "Marry me";

function print_value() {
  console.log(yangpa5);

  var yangpa5 = "나 때문에";
  console.log(yangpa5);

  function nested() {
    console.log(yangpa5);

    yangpa5 = "사랑...그게뭔데";
    console.log(yangpa5);

    var yangpa5 = "한 사람";
    console.log(yangpa5);
  }
  nested();
}
print_value();
