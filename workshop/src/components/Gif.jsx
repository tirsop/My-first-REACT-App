import React from 'react';

const Gif = (props) => {
  const { id, setSelectedGif } = props;
  const url = `https://media.giphy.com/media/${id}/giphy.gif`;
  // const handleClick = () => {
  //   if (setSelectedGif) {
  //     setSelectedGif(id);
  //   }
  // };
  const handleClick = () => {
    setSelectedGif(id);
  };

  return (
    <img onClick={handleClick} src={url} className="gif" alt="gif" />
  );
};

export default Gif;
