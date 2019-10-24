import '../styles/main.scss';

import util from './helpers/util';

const init = () => {
  util.printToDom('app', "Printing to Dom, Don't forget to change package.json, and npm Install");
  console.error('testing');
};

init();
