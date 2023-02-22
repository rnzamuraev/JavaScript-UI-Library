import "../index";
import "../css/style";
import $ from "../lib/lib";

console.log("hello!");

const h1 = $("h1").hide().show("flex").addClass("active");
if (h1.containsClass("active")) {
  $(".btn").on("click", function () {
    console.log(this);
    this.classList.add("sddvsd");
    console.log($(".icon"));
    $(".icon").toggleClass("active");
    // $(this).toggleClass("active");
  });
  console.log(h1.containsClass("active"));
}
// $(".btn").off("click", btnClick);
console.log(h1);

function btnClick() {
  console.log(this);
  console.log(this.tagName);
  this.toggleClass("active");
}
