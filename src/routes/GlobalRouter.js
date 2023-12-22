import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from '../views/Landing'
import {Header} from "../component/Header";
import {Movies} from "../views/Movies";
import {MovieDetails} from "../views/MovieDetails";
import {Documentaries} from "../views/Documentaries";
import {DocumentaryDetails} from "../views/DocumentaryDetails";
import {PlayVideo} from "../views/PlayVideo";
import {GeneralBrowse} from "../views/GeneralBrowse";
import {DocumentaryBrowse} from "../views/DocumentaryBrowse";
import {MovieBrowse} from "../views/MovieBrowse";
import {Footer} from "../component/Footer";
import {PageNotFound} from "../views/PageNotFound";

function GlobalRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout><Landing /></Layout>}/>
                <Route path="/peliculas" element={<Layout><Movies /></Layout>}/>
                <Route path="/documentales" element={<Layout><Documentaries /></Layout>}/>
                <Route path="/peliculas/:movieId" element={<Layout><MovieDetails /></Layout>} />
                <Route path="/peliculas/:movieId/play-video" element={<Layout><PlayVideo /></Layout>} />
                <Route path="/documentales/:documentaryId" element={<Layout><DocumentaryDetails /></Layout>} />
                <Route path="/documentales/:documentaryId/play-video" element={<Layout><PlayVideo /></Layout>} />
                <Route path="/browse/:keyWord" element={<Layout><GeneralBrowse /></Layout>} />
                <Route path="/browse/documentales/:keyWord" element={<Layout><DocumentaryBrowse /></Layout>} />
                <Route path="/browse/peliculas/:keyWord" element={<Layout><MovieBrowse /></Layout>} />
                <Route path="*" element={<Layout><PageNotFound /></Layout>}/>
            </Routes>
        </BrowserRouter>
    );
}

const Layout = ({children}) => (
    <>
        <Header />
        {children}
        <Footer/>
    </>
);

export default GlobalRouter;