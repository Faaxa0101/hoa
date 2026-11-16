// IndexNow submitter - usage: node scripts/indexnow.mjs [url ...]
// With no args, submits every URL from the live sitemap.
const KEY = "daeeb3fba3114cfbbe837be00919b8a3";
const HOST = "www.hoa.help";
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

async function getSitemapUrls() {
  const r = await fetch(`https://${HOST}/sitemap.xml`);
  const xml = await r.text();
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
}

const argUrls = process.argv.slice(2);
const urlList = argUrls.length ? argUrls : await getSitemapUrls();

const res = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({ host: HOST, key: KEY, keyLocation: KEY_LOCATION, urlList }),
});

console.log("submitted:", urlList.length, "urls");
console.log("HTTP status:", res.status, res.status === 200 || res.status === 202 ? "(accepted)" : await res.text());
