exports.data = {
    title: "Musings"
}

function listMusings(data) {
    return data.collections.musings ? `
<ul>
  ${data.collections.musings.map(post => `<li><a href="${post.url}">${post.data.title}</a> - ${post.date.toLocaleDateString()}</li>`).join("\n")}
</ul>
` : `</>`;
}

exports.render = function (data) {
    return `
<h1>${data.title}</h1>
<p>Just a place to share some thoughts...</p>
${listMusings(data)}`;
}
