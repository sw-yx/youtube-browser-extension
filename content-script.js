

console.log(`
-----


hello from content script


-----

`)
var { origin, pathname, host } = window.location;
var SortMenuEl = document.getElementById("sort-menu")
var isOnChannel = document.getElementById("channel-container")
console.log({ isOnChannel })
console.log('SortMenuEl.children.length < 1', SortMenuEl.children.length < 1)
if (isOnChannel && SortMenuEl.children.length < 1) {
  const urls = {
    popular: `?view=0&sort=p&flow=grid`,
    oldest: `?view=0&sort=da&flow=grid`,
    newest: `?view=0&sort=dd&flow=grid`,
  }
  const loc = origin + pathname
  SortMenuEl.innerHTML = `
  <ul>
    <li><a style-target="label-text" class="style-scope yt-dropdown-menu" href="${loc + urls.popular}">Popular</a></li>
    <li><a style-target="label-text" class="style-scope yt-dropdown-menu" href="${loc + urls.oldest}">Oldest</a></li>
    <li><a style-target="label-text" class="style-scope yt-dropdown-menu" href="${loc + urls.newest}">Newest</a></li>
  </ul>
  `
}
