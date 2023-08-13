import * as S from "./Styles";

export default function VolumeProgress({ currentVolume, setCurrentVolume }) {
  const duration = 1;

  return (
    <S.VolumeProgressLine
      type="range"
      min={0}
      max={duration}
      value={currentVolume}
      step={0.01}
      onChange={(event) => setCurrentVolume(event.target.value)}
      $color="#ff0000"
    />
  );
}
