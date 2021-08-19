function telephoneCheck(str) {
    let regEx = /^(1\s?)?(\d{3}|\(\d{3}\))(-?|\s?)?\d{3}(-?|\s?)?\d{4}$/;
    return regEx.test(str);
  }