class DataHandler {
  constructor(drawFunction, config) {
    const { storageKey } = config;
    this.storageKey = storageKey;

    this.drawFunction = drawFunction;

    this.isLocalStorageEnabled = false;
    if (localStorage) {
      this.isLocalStorageEnabled = true;

      const storedState = localStorage.getItem(this.storageKey);
      try {
        const state = JSON.parse(storedState);
        this.setState(state, { pushToHistory: true });
      } catch (e) {
        console.log("Cannot load previous state.");
      }
    }

    onpopstate = ({ state }) => {
      this.setState(state, { pushToHistory: false });
    };
  }

  setState(state, { pushToHistory }) {
    this.state = state;

    this.drawFunction(this.state);

    this._stateToLocalStorage();
    if (pushToHistory) this._stateToHistory();
  }

  _stateToHistory() {
    history.pushState(this.state, "", "");
  }
  _stateToLocalStorage() {
    if (this.isLocalStorageEnabled)
      localStorage.setItem(this.storageKey, JSON.stringify(this.state));
  }
}
