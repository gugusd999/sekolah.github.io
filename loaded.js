var landing = {
    margin: "0",
    backgroundColor: "purple",
    minHeight: "100vh"
}

var modal = div()
    .id('root')
    .name('ola')
    .child(
        nav
    )
    .child(
        div().class('ama').class('jumbotron').id("landing-content").css(landing)
            .child(
                div()
                .class("container")
                .id('contain')
                .css({
                    "margin-top": "30px",
                    "min-height": "calc(100vh - 120px)",
                    "max-height": "calc(100vh - 120px)",
                    "overflow-y": "auto"
                })
                .child(
                    homePage
                )
                .get()
            )
            .get()
    ).get()
pushDomp(
    div().id('container').child(modal).get(), function () { }
)