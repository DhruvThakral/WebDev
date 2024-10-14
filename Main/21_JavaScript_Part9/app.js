// let smallImages = document.getElementsByClassName("oldImg");

// for(let i=0; i<smallImages.length; i++){
//     smallImages[i].src="assets/spiderman_img.png";
//     console.log(`value of image no. ${i} is changed.`);
// }


// console.dir(document.querySelectorAll(".div a"));


// let links = document.querySelectorAll(".box a");

// for(let i=0; i<links.length; i++){
//     links[i].style.color = 'red';
// }



let para1 = document.createElement('p');

para1.innerText="Hi, I'm red.";

document.querySelector('body').append(para1);

para1.classList.add('red');



let h = document.createElement('h3');

h.innerText = "I'm a blue h3!";

document.querySelector('body').append(h);

h.classList.add('blue');





let d = document.createElement('div');
d.innerHTML="hi";
document.querySelector('body').append(d);
d.classList.add('uu');

let h1 = document.createElement('h1');
h1.innerText = "Hi! I'm inside of div.";
let para2 = document.createElement('p');
para2.innerText = "ME TOO!!";
d.append(h1);
d.append(para2);

document.querySelector('body').append(d);
