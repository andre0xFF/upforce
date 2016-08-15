// flags https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2

function athleteSummary(name) {
  //var name = "Bruna Rodrigues"
  var query = buildQuery("SELECT C, B, F, H, I, J, I + J WHERE A = '" + name + "' label I + J 'Total'");

  query.send(function handleQueryResponse(response) {
    if (response.isError()) {
      alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
      return;
    }

    var table = new google.visualization.Table(document.getElementById('table_div'));
    table.draw(response.getDataTable(), {showRowNumber: false, width: '100%', height: '100%'});
  });

}
