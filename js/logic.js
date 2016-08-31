var categories = {
  male    : [ '56', '62', '69', '77', '85', '94', '105', '105+' ],
  female  : [ '48', '53', '58', '63', '69', '75', '75+' ]
};

function getAthleteResults(name, competition, year) {

    var database = new Database();
    var s = database.spreadsheets.results;

    var query = "SELECT ".concat(
      "toDate(", s.date, "), ", s.competition, ", ", s.category, ", ", s.team,
      ", ", s.snatch, ", ", s.cleanAndJerk, ", ", s.snatch, " + ", s.cleanAndJerk,
      ", ", s.sinclair,
      " WHERE lower(", s.name ,") = lower('", name, "')"
    );

    //TODO: Add athlete's place in competition

    query +=  (year != null && "date" in s) ?
              " AND year(" + s.date + ") = " + year : "";

    query +=  (competition != null && "competition" in s) ?
              " AND " + s.competition + " = '" + competition + "'" : "";

    query = query.concat(
      " LABEL ", s.snatch, " + ", s.cleanAndJerk, " 'Total',", " toDate(", s.date, ") 'Date'"
    );

    console.log(query);

    return database.getQueryString(query, "results");
}

function getCompetitionResults(year, competition, gender, category) {

  var database = new Database();
  var s = database.spreadsheets.results;

  var query = "SELECT ".concat(
    s.place, ", ", s.name, ", ", s.team, ", ", s.snatch, ", ", s.cleanAndJerk,
    ", ", s.snatch, " + ", s.cleanAndJerk, ", ", s.sinclair,
    " WHERE ", s.category, " = '", category, "' AND lower(", s.gender ,") = lower('", gender, "')",
    " AND lower(", s.competition ,") = lower('", competition, "') AND year(", s.date, ") = ", year,
    " ORDER BY ", s.snatch, " + ", s.cleanAndJerk, " DESC",
    " LABEL ", s.snatch, " + ", s.cleanAndJerk, " 'Total'"
  );

  console.log(query);

  return database.getQueryString(query, "results");
}
