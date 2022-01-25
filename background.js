const zhWikiDomain = 'zh.wikipedia.org';
const zhTw = 'zh-tw';

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (tab.url.includes(zhWikiDomain) && !tab.url.includes(zhTw)) {
    chrome.tabs.update(
      tab.id,
      {
        url: tab.url.replace('/wiki/', '/zh-tw/')
      },
    );
  }
});
