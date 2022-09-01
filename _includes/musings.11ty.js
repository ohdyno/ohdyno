exports.data = {
    layout: "default.11ty.js",
}

exports.render = function (data) {
    return `
        <section class="musing">
            <h1>${data.title}</h1>
            <section>
                ${data.content}
            </section>
        </section>
`
}