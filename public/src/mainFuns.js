const localPics = ["./img/Busan.jpg", "./img/Jeju.jpg", "./img/seoul4.jpg"];
const localPicsDes = ["Busan is the second biggest city in Korea", "Seoul is the capital city", "Jeju is the beautiful island in Korea"];
const picsURL = ['https://english.busan.go.kr/index', 'http://english.seoul.go.kr/', 'https://www.visitjeju.net/en'];

//
//
//

let imgObjs = new Array();

imgObjs[0] = new Image();
imgObjs[0].src = localPics[0];
imgObjs[1] = new Image();
imgObjs[1].src = localPics[1];
imgObjs[2] = new Image();
imgObjs[2].src = localPics[2];

function swapImage(index) {
  let img = document.getElementById("displayImage");
  img.src = imgObjs[index].src;
  img.alt = index;
  // img.addEventListener('click', function() {
  //   console.log("chris")
  // })
}

function listPics() {
  for (let i = 0; i < localPicsDes.length; i++) {
    // document.getElementsByClassName("desLists").innerHTML +=
    //   `<li>${localPicsDes[i]}</li>`;
    document.write(`<li onmouseover="swapImage(${i})">${localPicsDes[i]} </li>
                    
    `);
  }
}

function confirmMsg() {
  console.log("chris")
  //confirm message function
  let confirmation = confirm("Are you sure you want to proceed?");
  if (!confirmation) {
    return false;
  }
  return true;
}

function openWindow() {
  let attr = document.getElementById("displayImage").alt
  let picWindow = window.open(`${picsURL[attr]}`, "", "width=500, height=500");
  setTimeout(() => {
    picWindow.close()
  }, 5000)
}



