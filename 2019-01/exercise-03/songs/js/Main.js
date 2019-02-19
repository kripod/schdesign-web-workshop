const apiWrapper = new ApiWrapper("6c1d601900a9e79f1021451ac9bf0611");
// const apiWrapper = new MockApiWrapper("6c1d601900a9e79f1021451ac9bf0611");

const siteDrawer = new SiteDrawer({
  searchBarId: "search-bar",
  cardHolderId: "card-holder",
  loadingSrc: "media/loading.gif"
});

const dataHandler = new DataHandler(
  data => {
    siteDrawer.draw(data);
  },
  { storageKey: "current" }
);

const searchFunction = query => {
  siteDrawer.showLoading();
  apiWrapper.magicQuery(
    query,
    { artistLimit: 6, songLimit: 4, length: 15 },
    result => dataHandler.setState(result, { pushToHistory: true }),
    error => siteDrawer.showError(error)
  );
};

const searchBar = document.getElementById("search-bar");
searchBar.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    searchFunction(searchBar.value);
    searchBar.blur();
  }
});
