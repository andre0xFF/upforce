var Database = function() {

  this.sheet = {
    Results:      0,
    Athletes:     1859296831,
    Teams:        2002930307,
    Competitions: 1029725648
  };

  this.getQueryString = function(param, sheetName) {
    return new google.visualization.Query(
      "https://docs.google.com/spreadsheets/d/1JPH3MHxTzwKFkaRP6YlVRty0c5bSB5MHPnR7e6oBWdA/gviz/tq?gid="
      + this.sheet[sheetName]
      + "&headers=1&tq=" + encodeURIComponent(param)
    );
  };
}

function getQuery(param) {
  var queryString = encodeURIComponent(param);

  var query = new google.visualization.Query(
  'https://docs.google.com/spreadsheets/d/1JPH3MHxTzwKFkaRP6YlVRty0c5bSB5MHPnR7e6oBWdA/gviz/tq?gid=0&headers=1&tq=' + queryString);

  return query;
}
