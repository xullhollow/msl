
async function loadRSS() {
  const rssURL = "https://api.rss2json.com/v1/api.json?rss_url=https://www.nst.com.my/rss/3";
  const container = document.getElementById("rss-feed");

  try {
    const res = await fetch(rssURL);
    const data = await res.json();

    let html = "<h3>📣 Latest News</h3><ul>";
    data.items.slice(0, 5).forEach(item => {
      html += `<li><a href="${item.link}" target="_blank">${item.title}</a></li>`;
    });
    html += "</ul>";

    container.innerHTML = html;
  } catch (e) {
    container.innerHTML = "Unable to load news 😢";
  }
}
