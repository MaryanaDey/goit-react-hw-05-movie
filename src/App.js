import './App.css';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navigation from './components/Navigation/Navigation';

const Home = lazy(() => import('./routes/Home/Home' /* webpackChunkName: "home-view" */));
const NotFound = lazy(() =>
  import('./views/NoteFound/NoteFound.jsx' /* webpackChunkName: "not-found-view" */),
);
const Movies = lazy(() =>
  import('./views/Movies/Movies.jsx' /* webpackChunkName: "movies-view" */),
);

export default function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </Suspense>
  );
}
