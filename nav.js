
// font face

document.head.appendChild(newStyle);

function select() {
    var sl = el('select').id('selectdata').class("form-control")
        .child(
            el('option').text('pilih data').val('').get()
        );
    for (var i = 0; i < 9; i++) {
        sl.child(
            el('option').text('data' + (i + 1)).val('nilai' + (i + 1)).get()
        );
    }
    return sl
}
var getVal = delay(function () {
    console.log(this.value);
}, 1000);

function cek() {
    var c = document.getElementById('halo');
    console.log(c);
}
function domPlace(a, ch) {
    var domp = document.getElementById(a);
    if (domp != null) {
        var parent = domp.parentNode;
        parent.replaceChild(ch, domp);
    } else {
        domp.appendChild(ch);
    }
}
function pushDomp(a, fun) {
    var lodas = document.body.appendChild(a);
    if (lodas) {
        fun()
    };
}


function showbar() {
    $('.navbar-collapse').collapse('toggle');
}

var cssTop = {
    marginTop: "-20px"
}

var cekd = "Home";

function menu() {
    Array.from(document.querySelectorAll('.nav a')).forEach(function(elm){
        elm.style.fontSize = "14px";
    })
    this.style.fontSize = "20px";
    var cek = this.getAttribute('page');
    cekd = cek;
    if (cek == "Home") {
        domPlace("pageid", homePage);
    } else if (cek == "About") {
        domPlace("pageid", About);
    } else if (cek == "Contact") {
        domPlace("pageid", contact);
    } else if (cek == "Product") {
        domPlace("pageid", product);
    }
    if (window.outerWidth < 767){
        $('.navbar-collapse').collapse('toggle');
    }

    document.getElementById('contain').scrollTop = 0;

}

function iconzome() {
    this.style.fontSize = "20px";
}
function iconmize() {
    var cek = this.getAttribute('page');

    if (cekd != cek) {
        this.style.fontSize = "14px";
    }

    // Array.from(document.querySelectorAll('.nav a')).forEach(function (elm) {
    //     elm.style.fontSize = "14px";
    // })
}

function buttonResposive(el, width, h){
    if(width < 786){
        el.style.display = 'block';
        el.style.position = 'absolute';
        el.style.top = '5px';
        el.style.right = '10px';
    }else{
        el.style.display = 'none';
    }
}

function headResponsive(el, width, h){
    if(width < 786){
        setTimeout(function(){
            document.getElementById('headnav').style.padding = '0 20px'
        },1)
        el.style.textAlign = 'left';
        el.style.padding = '20px 0';
    }else{
        setTimeout(function () {
            document.getElementById('headnav').style.padding = '0 100px'
        }, 1)
        el.style.textAlign = 'left';
        el.style.padding = '0';
    }
}

function flotDelete(el, width, h){
    if (width < 786) {
        el.style.float = 'none';
    } else {
        el.style.float = 'left';
    }
}

function barR(el, width, height){
	//alert(width)
    if (width <= 767) {
        el.style.background = 'white';
        setTimeout(function(){
            el.childNodes.forEach(function(elm){
                elm.style.color = "purple";
            })
        },1)
    } else {
        el.style.background = 'transparent';
        setTimeout(function () {
            el.childNodes.forEach(function (elm) {
                elm.style.color = "white";
            })
        }, 1)
    } 
}



var nav = div().class("navbar navbar-default navbar-fixed-top")
    .id('headnav')
    .css("margin", "0")
    .css("background", "transparent")
    .css("border", "none")
    .css("padding", "0 100px")
    .child(
        div()
        .class("container-fluid")
            .onresize(headResponsive)
            .onload(headResponsive)
            .child(
                div().class("navbar-header")
                    .child(
                        btn().type("button")
                        .onresize(buttonResposive)
                        .onload(buttonResposive)
                        .class("navbar-toggle collapsed")
                        .click(showbar)
                            .attr("data-toggle", "collapse")
                            .attr("data-target", "#bs-exampled-navbar-collapse-1")
                            .attr("aria-expanded", "false")
                            .child(
                                span().class("sr-only").text("Toggle navigation").get()
                            )
                            .child(
                                span().class("icon-bar").get()
                            )
                            .child(
                                span().class("icon-bar").get()
                            )
                            .child(
                                span().class("icon-bar").get()
                            )
                            .get()
                    )
                    .child(
                        a().class("navbar-brand")
                        .onresize(flotDelete)
                        .onload(flotDelete)
                        .href("#")
                            .html(
                                "<i class='fa fa-school'></i> Sekolah"
                            )
                            .css("font-size", "20px")
                            .css("fontFamily", "baloo")
                            .css("color", "white")
                            .get()
                    ).get()
            ).child(
                div().class("collapse navbar-collapse")
                .css("margin", "0")
                .css("padding", "0")
                .child(
                    ul().class("nav navbar-nav navbar-right")
                        .css("margin", "0")
                        .css("padding", "0")
                        .child(
                            li()
                            .child(
                                a().href("#").mouseover(iconzome).mouseout(iconmize).text("Home")
                                .attr("page", "Home")
                                .css("color", "white")
                                .css("fontSize", "20px")
                                .click(menu).get()
                                )
                            .onresize(barR)
                            .onload(barR)
                            .get()
                        )
                        .child(
                            li()
                            .child(
                                a().href("#").mouseover(iconzome).mouseout(iconmize).text("Product")
                            .css("color", "#fff")
                            .attr("page", "Product")
                            .click(menu).get()
                            )
                            .onresize(barR)
                            .onload(barR)
                            .get()
                        )
                        .child(
                            li()
                            .child(
                                a().mouseover(iconzome).mouseout(iconmize).href("#").text("About")
                                    .css("color", "#fff")
                                    .attr("page", "About")
                                    .click(menu).get()
                            )
                                .onresize(barR)
                                .onload(barR)
                                .get()
                        )
                        .child(
                            li()
                            .onresize(barR)
                            .onload(barR)
                            .child(
                                a().href("#").mouseover(iconzome).mouseout(iconmize).text("Contact")
                                    .css("color", "#fff")
                                    .attr("page", "Contact")
                                    .click(menu).get()
                            ).get()
                        )
                        .child(
                            li()
                            .child(
                                a()
                                .css("color", "white")
                                .mouseover(iconzome).mouseout(iconmize).child(
                                    icon("fa fa-search")
                                    .css("fontSize", "14px")
                                    .mouseover(iconzome).mouseout(iconmize).get()
                                ).click(menu).get()
                            )
                            .onresize(barR)
                            .onload(barR)
                            .get()
                        )
                        .get()
                ).get()
            ).get()
    ).get();
