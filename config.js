function iconOver() {
    this.style.fontSize = "35px";
    this.style.marginTop = "-5px";
}
function iconOut() {
    this.style.fontSize = "30px";
    this.style.marginTop = "0";
}


var footer = function(){ return div()
          .css("width", "200px")
          .css("position", "fixed")
          .css("bottom", "10px")
          .css("left", "calc(50% - 100px)")
          .css("color", "white")
          .css("text-align", "center")
          .child(
              icon('fab fa-whatsapp').mouseover(iconOver).mouseout(iconOut).get()
           )
          .child(
              icon('fab fa-telegram').mouseover(iconOver).mouseout(iconOut).get()
                    )
          .child(
              icon('fab fa-instagram').mouseover(iconOver).mouseout(iconOut).get()
           )
           .child(
              icon('fab fa-linkedin').mouseover(iconOver).mouseout(iconOut).get()
           )
           .get()
           }