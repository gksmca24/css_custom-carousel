import CollectionSlider from '../components/CollectionSlider';


initiateCollectionSlider() {
  let ctSlider = new CollectionSlider('ctSlideBox', { minItems: 6 }); //minItems: 6, move: 'single'
  ctSlider.init();
}

render() {
    this.initiateCollectionSlider();
}