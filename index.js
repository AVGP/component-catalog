var watcher  = require('chokidar').watch(process.argv[2], {
    ignored: new RegExp("^[^/]+/[^/]+/.+$"),
    persistent: true
  }),
  mustache   = require('mustache'),
  fs         = require('fs'),
  components = [];

function renderInventory(components) {
  fs.readFile("index.html.tpl", "utf8", function(err, content) {
    var output = mustache.render(content, {components: components});
    fs.writeFile("index.html", output, function() { console.log("Written"); });
  });
}

console.log("Watching " + process.argv[2]);

watcher.on('addDir', function(path) {
  if(path === process.argv[2]) return;
  console.log("Added", path);
  components.push(path.replace(process.argv[2] + '/', ''));
  renderInventory(components);
})
.on('unlink', function(path) {
  console.log("Removed", path);
});
