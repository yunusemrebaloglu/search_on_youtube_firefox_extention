// Sağ tık menüsü oluşturma
browser.contextMenus.create({
  id: "search_on_youtube",
  title: "'%s' için Youtube'da ara",
  contexts: ["selection"]
});

// Seçili metin üzerinde sağ tıklandığında tetiklenen olay
browser.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "search_on_youtube") {
    // Seçili metin üzerinde işlemler
    var selectedText = info.selectionText;
    var searchURL = "https://www.youtube.com/results?search_query=" + encodeURIComponent(selectedText);

    // Yeni bir sekme açma
    browser.tabs.create({ url: searchURL });
  }
});
