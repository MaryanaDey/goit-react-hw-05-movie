import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
export default function FilmDetails() {
  return (
    <>
      <Suspense fallback={<h4>Loading film-data</h4>}></Suspense>
      <Outlet />
    </>
  );
}
