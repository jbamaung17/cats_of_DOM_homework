const makeList = function(className){
  let list = document.createElement("ul");
  list.className = className;
  return list;
}

const makeListItem = function(label, data){
  let text = label + data;
  let listItem = document.createElement("li");
  listItem.innerText = text;
  return listItem;
}

const makeImgListItem = function(url){
  let listItem = document.createElement("li");
  listItem.innerHTML = `<img width="500" src=${url}>`;
  return listItem;
}

// make a new cat(name, fave food, image link)
const addCat = function(name, faveFood, imageURL){
  // make ul
  let list = makeList("cat");
  // make name li
  let nameTag = makeListItem('Name: ', name);
  // make food li
  let foodTag = makeListItem("Favourite Food: ", faveFood);
  // make img li
  let imageTag = makeImgListItem(imageURL);
  // nest liS in UL
  let tags = [nameTag, foodTag, imageTag];
  tags.forEach(tag => list.appendChild(tag));

  let cats = document.getElementById("cats");
  cats.appendChild(list);
}

const Cat = function(name, faveFood, img){
  this.name = name;
  this.faveFood = faveFood;
  this.img = img;
}

let cat1 = new Cat("Jim", "Bovril", "http://s3.crackedcdn.com/phpimages/photoshop/9/6/1/143961.jpg?v=1");
let cat2 = new Cat("Boba", "Sock Fluff", "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg");
let cat3 = new Cat("Barnaby", "Tuna", "https://68.media.tumblr.com/88d0fcf2b84a7b098dda839130597569/tumblr_okuo4teiql1uhevdso1_1280.jpg");
let cat4 = new Cat("Max", "Whiskas Tempations", "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg")

let cats = [cat1, cat2, cat3, cat4];

const app = function(){

  for (let cat of cats){
    addCat(cat.name, cat.faveFood, cat.img);
  }

}


window.onload = app;
