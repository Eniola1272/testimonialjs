// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four ",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art. ",
  },
];

// select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

// set starting item
let currentItem = 0;

// Load initial item. DOM content loading
window.addEventListener("DOMContentLoaded", function () {
 showPerson(currentItem);
});


// show person based on item
function showPerson(person) {
   // img.src = reviews[person].img; we could write it like this as well but it is easier to declare a variable.
   const item = reviews[person];
  //img.src = reviews[person].img // instead of this, we assigned it to a variable called item

   img.src = item.img; // Image is gotten from object and is fed into the html image source
 
   author.textContent = item.name; // The object property anf their typeofs - id: number; name: string; job: string; img: string; text: string.  let me explain, the id, name, job, img, text are the object property name that we declared in the reviews array. number and string is the value type.
 
   job.textContent = item.job; //We use textContent method to change text in a selected element
 
   info.textContent = item.text;
 
}

// show next person 

// in this function, i'll add an event listener to the next button so that the next review shows up when we click it.
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  };
  showPerson(currentItem);
});

// show previous person
prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  };
  showPerson(currentItem);
});

// show random person
randomBtn.addEventListener("click", function () {
  currentItem = randomNumber();
  console.log(randomNumber());
  showPerson(currentItem);
})

function randomNumber() {
  return Math.floor(Math.random() * reviews.length);
}





