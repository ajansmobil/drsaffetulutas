

let backhtml = "";
backhtml = `<li class="menu__item"><a class="menu__link" href="/${json.lang}">@home@</a></li>`;
for (const iterator of webmakerdata["page"].data) {
  if (iterator.status == "play") {
    backhtml += `<li class="menu__item"><a class="menu__link" href="/${
      json.lang
    }/${iterator.path}">${iterator.name[json.lang]}</a></li>`;
  }
}
html = html.replace(new RegExp("{{html}}", "g"), backhtml);
let bgcolor = json.desing.bgcolor;
bgcolor = bgcolor.replace(new RegExp("#", "g"), "");



 moduleimg = "";
 if (json.desing.img != "") {
moduleimg = `<div class="moduleimg">
  <img src="/img/${json.id}/${json.desing.img}" alt="Logo" />
</div>`;
}else{
  moduleimg = "";
}


html = html.replace(new RegExp("{{moduleimg}}", "g"), moduleimg);

html = html.replace(new RegExp("#bgcolor#", "g"), bgcolor);
