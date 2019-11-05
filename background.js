browser.contextMenus.create({
  id: "beautify",
  title: "Beautify this page"
});
console.log("test");
browser.contextMenus.onClicked.addListener(function(info, tab) {
  if (info.menuItemId == "beautify") {
    
    browser.tabs.executeScript({
      file: "scripts/beautify.js"
    });
  }
});