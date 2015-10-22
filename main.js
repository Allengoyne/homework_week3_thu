function calculator() {
  var num_one, num_two;
  var sign = '/';
  var answer = 0;

  function getNum1() {
    num_one = document.getElementById('num_one').value;
    return num_one;
  }
  function getNum2() {
    num_two = document.getElementById('num_two').value;
    return num_two;
  }
  function getSign() {
    sign = document.getElementById('sign').value;
    return sign;
  }
  function setAnswer() {
    answer = document.getElementById('answer').innerText = answer;
  }

  function calculate() {
     num_one = parseFloat(getNum1());
     num_two = parseFloat(getNum2());

    if (getSign() == '+') {
      answer = (num_one + num_two);

    } else if (getSign() == '-') {
      answer = (num_one - num_two);

    } else if (getSign() == '*') {
      answer = (num_one * num_two);

    } else {
      answer = (num_one / num_two);
    }
    setAnswer();

  }

  calculate();
}
