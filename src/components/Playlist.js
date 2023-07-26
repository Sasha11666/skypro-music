import React from "react";
import PlayItem from "./PlayItem";
import * as S from "./Styles";

export const items = [
  {
    title: "Guilt",
    author: "Nero",
    album: "Welcome Reality",
    time: "4:44",
    year: "2011",
    genre: "Electronic rock",
    id: 1,
  },
  {
    title: "Elektro",
    author: "Dynoro, Outwork, Mr. Gee",
    album: "Elektro",
    time: "2:22",
    year: "2020",
    genre: "Electronic",
    id: 2,
  },
  {
    title: "I’m Fire",
    author: "Ali Bakgor",
    album: "I’m Fire",
    time: "2:22",
    year: "2021",
    genre: "Pop",
    id: 3,
  },
  {
    title: "Non Stop",
    author: "Стоункат, Psychopath",
    album: "Non Stop",
    time: "4:12",
    year: "2021",
    genre: "Pop",
    id: 4,
  },
  {
    title: "Run Run",
    author: "Jaded, Will Clarke, AR/CO",
    album: "Run Run",
    time: "2:54",
    year: "2021",
    genre: "Dance music",
    id: 5,
  },
  {
    title: "Eyes on Fire",
    author: "Blue Foundation, Zeds Dead",
    album: "Eyes on Fire",
    time: "5:20",
    year: "2009",
    genre: "Dream pop",
    id: 6,
  },
  {
    title: "Mucho Bien",
    author: "HYBIT, Mr. Black, Offer Nissim, Hi Profile",
    album: "Mucho Bien",
    time: "3:41",
    year: "2020",
    genre: "Pop",
    id: 7,
  },
  {
    title: "Knives n Cherries",
    author: "minthaze",
    album: "Captivating",
    time: "1:48",
    year: "2018",
    genre: "Hip-Hop",
    id: 8,
  },
  {
    title: "How Deep Is Your Love",
    author: "Calvin Harris, Disciples",
    album: "How Deep Is Your Love",
    year: "2015",
    genre: "Deep house",
    time: "3:32",
    id: 9,
  },
  {
    title: "Morena",
    author: "Tom Boxer",
    album: "Soundz Made in Romania",
    time: "3:36",
    year: "2015",
    genre: "Pop",
    id: 10,
  },
  {
    title: "",
    author: "",
    album: "",
    time: "",
    id: 11,
  },
];

function Playlist({ loaded }) {
  return (
    <S.ContentPlaylist>
      {items.map(({ id, title, author, album, time }) => (
        <PlayItem
          key={id}
          title={title}
          author={author}
          album={album}
          time={time}
          loaded={loaded}
        />
      ))}
    </S.ContentPlaylist>
  );
}

export default Playlist;
