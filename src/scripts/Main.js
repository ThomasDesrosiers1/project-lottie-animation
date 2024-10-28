import Icons from './utils/Icons';
import ComponentFactory from './ComponentFactory';
import LogoAnimation from './LogoAnimation';

class Main {
  constructor() {
    this.init();
  }

  init() {
    Icons.load();

    document.documentElement.classList.add('has-js');

    new ComponentFactory();
    new LogoAnimation();
  }
}
new Main();
