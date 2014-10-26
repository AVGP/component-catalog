var watcher  = require('chokidar').watch(process.argv[2], {
    ignored: ignoreFiles,
    persistent: true
  }),
  mustache   = require('mustache'),
  fs         = require('fs'),
  components = [];

function ignoreFiles(path) {
  var re = new RegExp("^[^/]+/.+$");
  return !!re.test(path.replace(process.argv[2] + '/', ''));
}

function renderInventory(components) {
  fs.readFile("index.html.tpl", "utf8", function(err, content) {
    var output = mustache.render(content, {components: components});
    fs.writeFile(( process.argv[3] ? process.argv[3] + '/' : '') + "index.html", output, function() { console.log("Written"); });
  });
}

console.log("Watching " + process.argv[2]);

watcher.on('addDir', function(path) {
  if(path === process.argv[2]) return;
  console.log("Added", path);

  if(fs.existsSync(path + '/component.json')) {
    try {
      var component = JSON.parse(fs.readFileSync(path + '/component.json', 'utf8'));
    } catch(e) {
      var component = {name: path.replace(process.argv[2] + '/', '')};
    }
  } else {
    var component = {name: path.replace(process.argv[2] + '/', '')};
  }

  components.push(component);
  renderInventory(components);
})
.on('unlink', function(path) {
  console.log("Removed", path);
});
