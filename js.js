let inCash = 5000;
let monyBackARR = [];
let nots = [200, 100, 50, 20, 10, 5, 2, 1 , 0.5 , 0.1];
let final = [];

function try5() {
  let pill = document.querySelector("#pill").value;
  let custemarCach = document.querySelector("#custemarCach").value;
  let x;
  x = custemarCach - pill;

  if (x < 0) {
    alert(`you still have to give me ${x}`);
  } else if (x == 0) {
    alert("have a good day");
  }

  if (inCash < x) {
    alert("we dont have mony");
  } else {
    return totalBack(x);
  }
}

function totalBack(monyBack) {
  let h2 = document.querySelectorAll("h2");
  let img = document.querySelectorAll("img")

  h2.forEach(function(item){
    if(item.innerHTML > 0){
      item.parentElement.firstElementChild.classList.remove("activeImg")
      item.classList.remove("active")
    }
    
      })
   

  for (let i = 0; i < nots.length; i++) {

    let notsNumber = parseInt(monyBack / nots[i]);

    monyBack = monyBack % nots[i];

    h2[i].innerHTML = notsNumber;

    monyBackARR.push(notsNumber);
  }

  h2.forEach(function(item){
if(item.innerHTML > 0){
  item.parentElement.firstElementChild.classList.add("activeImg")
  item.classList.add("active")
}

  })
  

}
