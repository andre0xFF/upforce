function getQueryString(field, url) {
  var href = url ? url : window.location.href;
  var reg = new RegExp( '[?&]' + field + '=([^&#]*)', 'i' );
  var string = reg.exec(href);

  return string ? decodeURIComponent(string[1]) : null;
}
