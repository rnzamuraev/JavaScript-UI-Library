import "../index";
import "../css/style";
import $ from "../lib/lib";

console.log("hello!");

// console.log($(".btn").getAttr("class"));
$(".btn").setAttr("data-name", "btn-data");
if ($(".btn").hasAttr("data-name")) {
  // const getAtt = document.querySelector(".icon");
  // getAtt.style.width = "50px";
  // getAtt.style.height = "50px";
  $(".icon").width("50px");
  $(".icon").height("50px");
}
console.log($(".btn").hasAttr("data-name"));
