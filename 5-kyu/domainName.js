// assert.equal(domainName("http://google.com"), "google");
// assert.equal(domainName("http://google.co.jp"), "google");
// assert.equal(domainName("www.xakep.ru"), "xakep");
// assert.equal(domainName("https://youtube.com"), "youtube");

function domainName(url){
  const v0 = 'www.'
  const v1 = 'http://'
  const v2 = 'https://'
  const v3 = 'http://www.'
  const v4 = 'https://www.'

  if(url.substring(0, v4.length) === v4) {
    return url.slice(v4.length, url.indexOf('.', v4.length))
  }


  if(url.substring(0, v3.length) === v3) {
    return url.slice(v3.length, url.indexOf('.', v3.length))
  }


  if(url.substring(0, v2.length) === v2) {
    return url.slice(v2.length, url.indexOf('.', v2.length))
  }


  if(url.substring(0, v1.length) === v1) {
    return url.slice(v1.length, url.indexOf('.', v1.length))
  }

  if(url.substring(0, v0.length) === v0) {
    return url.slice(v0.length, url.indexOf('.', v0.length))
  }

  return url.slice(0, url.indexOf('.'));
}


console.log(domainName("https://www.onrgw53cx51kup-ajm9gv7.de/archive/"));
