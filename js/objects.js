var Athlete = function(name) {
  this.name = name;

  var database = new Database();

  this.getResults = function(year, competition) {
    var s = database.spreadsheets.results;

    var query = "SELECT ".concat(s.year, ", ", s.competition, ", ", s.category,
                ", ", s.team, ", ", s.snatch, ", ", s.cleanAndJerk, ", ",
                s.snatch, " + ", s.cleanAndJerk, " WHERE A = '", this.name,
                "' AND ");

    query +=  (year != null && "year" in s) ?
              database.spreadsheets.results.year + " = " + year + " AND " : "";

    query +=  (competition != null && "competition" in s) ?
              database.spreadsheets.results.competition + " = '" + competition + "' AND " : "";

    query = query.substring(0, query.length - 4);
    query += "LABEL I + J 'Total'";

    console.log(query);

    return database.getQueryString(query, "results");
  }
};
