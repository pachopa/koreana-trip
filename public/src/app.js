// function confirmMsg(buttonId) {
//   console.log('buttonId:', buttonId)
//   document.getElementById(buttonId).addEventListener("click", function(e) {
//     e.preventDefault();
//     console.log("test")
//     let confirmnation = confirm("Are you sure you want to proceed?");
//     if(!confirmnation) {
//       // returnToPreviousPage();
//       return false;
//     }
//     return true;
//   })
//   // let e = e;
//   // console.log('className:', className);
  
//   // if(!confirmnation) {
//   //   console.log('e:');
//   //   // e.preventDefault();
//   //   // returnToPreviousPage();
//   // } 

//   // return confirmnation;
// }

function confirmMsg() {
  let confirmation = confirm("Are you sure you want to proceed?");
  if(!confirmation ) {
    return false;
  } 
  return true;
}

$(function(){
  $(".md-form input").blur(function() {
    let inputId = $(this).attr('id');
    let inputValue = $(this).val();
    let validation = new RegExp(/^[A-Z]\d[A-Z] ?\d[A-Z]\d$/);
    let $this = $(this);

    if(inputId == 'postalCode' && !validation.test(inputValue)) {
      
      $($this).after("<div class='notValid'>This is not valid postal code</div>");

      $('.notValid').fadeOut(2000);
    }
  })

  $(".md-form input").focusin(function() {
    $(this).parent().find(".feedback").css("display", "inline-block")
  });

  $(".md-form input").focusout(function() {
    $(this).parent().find(".feedback").css("display", "none")
  })

  // $("buttonArea input").valid();

  // $(".md-form input:focus").css("background", "blue");
  // $(".md-form input").(function() {
  //   // $(".md-form .feedback").css("display", "inline-block");
  //   $().children(".feedback").css("display", "inline-block")
  // })

  // $(".md-form input:focus").css("display,", "inline-block")
});
