const checkStringLength = (string, maxLength) => string.length <= maxLength;

const isPalindrome = (string) => {
  const normalized = string.toLowerCase().replaceAll(' ', '');
  for (let index = 0; index < normalized.length / 2; index++) {
    if (normalized[index] !== normalized[normalized.length - 1 - index]) {
      return false;
    }
  }
  return true;
};

const extractNumber = (value) => {
  const digits = String(value).replace(/[^0-9]/g, '');
  return parseInt(digits, 10);
};

checkStringLength('проверяемая строка', 20);
isPalindrome('Лёша на полке клопа нашёл ');
extractNumber('1 кефир, 0.5 батона');
