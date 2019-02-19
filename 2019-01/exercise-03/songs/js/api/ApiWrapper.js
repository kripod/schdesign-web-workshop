class ApiWrapper {
  constructor(token) {
    this.token = token;
  }

  async send(method) {
    const url = `http://ws.audioscrobbler.com/2.0/?${method}&api_key=${
      this.token
    }&format=json`;

    const response = await (await fetch(url, {
      method: "GET",
      mode: "cors",
      headers: {
        Accept: "application/json"
      }
    })).json();

    if (response.error) throw Error(response.message);

    return response;
  }

  async getSimilarArtists(artist, limit) {
    const artistMethod = "getsimilar";
    const response = await this.send(
      `method=artist.${artistMethod}&artist=${artist}&limit=${limit}`
    );

    return {
      artist: response.similarartists["@attr"].artist,
      similarArtists: response.similarartists.artist
    };
  }

  async getTopSongs(artist, limit) {
    const artistMethod = "gettoptracks";
    const response = await this.send(
      `method=artist.${artistMethod}&artist=${artist}&limit=${limit}`
    );
    return response.toptracks.track;
  }

  async magicQuery(search, config, callback, error) {
    const { artistLimit, songLimit, length } = config;
    try {
      const resultBuilder = song => {
        return {
          title: song.name,
          artist: song.artist.name,
          listeners: Number(song.listeners),
          image: song.image[2]["#text"],
          url: song.url
        };
      };

      let songs = [];

      const response = await apiWrapper.getSimilarArtists(search, artistLimit);

      await Promise.all(
        response.similarArtists.map(async artist => {
          (await apiWrapper.getTopSongs(artist.name, songLimit)).forEach(song =>
            songs.push(resultBuilder(song))
          );
        })
      );

      const formatedSongs = songs
        .filter(a => a.image != "")
        .sort((a, b) => b.listeners - a.listeners)
        .slice(0, length);

      if (formatedSongs.length == 0) throw Error("Cannot find similar artists");

      callback({
        query: response.artist,
        songs: formatedSongs
      });
    } catch (e) {
      console.log(e);
      error(e);
    }
  }
}
