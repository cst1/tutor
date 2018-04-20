// not the case?

const ONE = 'One';
const TWO = 'Two';
const THREE = 'Three';
const NONE = 'None of the above';

const printMe = number => {
  switch (number) {
    case '1':
      console.log(ONE);
      break;
    case '2':
      console.log(TWO);
      break;
    case '3':
      console.log(THREE);
      break;
    default:
      console.log(NONE);
      break;
  }
};


printMe(2);
