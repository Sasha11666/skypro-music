import React from "react";
import PlayItem from "./PlayItem";

export const items = [
  {
    title: "Guilt",
    author: "Nero",
    album: "Welcome Reality",
    time: "4:44",
    id: 1,
  },
  {
    title: "Elektro",
    author: "Dynoro, Outwork, Mr. Gee",
    album: "Elektro",
    time: "2:22",
    id: 2,
  },
  {
    title: "Elektro",
    author: "Dynoro, Outwork, Mr. Gee",
    album: "Elektro",
    time: "2:22",
    id: 3,
  },
  {
    title: "I’m Fire",
    author: "Ali Bakgor",
    album: "I’m Fire",
    time: "2:22",
    id: 4,
  },
  {
    title: "Non Stop",
    author: "Стоункат, Psychopath",
    album: "Non Stop",
    time: "4:12",
    id: 5,
  },
  {
    title: "Run Run",
    author: "Jaded, Will Clarke, AR/CO",
    album: "Run Run",
    time: "2:54",
    id: 6,
  },
  {
    title: "Eyes on Fire",
    author: "Blue Foundation, Zeds Dead",
    album: "Eyes on Fire",
    time: "5:20",
    id: 7,
  },
  {
    title: "Mucho Bien",
    author: "HYBIT, Mr. Black, Offer Nissim, Hi Profile",
    album: "Mucho Bien",
    time: "3:41",
    id: 8,
  },
  {
    title: "Knives n Cherries",
    author: "minthaze",
    album: "Captivating",
    time: "1:48",
    id: 9,
  },
  {
    title: "How Deep Is Your Love",
    author: "Calvin Harris, Disciples",
    album: "How Deep Is Your Love",
    time: "3:32",
    id: 10,
  },
  {
    title: "Morena",
    author: "Tom Boxer",
    album: "Soundz Made in Romania",
    time: "3:36",
    id: 11,
  },
  {
    title: "Morena",
    author: "Tom Boxer",
    album: "Soundz Made in Romania",
    time: "3:36",
    id: 12,
  },
  {
    title: "",
    author: "",
    album: "",
    time: "",
    id: 13,
  },
];

function Playlist() {
  return (
    <div className="content__playlist playlist">
      {items.map(({ id, title, author, album, time }) => (
        <PlayItem
          key={id}
          title={title}
          author={author}
          album={album}
          time={time}
        />
      ))}
    </div>
  );
}

export default Playlist;
