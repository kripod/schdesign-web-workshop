class SiteDrawer {
  constructor(config) {
    this.config = config;
    this.counter = 0;
  }

  draw(data) {
    const { query, songs } = data;
    const { searchBarId } = this.config;

    if (!query || !songs) throw Error("Invalid data.");

    this.removeCards();
    document.title = document.getElementById(searchBarId).value = query;

    for (const song of songs) this.addCard(song);

    this.animateCards();
  }

  async animateCards() {
    const counterState = this.counter;
    this.counter = 0;

    for (let i = 0; i < counterState; i++) {
      await new Promise(resolve => setTimeout(resolve, 50));
      document.getElementById(`card${i}`).style.transform = "none";
    }
  }

  showLoading() {
    const { cardHolderId, loadingSrc } = this.config;
    document.getElementById(
      cardHolderId
    ).innerHTML = `<img id="loading" src="${loadingSrc}" />`;
  }

  showError(e) {
    const { cardHolderId } = this.config;

    const id = `card${this.counter++}`;

    // prettier-ignore
    let cardHTML = (
      `<div class="card shadow" id="${id}">
        <h2>${e}.</h2> 
      </div>`
    );
    document.getElementById(cardHolderId).innerHTML = cardHTML;

    this.animateCards();
  }

  removeCards() {
    const { cardHolderId } = this.config;
    document.getElementById(cardHolderId).innerHTML = "";
  }

  addCard({ title, artist, listeners, image, url }) {
    const { cardHolderId } = this.config;

    const id = `card${this.counter++}`;

    // prettier-ignore
    let cardHTML = (
    `<div class="card shadow link" id="${id}" onclick="window.open('${url}')">
      <div class="image-container" style="background-image: url('${image}')"></div>
      <div class="description">
        <h2>${title}</h2> 
        <h3>by ${artist}</h3>
        <h4>${listeners} listeners</h4>
      </div>
    </div>`);
    document.getElementById(cardHolderId).innerHTML += cardHTML;
  }
}
