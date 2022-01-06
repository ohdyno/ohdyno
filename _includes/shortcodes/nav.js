const pages = {
    "/": "🏠 Home",
    "/README/": "🙋🏻 About Me",
    "/TIL/": "📝 Learnings"
}

module.exports = function () {
    let nav = "<nav><ul>"
    for (const [url, text] of Object.entries(pages)) {
        nav += (this.page.url === url ? '<li aria-current="page">' : '<li>')
        nav += `<a href=${url}>${text}</a>`
        nav += "</li>"
    }
    nav += "</ul></nav>"
    return nav
}