import { useLocation } from 'react-router-dom';
import {
  FilmCard,
  Poster,
  DetailsCard,
  FilmTitle,
  Datas,
  DatasTitle,
  AddTitle,
  AddList,
  AddItem,
  LinkStyle,
} from './FilmDataCard.styled';

export default function FilmDataCard({ film, genres }) {
  const location = useLocation();
  return (
    <>
      <FilmCard>
        <Poster />
        <DetailsCard>
          <FilmTitle></FilmTitle>
          <Datas>User Score:</Datas>
          <DatasTitle>Overview</DatasTitle>
          <Datas></Datas>
          <DatasTitle>Genres</DatasTitle>
          <Datas>{genres}</Datas>
        </DetailsCard>
      </FilmCard>
      <AddTitle>Additional information</AddTitle>
      <AddList>
        <AddItem>
          <LinkStyle to={`/movies/${film.id}/cast`} state={location.state}></LinkStyle>
        </AddItem>
        <AddItem>
          <LinkStyle to={`/movies/${film.id}/reviews`} state={location.state}></LinkStyle>
        </AddItem>
      </AddList>
    </>
  );
}
