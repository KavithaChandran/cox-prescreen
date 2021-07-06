//-----Function to count the KeyValues----//
//----CountValue button function----//
function keyValueTotals() {
   //---Initialization of DOM variables and converting the value to lowercase---//
  let userInput = document.getElementById("keyValPairs").value.toLowerCase();
  userInput = userInput.replace(/ /g, "");
  let input = userInput.split("\n");
  let obj = {};
  for (let i = 0; i < input.length; i++) {
    let keyValues = input[i].split(":");
    if (obj.hasOwnProperty(
        keyValues[0])) {
      let value = obj[keyValues[0]];
      //--count is parsed to integer(string to integer)--//
      value += parseInt(keyValues[1]);
      obj[keyValues[0]] = value;
    } else {
      obj[keyValues[0]] = parseInt(keyValues[1]);
    }
  }
//---Output & Palindrome Function---//
  let output = "";
  $.each(obj, function (key, value) {
    console.log(key);
    key = key.toLowerCase().replace(/[^a-z]+/g, "");
    if (key === key.split("").reverse().join("")) {
      output +=
        "<p>The total for <span>" +
        key +
        "</span>(prescreen-palindrome) is <span>" +
        value +
        "</span>.</p>";
    } else {
      output +=
        "<p>The total for <span>" +
        key +
        "</span> is <span>" +
        value +
        "</span>.</p>";
    }
  });
  $(".prescreen-output").html(output);
}

//--Clear button function---//
function clearTextarea() {
  document.getElementById("keyValPairs").value = "";
  document.getElementById("prescreen-output").innerHTML = "";
}
