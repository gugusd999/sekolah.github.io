


function overbtn(params) {
    this.className = "btn btn-primary";
}
function outbtn(params) {
    this.className = "btn btn-default";
}

function dsm() {
    this.className = "btn btn-default";
    domPlace("pageid", product);
}


function tbl(){
    return el('TABLE');
}

function tr(){
    return el('tr');
}

function td(){
    return el('td')
}

function clickCalender(){
    alert('ok')
}

var getMonth;

var getYear;

var getTglAwal;

var getTglAkhir;

var getTgl = tanggal().normal.split('-');

var tgl = tanggal().normal2.split('-');

var tgl2 = tanggal().normal3.split('-');

getYear = getTgl[0];
getMonth = getTgl[1];
var daystart = tanggal().day2; 
getTgl = getTgl[2];
getTglAwal = tgl[2];
getTglAkhir = tgl2[2];

var getYearLast = getYear;
var pngurangBulan = 0;
var montlast = Number(getMonth) - 1;

if (montlast == 0) {
    getYearLast = Number(getYearLast) - 1;
    montlast = 12;
}

var lastmontday = tanggal(getYearLast+'-'+montlast+'-'+1).normal3.split('-')[2];



var dayTglLoad = [];

var colorTgl = [];

var fontW = [];

var fontS = [];

for (var x = daystart - 1; x >= 0; x--) {
    dayTglLoad.push(lastmontday - x);
    colorTgl.push("#ada");
    fontW.push("normal");
    fontS.push("14px");
}

for (var x = Number(getTglAwal); x <= getTglAkhir; x++) {
    if (x == getTgl) {
        fontW.push("bold");
        fontS.push("18px");
    } else {
        fontW.push("bold");
        fontS.push("14px");
    }
    dayTglLoad.push(x);
    colorTgl.push("#fff");
}

var daySisa = 42 - dayTglLoad.length;

for (var x = 1; x <= daySisa; x++) {
    dayTglLoad.push(x);
    colorTgl.push("#ada");
    fontW.push("normal");
    fontS.push("14px");
}

var tbl = tbl();
var day = ['Minggu','Senin', 'Selasa', 'Rabu','Kamis', 'Jum`at', 'Sabtu'];
for (var x = 0; x < 7; x++) {
    var rowItem = tr();
    if (x == 0) {
        for (var y = 0; y < 7; y++){
            rowItem = rowItem.child(
                td().text(day[y])
                .css('padding', '5px')
                .css('font-weight', 'bold')
                .css('text-align', 'center')
                .get()
            );
        }
    }else{
        for (var y = 0; y < 7; y++){
            rowItem = rowItem.child(
                td().text(dayTglLoad[y+((x-1) * 7)])
                .css('cursor', 'pointer')
                .css('color', colorTgl[y + ((x - 1) * 7)])
                .css('padding', '5px')
                .css('font-weight', fontW[y + ((x - 1) * 7)])
                .css('font-size', fontS[y + ((x - 1) * 7)])
                .css('text-align', 'center')
                .click(clickCalender)
                .get()
            );
        }
    }
    rowItem = rowItem.get();
    tbl = tbl.child(
        rowItem
    );
}
tbl = tbl.get();

var calendar = div().child(tbl).get()


function calenderResize(el, width, height){
    if(width < 991){
        el.style.display = "none";
    }else{
        el.style.display = "flex";
        el.style.justifyContent = "center";
    }
}


var homePage = div().class("row").id("pageid").css("color", "white")
    .child(
        div()
        .class("col-sm-12 col-md-6 col-lg-6")
        .onresize(calenderResize)
        .onload(calenderResize)
        .css("justify-content", "center")
        .child(calendar)
        .get()
    )    
    .child(
        div()
        .class("col-sm-12 col-md-6 col-lg-6")
        .css("padding", "20px")
            .child(
                h1().css("fontWeight", "bold")
                    .text("Sekolah").get()
            )
            .child(
                line()
                .css("width", "250px")
                .css("float", "left")
                .css("border-bottom", "2px solid #fff")
                .get()
            )
            .child(
                div()
                .css("clear", "both")
                .get()
            )
            .child(
                h2()
                    .css("padding", "0")
                    .css("margin", "0")
                    .css("marginTop", "20px")
                    .css("fontWeight", "bold").html("Healty drink").get()
            )
            .child(
                h2()
                    .css("padding", "0")
                    .css("margin", "0")
                    .css("marginTop", "10px")
                    .css("fontWeight", "bold").html("for everyonce").get()
            )
            .child(
                p().css("fontStyle", "italic")
                    .css('fontSize', '15px')
                    .css('marginTop', '20px')
                    .css('line-height', '2')
                    .css('letter-spacing', '2px')
                    .text("Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio perspiciatis error veniam dolor modi aliquam sit architecto ratione. Illum sapiente dolor nemo eos maxime nisi magni dignissimos optio quaerat earum.").get()
            )
            .child(
                btn().class('btn btn-default')
                .css("margin-top", "38px")
                .css("font-size", "18px")
                .mouseover(overbtn)
                .mouseout(outbtn)
                .text("Our Product").click(dsm).get()
            )
            .child(
                footer()
            )
            .get()
    )
    .get()


function prdt(){
    var gr = div().class("col-xs-6 col-sm-4 col-md-3 col-lg-3");
    gr.child(
        div().class("panel").css("cursor", "pointer").child(
            div().class("panel-body").child(
                img().src("asset/milkshake/2.png")
                .class("img-responsive").get()
            ).get()
        ).get()
    )
    return gr.get();
}

var product = div().class("row").id("pageid");
    product = product.class("col-sm-12").child(
        h2().text("Product").css("marginBottom", "20px").css("color", "white").get()
    );
    for (let x = 0; x < 8; x++) {
        product = product.child(
            prdt()
        );
    }
    product = product.child(
        footer()
    );
    product = product.get();
    