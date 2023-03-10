import $ from "./core";
import "./modules/handlers";
import "./modules/display";
import "./modules/classes";
import "./modules/attributes";
import "./modules/text";
import "./modules/actions";
import "./modules/width";
import "./modules/height";
import "./modules/transform";
import "./modules/disabled";
import "./modules/calcScroll";
import "./components/maskPhone"; // $("input[name='phone']").maskPhone();
import "./components/dropdown"; // $("[data-dropdown-toggle]").dropdown("например: flex");
import "./components/modal"; // $("[data-open='modal']").modal();
import "./components/tab"; // $("[data-tabpanel]").tab("tab__item-active", "tab__content-active");
import "./components/accordion"; // $("[data-accordion]").accordion("accordion__content-active", 40, true);
import "./components/carousel"; // $("[data-carousel]").carousel();
import "./components/form"; // $("[data-form]").form("например: mail.php");
import "./components/search";
// import "./services/request";
import "./animation/effects";
import "./animation/fadeIn";
import "./animation/fadeOut";
import "./animation/fadeToggle";

export default $;
