
class CollectionSlider 
{
    constructor(wrapperId, options) {
        this.counter = 1;
        this.translateR = 0;
        this.options = options;
        this.wrapperId = wrapperId;
    }

    init() {
        this.initElements();
        this.calculateDimensions();
        this.updateControls();
        this.addEventListeners();
    }

    calculateDimensions() {
        this.slideCount = this.slidesEl.length;
        this.ctSlideBoxEl.style.width = 180 * this.slideCount + 'px';
    }
    
    updateControls() {
        if(this.slideCount <= this.options.minItems) {
            this.prevEl.classList.add('disabled');
            this.nextEl.classList.add('disabled');
        }
    }

    initElements() {
        this.ctSlideBoxEl = document.querySelector('#' + this.wrapperId + ' .cf_ct_box');
        this.prevEl = document.querySelector('#' + this.wrapperId + ' .prev');
        this.nextEl = document.querySelector('#' + this.wrapperId + ' .next');
        this.slidesEl = document.querySelectorAll('.cf_ct_box a');
    }

    addEventListeners() {
        this.prevEl.addEventListener('click', () => {
            if(this.options.move === 'single') {
                this.slide('Prev', this.options.minItems);
            } else {
                this.slideAll('Prev', this.options.minItems);
            }
        });

        this.nextEl.addEventListener('click', () => {
            if(this.options.move === 'single') {
                this.slide('Next', this.options.minItems);
            } else {
                this.slideAll('Next', this.options.minItems);
            }
        });
    }
    
    slide(angle, alreadyshow) {
        if(angle == 'Next' && this.counter<=this.slideCount-alreadyshow){
            this.prevEl.classList.remove('disabled');

            this.translateR = (-100/this.slideCount)*this.counter;

            this.ctSlideBoxEl.style.transform = "translateX("+this.translateR+"%)";
            this.counter = this.counter+1;
            if(this.counter == this.slideCount-(alreadyshow-1)){
                this.nextEl.classList.add('disabled')
            }
        }

        if(angle == 'Prev' && this.counter>1){
            this.nextEl.classList.remove('disabled');
            this.translateR = this.translateR + (100/this.slideCount);
            this.ctSlideBoxEl.style.transform = "translateX("+this.translateR+"%)";
            this.counter = this.counter-1;
            if(this.counter === 1){
                this.prevEl.classList.add('disabled');
            }
        }
    }

    slideAll(angle, alreadyshow) {
        if(angle == 'Next' && this.counter<this.slideCount/alreadyshow){
            this.prevEl.classList.remove('disabled');

            this.translateR = (-100/(this.slideCount/alreadyshow))*this.counter;

            this.ctSlideBoxEl.style.transform = "translateX("+this.translateR+"%)";
            this.counter = this.counter+1;
            if(this.counter == (this.slideCount/alreadyshow)){
                this.nextEl.classList.add('disabled')
            }
        }

        if(angle == 'Prev' && this.counter>1){
            this.nextEl.classList.remove('disabled');
            this.translateR = this.translateR + (100/(this.slideCount/alreadyshow));
            this.ctSlideBoxEl.style.transform = "translateX("+this.translateR+"%)";
            this.counter = this.counter-1;
            if(this.counter === 1){
                this.prevEl.classList.add('disabled');
            }
        }
    }
}

export default CollectionSlider;