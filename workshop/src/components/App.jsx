// rsc is s shortcut
import React, { useState } from 'react';

import SearchBar from './SearchBar';
import Gif from './Gif';
import GifList from './GifList';

const giphy = require('giphy-api')({
  apiKey: 'KsltJNEs1v3QDDVlinP6EFo2GqjFxgRR',
  https: true
});

const App = () => {
  // const selectedGif = "gG6OcTSRWaSis";
  // const gifIds = ["WuGSL4LFUMQU", "HuVCpmfKheI2Q", "u6uAu3yyDNqRq"];
  const [selectedGif, setSelectedGif] = useState("gG6OcTSRWaSis");
  const [gifIds, setGifIds] = useState(["WuGSL4LFUMQU", "HuVCpmfKheI2Q", "u6uAu3yyDNqRq", "PnpkimJ5mrZRe", "LmNwrBhejkK9EFP504", "5ntdy5Ban1dIY"]);

  const fetchGiphyAPI = (keyword) => {
    giphy.search({
      q: keyword,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      const ids = res.data.map(gif => gif.id);
      setGifIds(ids);
    });
  };

  return (
    <div>
      <div className="left-scene">
        <SearchBar fetchGiphyAPI={fetchGiphyAPI} />
        <div className="selected-gif">
          <Gif id={selectedGif} />
        </div>
      </div>
      <div className="right-scene">
        <GifList gifIds={gifIds} setSelectedGif={setSelectedGif} />
      </div>
    </div>
  );
};

export default App;
