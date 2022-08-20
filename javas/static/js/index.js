let $div = $("div");
let $btn_hide = $(".btn_hide");
let $btn_show = $(".btn_show");
function kizk() {
  $btn_hide.click(function () {
    console.log("click");
    $div.fadeOut(1000);
    $div.text("hello");
    console.log($div.html());
  });
  $btn_show.click(() => {
    console.log("click");
    $div.fadeIn(1000);
  });
}
export { kizk };
