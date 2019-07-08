let Slider = function (selector) {
    this.props = {
        selector: selector,
        options: {
            navPrev: '<img src="img/P_arrow_left.png" alt="image">',
            navNext: '<img src="img/P_arrow_right.png" alt="image">',
        },
        classes: {
            slider: 'sliderAdvertising',
            list: 'sliderAdvertising_list',
            slide: 'sliderAdvertising_slide',
            nav: {
                wrapper: 'sliderAdvertising_nav',
                prev: 'sliderAdvertising_nav__prev',
                next: 'sliderAdvertising_nav__next',
                event: 'navEvent'
            },
            dots: {
                wrapper: 'sliderAdvertising_dots',
                dot: 'sliderAdvertising_dots__dot',
                event: 'dotEvent',
            }
        },
        state: {
            pos: 0,
            active: 0,
            posDots: 0
        },
        elements: {}
    };
};

Slider.prototype.create = function () {

    const options = this.props.options,
        classes = this.props.classes,
        elements = this.props.elements;

    while (document.querySelectorAll(`${this.props.selector}:not(.${classes.slider})`).length > 0) {

        // slider wrapper
        elements.sliderWrap = document.querySelector(`${this.props.selector}:not(.${classes.slider})`);
        elements.sliderWrap.classList.add(classes.slider);

        // slider list
        elements.sliderList = document.createElement('div');
        elements.sliderList.classList.add(classes.list);
        for (let item of elements.sliderWrap.children) {
            item.classList.add(classes.slide);

        }
        elements.sliderSlides = elements.sliderWrap.innerHTML;
        elements.sliderList.innerHTML = elements.sliderSlides;
        elements.sliderWrap.innerHTML = null;
        elements.sliderWrap.append(elements.sliderList);

        // slider nav
        if (elements.sliderWrap.dataset.nav === 'true') {

            // wrapper
            elements.sliderNav = document.createElement('div');
            elements.sliderNav.classList.add(classes.nav.wrapper);
            elements.sliderWrap.append(elements.sliderNav);

            // nav prev
            elements.sliderNavPrev = document.createElement('span');
            elements.sliderNavPrev.classList.add(classes.nav.prev);
            elements.sliderNavPrev.classList.add(classes.nav.event);
            elements.sliderNavPrev.innerHTML = options.navPrev;
            elements.sliderNav.append(elements.sliderNavPrev);

            // nav next
            elements.sliderNavNext = document.createElement('span');
            elements.sliderNavNext.classList.add(classes.nav.next);
            elements.sliderNavNext.classList.add(classes.nav.event);
            elements.sliderNavNext.innerHTML = options.navNext;
            elements.sliderNav.append(elements.sliderNavNext);
        }

        // slider dots
        if (elements.sliderWrap.dataset.dots === 'true') {

            // wrapper
            elements.sliderDots = document.createElement('div');
            elements.sliderDots.classList.add(classes.dots.wrapper);
            elements.sliderDots.classList.add(classes.dots.event);
            elements.sliderWrap.append(elements.sliderDots);

            // dots
            for (let i = 0; i < elements.sliderList.children.length; i++) {

                // create dot
                let dot = document.createElement('span');
                dot.dataset.number = i;
                dot.classList.add(classes.dots.dot);
                if (i === 0) {
                    dot.classList.add('active');
                }

                // create preview in dot
                let preview = document.createElement('img');
                preview.src = elements.sliderList.children[i].dataset.preview;

                // append elem
                dot.append(preview);
                elements.sliderDots.append(dot);
            }
        }

    }
};

Slider.prototype.moveSlideNavPrev = function () {
    let self = this;
    self.props.state.active--;
    if (self.props.state.active === -1) {
        self.props.state.active = document.querySelector(`.${self.props.classes.list}`).children.length - 1
    }
    self.props.state.pos = self.props.state.active * -100;
    document.querySelector(`.${self.props.classes.list}`).style.transform = `translateX(${self.props.state.pos}%)`;
};

Slider.prototype.moveSlideNavNext = function () {
    let self = this;
    self.props.state.active++;
    if (self.props.state.active === document.querySelector(`.${self.props.classes.list}`).children.length) {
        self.props.state.active = 0
    }
    self.props.state.pos = self.props.state.active * -100;
    document.querySelector(`.${self.props.classes.list}`).style.transform = `translateX(${self.props.state.pos}%)`;
};

Slider.prototype.moveSlideDots = function (target) {
    let self = this;
    if (target) {
        let currentDot = target.closest(`.${self.props.classes.dots.dot}`);
        let currentDots = currentDot.closest(`.${self.props.classes.dots.wrapper}`).querySelectorAll(`.${self.props.classes.dots.dot}`);
        for (let dot of currentDots) {
            dot.classList.remove('active');
        }
        currentDot.classList.add('active');
        self.props.state.posDots = parseInt(currentDot.dataset.number) * -100;
        target.closest(`.${self.props.classes.slider}`).querySelector(`.${self.props.classes.list}`).style.transform = `translateX(${self.props.state.posDots}%)`;
    }
};

Slider.prototype.events = function () {
    let self = this;
    let prevButtons = document.querySelectorAll(`.${self.props.classes.nav.event}`);
    prevButtons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            let target = e.target;
            if (target.classList.contains(self.props.classes.nav.prev)) {
                self.moveSlideNavPrev();
            } else {
                self.moveSlideNavNext();
            }
        });
    });

    let prevDots = document.querySelectorAll(`.${self.props.classes.dots.event}`);
    prevDots.forEach(function (dot) {
        dot.addEventListener('click', function (e) {
            let target = e.target;
            self.moveSlideDots(target);
        });
    });
};

Slider.prototype.touch = function () {
    let self = this,
        touchstartX = 0,
        touchendX = 0;

    document.addEventListener('touchstart', function (event) {
        touchstartX = event.changedTouches[0].screenX;
    }, false);

    document.addEventListener('touchend', function (event) {
        touchendX = event.changedTouches[0].screenX;
        handleGesture();
    }, false);

    function handleGesture() {
        if (touchendX <= touchstartX) {
            self.moveSlideNavNext();

        }

        if (touchendX >= touchstartX) {
            self.moveSlideNavPrev();
        }
    }
};

Slider.prototype.init = function () {
    this.create();
    this.events();
    this.touch();
};

let slider = new Slider('.slider');
slider.init();

// Listen for orientation changes
window.addEventListener("orientationchange", function () {
    if (screen.orientation.angle === 90) {
        document.querySelector('.wrapper').classList.add('landscape');
    } else {
        document.querySelector('.wrapper').classList.remove('landscape');
    }

});

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.preview_left ').classList.add('visible');
    document.querySelector('.preview_center').classList.add('visible');
    document.querySelector('.preview_right ').classList.add('visible');
    document.querySelector('.preview_wrap_img ').classList.add('visible');
    setTimeout(function () {
        document.querySelector('.content ').classList.remove('hidden');
        document.querySelector('.preview ').classList.add('hidden');
    }, 3000);
});