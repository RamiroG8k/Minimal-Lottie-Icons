
var bm = document.getElementsByClassName("bm");

Array.prototype.forEach.call(bm, (icon) => {
  var anim = bodymovin.loadAnimation({
    container: icon,
    path: `json/${icon.dataset.file}.json`,
    renderer: "svg",
    loop: false,
    autoplay: false,
  });

  //
  icon.addEventListener("mouseenter", () => {
    anim.setDirection(1);
    anim.play();
  });

  icon.addEventListener("mouseleave", () => {
    anim.setDirection(-1);
    anim.play();
  });

});
