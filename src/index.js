import _ from 'lodash';
import foo from './foo.js'
import bar from './bar.js'


const expressAndWebpack = () => {
  let body = document.querySelector('body');
  body.innerHTML = '';
  body.innerHTML = _.join(['Hello', 'express', '+', 'webpack', '+' , 'Babel'], ' ');
  body.innerHTML += `<br>${foo()}`;
  body.innerHTML += `<br>${bar()}`;
  return body;
}
expressAndWebpack();

if (module.hot) {
  module.hot.accept(['./foo.js', './bar.js'], () => {
    expressAndWebpack();
  });
};
