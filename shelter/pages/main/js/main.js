window.onload = function () {
   clickOnBurgerHandler();
   removeBurgerMenuHandler();
}

//--------------'burger menu' apear & hide script---------------------------
const burger_logo = document.querySelector('.burger__logo');
const burger_menu = document.querySelector('.burger__navigation');
const burger_span = document.querySelector('.logo__span');

const clickOnBurgerHandler = () => {
   burger_logo.addEventListener('click', function (e) {
      if (e.currentTarget === burger_logo || e.currentTarget === burger_span) {
         document.body.classList.toggle('_lock');
         document.body.classList.toggle('_open');
         burger_logo.classList.toggle('_active');
         burger_menu.classList.toggle('_active');
         e.stopPropagation();
      }
   });
};

const removeBurgerMenuHandler = () => {
   document.body.addEventListener('click', function (e) {
      if (e.target !== burger_logo && e.target !== burger_menu) {
         burger_menu.classList.remove('_active');
         burger_logo.classList.remove('_active');
         document.body.classList.remove('_open');
         document.body.classList.remove('_lock');
      };
   });
};
//---------------------------------------------------------
//-------------modal-window--------------------------------
const pets = [
   {
      id: 0,
      name: "Charly",
      img: "assets/images/our-friends/pets-charly.png",
      type: "Dog",
      breed: "Jack Russell Terrier",
      description: "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      age: "8 years",
      inoculations: ["bordetella bronchiseptica", "leptospirosis"],
      diseases: ["deafness", "blindness"],
      parasites: ["lice", "fleas"]
   },
   {
      id: 1,
      title: "Jennifer",
      img: "assets/images/our-friends/pets-jennifer.png",
      type: "Dog",
      breed: "Labrador",
      description: "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      age: "2 months",
      inoculations: ["none"],
      diseases: ["none"],
      parasites: ["none"]
   },
   {
      id: 2,
      name: "Sophia",
      img: "assets/images/our-friends/pets-sophia.png",
      type: "Dog",
      breed: "Shih tzu",
      description: "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      age: "1 month",
      inoculations: ["parvovirus"],
      diseases: ["none"],
      parasites: ["none"]
   },
   {
      id: 3,
      name: "Woody",
      img: "assets/images/our-friends/pets-woody.png",
      type: "Dog",
      breed: "Golden Retriever",
      description: "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      age: "3 years 6 months",
      inoculations: ["adenovirus", "distemper"],
      diseases: ["right back leg mobility reduced"],
      parasites: ["none"]
   },
   {
      id: 4,
      name: "Scarlett",
      img: "assets/images/our-friends/pets-scarlet.png",
      type: "Dog",
      breed: "Jack Russell Terrier",
      description: "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      age: "3 months",
      inoculations: ["parainfluenza"],
      diseases: ["none"],
      parasites: ["none"]
   },
   {
      id: 5,
      name: "Katrine",
      img: "assets/images/our-friends/pets-katrine.png",
      type: "Cat",
      breed: "British Shorthair",
      description: "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      age: "6 months",
      inoculations: ["panleukopenia"],
      diseases: ["none"],
      parasites: ["none"]
   },
   {
      id: 6,
      name: "Timmy",
      img: "assets/images/our-friends/pets-timmy.png",
      type: "Cat",
      breed: "British Shorthair",
      description: "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      age: "2 years 3 months",
      inoculations: ["calicivirus", "viral rhinotracheitis"],
      diseases: ["kidney stones"],
      parasites: ["none"]
   },
   {
      id: 7,
      name: "Freddie",
      img: "assets/images/our-friends/pets-freddy.png",
      type: "Cat",
      breed: "British Shorthair",
      description: "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      age: "2 months",
      inoculations: ["rabies"],
      diseases: ["none"],
      parasites: ["none"]
   },
   {
      id: 8,
      name: "Charly",
      img: "assets/images/our-friends/pets-charly.png",
      type: "Dog",
      breed: "Jack Russell Terrier",
      description: "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      age: "8 years",
      inoculations: ["bordetella bronchiseptica", "leptospirosis"],
      diseases: ["deafness", "blindness"],
      parasites: ["lice", "fleas"]
   },
   {
      id: 9,
      title: "Jennifer",
      img: "assets/images/our-friends/pets-jennifer.png",
      type: "Dog",
      breed: "Labrador",
      description: "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      age: "2 months",
      inoculations: ["none"],
      diseases: ["none"],
      parasites: ["none"]
   }
]

const toHTML = pet => `
<div class="card-wrapper" id=${pet.id}>
   <div class="our-friends__card pet-card">
      <img class="pet-card__image" src="${pet.img}" alt="${pet.name}">
         <h4 class="pet-card__title">${pet.name}</h4>
         <button class="pet-card__button" data-btn="open" data-id=${pet.id}>Learn more</button>
   </div>
</div>
`


function render() {
   const html = pets.map(toHTML).join('')
   document.querySelector('#pets').innerHTML = html
}
render()


const modal = $.modal({
   closable: true,
})

document.addEventListener('click', event => {
   const btnType = event.target.dataset.btn
   const id = +event.target.dataset.id//плюсом приобразоуваем строку id к числу
   const pet = pets.find(p => p.id === id)

   if (btnType === 'open') {

      modal.setTitle(`
      <h2>${pet.name}</h2>
`)

      modal.setSubtitle(`
      <span>${pet.type} - </span><span>${pet.breed}</span>
`)

      modal.setImage(`
      <img class="modal__image" src=${pet.img}></img>
`)

      modal.setContent(`
      <p>${pet.description}</p>
`)

      modal.setAge(`
<li>Age: ${pet.age}</li>
`)

      modal.setInoculations(`
<li>Inoculations: ${pet.inoculations}</li>
`)

      modal.setDiseases(`
<li>Diseases: ${pet.diseases}</li>
`)

      modal.setParasites(`
<li>Parasites: ${pet.parasites}</li>
`)

      modal.open()
      console.log(id, pet)
   }
})

//--------------'endless slider'----------------------------------------------------- 

  let index = 1;
  let Slider = function () {
     this.box = document.querySelector('.slider-window');
     this.slidesBox = document.querySelector('.slider-itself');
     this.slides = document.querySelectorAll('.card-wrapper');
     this.btns = document.querySelectorAll('.slider__button');
     this.size = this.box.clientWidth;

     this.position();
     this.carousel();
  };
  Slider.prototype.position = function () {
     let size = this.size;
     this.slidesBox.style.transform = 'translateX(' + (-index * size) + 'px)';
  };

  Slider.prototype.carousel = function () {
     let i;
     let max = this.btns.length;
     let that = this;
     for (i = 0; i < max; i += 1) {
        that.btns[i].addEventListener('click', Slider[that.btns[i].id].bind(null, that));
     };
  };

  Slider.prev = function (box) {
     box.slidesBox.style.transition = 'transform 1s';
     let size = box.size;
     index <= 0 ? false : index--;
     box.slidesBox.style.transform = 'translateX(' + (-index * size) + 'px)';
     box.jump();
  };

  Slider.next = function (box) {
     box.slidesBox.style.transition = 'transform 1s';
     let max = box.slides.length;
     let size = box.size;
     index >= max - 1 ? false : index++;
     box.slidesBox.style.transform = 'translateX(' + (-index * size) + 'px)';
     box.jump();
  };

  Slider.prototype.jump = function () {
     let that = this;
     let size = this.size;
     this.slidesBox.addEventListener('transitionend', function () {
        that.slides[index].id === '0' ? index = that.slides.length - 2 : index;
        that.slides[index].id === '9' ? index = 1 : index;
        that.slidesBox.style.transition = 'none';
        that.slidesBox.style.transform = 'translateX(' + (-index * size) + 'px)';
     });
  };

  new Slider();

//------------------------------------------------------------------------------------ 

