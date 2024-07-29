import React, { useEffect } from "react";

import gql from "graphql-tag";
import { graphql } from "react-apollo";

function renderSongs(props) {
  return props.data.songs.map((song) => {
    return <li key={song.id} className="collection-item">{song.title}</li>;
  });
}
function SongLists(props) {
  // console.log(props);
  //   useEffect(() => {}, []);
  if (props.data.loading) return <div>Loading...</div>;
  return <ul className="collection">{renderSongs(props)}</ul>;
}

const query = gql`
  {
    songs {
      id
      title
    }
  }
`;

export default graphql(query)(SongLists);
