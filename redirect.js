// The Leoflow docs used to live at neochaotic.github.io/leoflow/. They are now
// Dexaflow's docs at https://dexaflow.dexadata.ai/, with the same paths.
(function () {
  var m = location.pathname.match(/^\/leoflow(\/.*)?$/);
  if (!m) return;
  location.replace("https://dexaflow.dexadata.ai" + (m[1] || "/") + location.search + location.hash);
})();
