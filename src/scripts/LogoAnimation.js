import Lottie from 'lottie-web';

export default class LogoAnimation {
  constructor() {
    this.init();
  }

  init() {
    const lottie = Lottie;
    const animation = lottie.loadAnimation({
      container: document.getElementById('logo_animation'),
      renderer: 'svg',
      loop: false,
      autoplay: true,
      path: 'logo_animation.json',
    });
    console.log(animation);
  }
}
