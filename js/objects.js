var Athlete = function(name) {
  this.name = name;

  var database = new Database();

  this.getCompetitionResults = function(year, competition) {

    var query = "SELECT C, B, F, H, I, J, I + J WHERE A = '" + this.name + "' AND ";

    var whereClause = {

      year: "C = " + year,
      competition: "B = '" + competition + "'"
    };

    query += year != null && "year" in database.spreadsheets.results ? whereClause.year + " AND " : "";
    query += competition != null && "competition" in database.spreadsheets.competitions ? whereClause.competition + " AND " : "";
    query = query.substring(0, query.length - 4);
    query += "LABEL I + J 'Total'";

    console.log(query + " FROM results");

    query = database.getQueryString(query, "results");
    
    query.send(function handleQueryResponse(response) {

      if (response.isError()) {
        alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
      }

      var table = new google.visualization.Table(document.getElementById('table_div'));
      table.draw(response.getDataTable(), {
        width: '50%', //height: '100px',
        alternatingRowStyle: true,
        sortAscending: false,
        sortColumn: 6
      });
    });
  }
};
