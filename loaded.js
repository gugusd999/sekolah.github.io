var landing = {
    margin: "0",
    backgroundColor: "purple",
    minHeight: "100vh"
}

function opensize(el, w, h, iw, ih){
	var css = {
       "margin-top": "30px",
       "min-height": (h-120)+"px",
       "max-height": (h-120)+"px",
       "overflow-y": "auto"
     }
	Object.keys(css).forEach(function(item){
		el.style[item] = css[item];
	}, el)
	
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
                .onresize(opensize)
                .onload(opensize)
                .id('contain')
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