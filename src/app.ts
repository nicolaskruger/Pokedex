import {ControllerPokedex} from './controller/ControllerPokedex';

let controller = new ControllerPokedex();

document.querySelector("#add").addEventListener("click",controller.addScreen.bind(controller));
document.querySelector("#closeAdd").addEventListener("click",(controller.closeScreen.bind(controller)));
document.querySelector(".form").addEventListener("submit",(controller.add.bind(controller)));
document.querySelector(".close").addEventListener("click",(controller.closePokeShow.bind(controller)));
document.querySelector(".delete").addEventListener("click",(controller.deltePoke.bind(controller)));
document.querySelector("#filter").addEventListener("input",(controller.filterByName.bind(controller)));
document.querySelector("#types").addEventListener("click",(controller.filterByType.bind(controller)));
