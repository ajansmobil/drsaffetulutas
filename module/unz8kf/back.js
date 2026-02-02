// Find the page with `modulestatus.page` set to true

let backhtml = "";
backhtml = `<li class="menu__item"><a class="menu__link" href="/${json.lang}">@home@</a></li>`;
// Iterate over the relevant data to create HTML content
for (const iterator of webmakerdata["page"].data) {
  if (iterator.status == "play") {
    backhtml += `<li class="menu__item"><a class="menu__link" href="/${
      json.lang
    }/${iterator.path}">${iterator.name[json.lang]}</a></li>`;
  }
}
// Replace the placeholder {{html}} with the generated backhtml content
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
