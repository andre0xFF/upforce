function getQuery(param) {
  var queryString = encodeURIComponent(param);

  var query = new google.visualization.Query(
  'https://docs.google.com/spreadsheets/d/1JPH3MHxTzwKFkaRP6YlVRty0c5bSB5MHPnR7e6oBWdA/gviz/tq?gid=0&headers=1&tq=' + queryString);

  return query;
}
