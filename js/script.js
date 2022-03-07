var price = 0;
function pricesort(){
  if(price == 0){
    pricesorthigh();
  }
  if(price == 1){
    pricesortlow();
  }
}
function pricesorthigh(){
  document.getElementById("shop").style.flexDirection = "row-reverse";
  document.getElementById("pricesortbutton").innerHTML = "Sort by Price: Lowest to Highest"
  price++;
  console.log(price);
}
function pricesortlow(){
  document.getElementById("shop").style.flexDirection = "row";
  document.getElementById("pricesortbutton").innerHTML = "Sort by Price: Highest to Lowest"
  price--;
  console.log(price);
}

var cartprice;

function addCartaxolotl(){
  localStorage.setItem('value1', 'kaxolotl');
  console.log("axolotl");
  document.getElementById("cartbutton").style.backgroundColor = "rgb(41, 197, 101)";
  document.getElementById("cartbutton").style.border = "solid .25vw rgb(41, 197, 101)";
  document.getElementById("cartbutton").innerHTML = "Added to Cart &#10003;";
  var cartprice = cartprice+3.98;
}
function addCartcow(){
  localStorage.setItem('value2', 'scow');
  console.log("cow");
  document.getElementById("cartbutton").style.backgroundColor = "rgb(41, 197, 101)";
  document.getElementById("cartbutton").style.border = "solid .25vw rgb(41, 197, 101)";
  document.getElementById("cartbutton").innerHTML = "Added to Cart &#10003;";
  var cartprice = cartprice+8.98;
}
function addCartcrab(){
  localStorage.setItem('value3', 'mcrab');
  console.log("crab");
  document.getElementById("cartbutton").style.backgroundColor = "rgb(41, 197, 101)";
  document.getElementById("cartbutton").style.border = "solid .25vw rgb(41, 197, 101)";
  document.getElementById("cartbutton").innerHTML = "Added to Cart &#10003;";
  var cartprice = cartprice+15.98;
}
function addCartshark(){
  localStorage.setItem('value4', 'lshark');
  console.log("shark");
  document.getElementById("cartbutton").style.backgroundColor = "rgb(41, 197, 101)";
  document.getElementById("cartbutton").style.border = "solid .25vw rgb(41, 197, 101)";
  document.getElementById("cartbutton").innerHTML = "Added to Cart &#10003;";
  var cartprice = cartprice+29.98;
}
function addCartnarwhal(){
  localStorage.setItem('value5', 'xlnarwhal');
  console.log("narwhal");
  document.getElementById("cartbutton").style.backgroundColor = "rgb(41, 197, 101)";
  document.getElementById("cartbutton").style.border = "solid .25vw rgb(41, 197, 101)";
  document.getElementById("cartbutton").innerHTML = "Added to Cart &#10003;";
  var cartprice = cartprice+44.98;
}

function magnify(imgID, zoom) {
    var img, glass, w, h, bw;
    img = document.getElementById(imgID);
    /*create magnifier glass:*/
    glass = document.createElement("DIV");
    glass.setAttribute("class", "img-magnifier-glass");
    /*insert magnifier glass:*/
    img.parentElement.insertBefore(glass, img);
    /*set background properties for the magnifier glass:*/
    glass.style.backgroundImage = "url('" + img.src + "')";
    glass.style.backgroundRepeat = "no-repeat";
    glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
    bw = 3;
    w = glass.offsetWidth / 2;
    h = glass.offsetHeight / 2;
    /*execute a function when someone moves the magnifier glass over the image:*/
    glass.addEventListener("mousemove", moveMagnifier);
    img.addEventListener("mousemove", moveMagnifier);
    /*and also for touch screens:*/
    glass.addEventListener("touchmove", moveMagnifier);
    img.addEventListener("touchmove", moveMagnifier);
    function moveMagnifier(e) {
      var pos, x, y;
      /*prevent any other actions that may occur when moving over the image*/
      e.preventDefault();
      /*get the cursor's x and y positions:*/
      pos = getCursorPos(e);
      x = pos.x;
      y = pos.y;
      /*prevent the magnifier glass from being positioned outside the image:*/
      if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
      if (x < w / zoom) {x = w / zoom;}
      if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
      if (y < h / zoom) {y = h / zoom;}
      /*set the position of the magnifier glass:*/
      glass.style.left = (x - w) + "px";
      glass.style.top = (y - h) + "px";
      /*display what the magnifier glass "sees":*/
      glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
    }
    function getCursorPos(e) {
      var a, x = 0, y = 0;
      e = e || window.event;
      /*get the x and y positions of the image:*/
      a = img.getBoundingClientRect();
      /*calculate the cursor's x and y coordinates, relative to the image:*/
      x = e.pageX - a.left;
      y = e.pageY - a.top;
      /*consider any page scrolling:*/
      x = x - window.pageXOffset;
      y = y - window.pageYOffset;
      return {x : x, y : y};
    }
  }