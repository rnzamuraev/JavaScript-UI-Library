import "../index";
import "../css/style";
import $ from "../lib/lib";

console.log("hello!");

const h1 = $("h1").hide().show("flex").addClass("active");
console.log($("h1").html());
if (h1.containsClass("active")) {
  $(".btn").on("click", function () {
    console.log(this);
    this.classList.add("sddvsd");
    console.log($(".icon"));
    $("h1").html("active");
    const getAtt = $(this).getAttr("data-name");
    // const getAtt = document.querySelector(".sddvsd");
    console.log($("h1").html());
    console.log(getAtt);
    // $(this).removeAttr("data-name");
    // const get = getAtt.getAttribute("data-name");
    // console.log(get);
    console.log($(this)[0]);
  });
  console.log(h1.containsClass("active"));
}
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
