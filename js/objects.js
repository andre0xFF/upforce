var Athlete = function(name) {
  this.name = name;

  var database = new Database();

  this.getResults = function(year, competition) {
    var s = database.spreadsheets.results;


    var query = "SELECT ".concat(s.year, ", ", s.competition, ", ", s.category,
                ", ", s.team, ", ", s.snatch, ", ", s.cleanAndJerk, ", ",
                s.snatch, " + ", s.cleanAndJerk, ", ", s.sinclair,
                " WHERE A = '", this.name, "'"
              );

    //TODO: Add athlete's place
    //TODO: Sort with full date
    query +=  (year != null && "year" in s) ?
              " AND " + s.year + " = " + year : "";

    query +=  (competition != null && "competition" in s) ?
              " AND " + s.competition + " = '" + competition + "'" : "";

    query = query.concat( " ORDER BY ", s.year,
                          " LABEL ", s.snatch, " + ", s.cleanAndJerk, " 'Total'"
                        );
    console.log(query);

    return database.getQueryString(query, "results");
  }
};
