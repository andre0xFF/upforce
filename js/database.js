var Database = function() {

  this.spreadsheets = {
    results: {
      gid:           0,
      name:         "A",
      competition:  "B",
      year:         "C",
      extra:        "D",
      gender:       "E",
      category:     "F",
      weight:       "G",
      team:         "H",
      snatch:       "I",
      cleanAndJerk: "J",
      // Total: "K",
      sinclair:     "L"
    },
    athletes: {
      gid:          1859296831,
      name:         "A",
      nationality:  "B",
      team:         "C",
      photo:        "D"
    },
    teams: {
      gid:          2002930307,
      team:         "A",
      address:      "B"
    },
    competitions: {
      gid:          1029725648,
      competition:  "A",
      date:         "B"
    }
  };
  
  this.getQueryString = function(param, sheetName) {
    return new google.visualization.Query(
      "https://docs.google.com/spreadsheets/d/1JPH3MHxTzwKFkaRP6YlVRty0c5bSB5MHPnR7e6oBWdA/gviz/tq?gid="
      + this.spreadsheets[sheetName].gid
      + "&headers=1&tq=" + encodeURIComponent(param)
    );
  };
}
