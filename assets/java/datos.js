

function tablaShow(){
var args = location.search.substr(1).split('&');
for (var i = 0; i < args.length; ++i) {
  var parts = args[i].split('=');
  if (parts != null) {
    var field = parts[0];
    var value = parts[1];
    if (value == null) {
      value = "null"
    }
    else {
      value = unescape(value.replace(/\+/g, ' '));
    }

    document.writeln('<tr><td >' + field + '</td>');
    document.writeln('<td >' + value + '</td></tr>');
  }
}
}