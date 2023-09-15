import React, { useEffect } from "react";
import PlayItem from "./PlayItem";
import * as S from "./Styles";
import { useSelector, useDispatch } from "react-redux";
import {
  setCurrentAlbumPlayer,
  setFilteredAlbum,
} from "../features/currentAlbum";

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
];

function Playlist({ loaded, setShown, error, loading, searchWord }) {
  const tracks = useSelector((state) => state.currentAlbum.value.tracks);
  const unfilteredTracks = useSelector(
    (state) => state.currentAlbum.value.unfilteredTracks
  );
  const dispatch = useDispatch();
  const filteredAuthors = useSelector(
    (state) => state.filterAuthor.value.authors
  );
  const filteredGenres = useSelector((state) => state.filterGenre.value.genres);
  const sortWay = useSelector((state) => state.sortTracks.value.sortWay);
  const compareNumericUp = (a, b) => {
    console.log("compareNumericUp");
    if (
      Number(String(a.release_date).split("").slice(0, 4).join("")) >
      Number(String(b.release_date).split("").slice(0, 4).join(""))
    )
      return 1;
    if (
      Number(String(a.release_date).split("").slice(0, 4).join("")) ===
      Number(String(b.release_date).split("").slice(0, 4).join(""))
    )
      return 0;
    if (
      Number(String(a.release_date).split("").slice(0, 4).join("")) <
      Number(String(b.release_date).split("").slice(0, 4).join(""))
    )
      return -1;
  };

  const compareNumericDown = (a, b) => {
    console.log("compareNumericDown");
    if (
      Number(String(a.release_date).split("").slice(0, 4).join("")) >
      Number(String(b.release_date).split("").slice(0, 4).join(""))
    )
      return -1;
    if (
      Number(String(a.release_date).split("").slice(0, 4).join("")) ===
      Number(String(b.release_date).split("").slice(0, 4).join(""))
    )
      return 0;
    if (
      Number(String(a.release_date).split("").slice(0, 4).join("")) <
      Number(String(b.release_date).split("").slice(0, 4).join(""))
    )
      return 1;
  };

  const sortFunc = () => {
    if (Number(sortWay) === 2) {
      return compareNumericDown;
    } else if (Number(sortWay) === 3) {
      return compareNumericUp;
    }
  };

  useEffect(() => {
    let filteredTracks = unfilteredTracks;
    if (unfilteredTracks) {
      if (Boolean(sortWay)) {
        filteredTracks = [...unfilteredTracks]
          .sort(sortFunc())
          .filter((val) => {
            if (searchWord === "") {
              return val;
            } else if (
              val.name.toLowerCase().includes(searchWord.toLowerCase())
            ) {
              return val;
            }
          })
          .filter((val) => {
            if (filteredAuthors.length <= 0) {
              return val;
            } else if (filteredAuthors.includes(val.author)) {
              return val;
            }
          })
          .filter((val) => {
            if (filteredGenres.length <= 0) {
              return val;
            } else if (filteredGenres.includes(val.genre)) {
              return val;
            }
          });
      } else {
        console.log("Yep!");
        filteredTracks = unfilteredTracks
          .filter((val) => {
            if (searchWord === "") {
              return val;
            } else if (
              val.name.toLowerCase().includes(searchWord.toLowerCase())
            ) {
              return val;
            }
          })
          .filter((val) => {
            if (filteredAuthors.length <= 0) {
              return val;
            } else if (filteredAuthors.includes(val.author)) {
              return val;
            }
          })
          .filter((val) => {
            if (filteredGenres.length <= 0) {
              return val;
            } else if (filteredGenres.includes(val.genre)) {
              return val;
            }
          });
      }
      console.log(filteredTracks);
      dispatch(setFilteredAlbum(filteredTracks));
      dispatch(setCurrentAlbumPlayer(filteredTracks));
    }
  }, [sortWay, searchWord, filteredAuthors, filteredGenres]);

  return (
    <>
      {error && (
        <p style={{ color: "#d9b6ff" }}>
          Не удалось загрузить плейлист, попробуйте позже
        </p>
      )}
      {!error && (
        <S.ContentPlaylist>
          <div>
            {!loading
              ? tracks.map(
                  ({
                    id,
                    name,
                    author,
                    album,
                    duration_in_seconds,
                    track_file,
                    stared_user,
                  }) => (
                    <PlayItem
                      key={id}
                      id={id}
                      title={name}
                      author={author}
                      album={album}
                      time={duration_in_seconds}
                      loaded={loaded}
                      setShown={setShown}
                      url={track_file}
                      likes={stared_user}
                    />
                  )
                )
              : items.map(({ id, title, author, album, time }) => (
                  <PlayItem
                    key={id}
                    title={title}
                    author={author}
                    album={album}
                    time={time}
                    loaded={!loading}
                  />
                ))}{" "}
          </div>
        </S.ContentPlaylist>
      )}
    </>
  );
}

export default Playlist;
