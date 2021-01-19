var About = div().class("row").id("pageid").css("color", "white")
    .child(
        div().class("col-sm-6")
            .child(
                h2().css("fontWeight", "bold")
                    .text("About").get()
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
                p().css("fontStyle", "italic")
                    .css('fontSize', '15px')
                    .css('marginTop', '20px')
                    .css('line-height', '2')
                    .css('letter-spacing', '2px')
                    .text("Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio perspiciatis error veniam dolor modi aliquam sit architecto ratione. Illum sapiente dolor nemo eos maxime nisi magni dignissimos optio quaerat earum.").get()
            )
            .child(
                p().css("fontStyle", "italic")
                    .css('fontSize', '15px')
                    .css('marginTop', '20px')
                    .css('line-height', '2')
                    .css('letter-spacing', '2px')
                    .text("Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio perspiciatis error veniam dolor modi aliquam sit architecto ratione. Illum sapiente dolor nemo eos maxime nisi magni dignissimos optio quaerat earum.").get()
            )
            .get()
    )
    .child(
        div().class("col-sm-6 text-right").child(
            img().src('asset/milkshake/2.png')
                .css("width", "100%")
                .get()
        ).get()
    )
    .child(
        div()
            .css("width", "250px")
            .css("position", "fixed")
            .css("bottom", "25px")
            .css("left", "calc(50% - (250px / 2))")
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
    )
    .get()



function newInput(text, nama, type, placeholder){
    var dd = div().class("form-group")
        .child(
            label().text(text).get()
        )
        .child(
            input().type(type).name(nama).class("form-control").placeholder(placeholder).get()
        )
        .get()
        return dd;
}

function newTextarea(text, nama, type, placeholder){
    var dd = div().class("form-group")
        .child(
            label().text(text).get()
        )
        .child(
            el("textarea").type(type).name(nama).attr("rows", "4").class("form-control").placeholder(placeholder).get()
        )
        .get()
        return dd;
}


var contact = div().class("row").id("pageid")
    .child(
        div().class("col-sm-6")
            .child(
                div().class("panel").child(
                    div().class("panel-body")
                    .child(
                        h2().css("fontWeight", "bold")
                            .text("Contact").get()
                    )
                    .child(
                        newInput("Nama", "nama", "text", "inputkan nama")
                    )
                    .child(
                        newInput("Email", "email", "email", "inputkan email")
                    )
                    .child(
                        newTextarea("Pesan", "pesan", "text", "inputkan pesan")
                    )
                    .child(
                        btn().type("button").class("btn btn-primary").text("Simpan").get()
                    )
                    .get()
                ).get()
            )
            .child(
                div()
                .css("width", "250px")
                .css("position", "fixed")
                .css("bottom", "25px")
                .css("left", "calc(50% - (250px / 2))")
                .css("color", "white")
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
            )
            .get()
    )
    .child(
        div().class("col-sm-6 text-right").child(
            img().src('asset/milkshake/2.png')
                .css("width", "100%")
                .get()
        ).get()
    )
    .get()