//Routes
var home = (req, res) => {
  if(req.url === '/'){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Header\n');
    res.write('Search\n');
    res.end('Footer\n');
  }
};

var user = (req, res) => {
  var username = req.url.replace('/','');
  if (username.length > 0) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Header\n');
    res.write(username + '\n');
    res.end('Footer\n');
  }
}



module.exports.home = home;
module.exports.user = user;
