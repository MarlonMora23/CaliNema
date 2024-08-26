/* empty css                                    */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, f as createAstro, e as renderComponent } from '../../chunks/astro/server_fyeRQW9z.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_6_vF2_xe.mjs';
import 'clsx';
/* empty css                                         */
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro();
const $$MovieDetails = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MovieDetails;
  const { movie_id } = Astro2.params;
  const movie_response = await fetch(
    `https://api-calinema.onrender.com/api/movies/${movie_id}`
  );
  const movie = await movie_response.json();
  const showtimes_response = await fetch(
    "https://api-calinema.onrender.com/api/cinemashowtime/"
  );
  const showtimes = await showtimes_response.json();
  const filteredShowtimes = showtimes.filter(
    (showtime) => showtime.movie === movie.id
  );
  const lastShowtime = filteredShowtimes[filteredShowtimes.length - 1];
  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("es-ES", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  }
  const formattedMovieDate = movie.updated_at ? formatDate(movie.updated_at) : null;
  const formattedFunctionsDate = lastShowtime ? formatDate(lastShowtime.updated_at) : null;
  return renderTemplate`${maybeRenderHead()}<header class="nav__container" data-astro-cid-qfjwv5mj> <nav class="nav" data-astro-cid-qfjwv5mj> <a href="/" class="nav__scroll" data-astro-cid-qfjwv5mj> <h2 class="nav__logo--link" data-astro-cid-qfjwv5mj>CaliNema</h2> </a> </nav> </header> <main data-astro-cid-qfjwv5mj> <div class="details__container" data-astro-cid-qfjwv5mj> <div class="movie__poster" data-astro-cid-qfjwv5mj> <section class="movie__figure" data-astro-cid-qfjwv5mj> <img class="movie__img"${addAttribute(movie.image_url, "src")} alt="img" data-astro-cid-qfjwv5mj> </section> <div class="showtimes__date" data-astro-cid-qfjwv5mj> ${renderTemplate`<i data-astro-cid-qfjwv5mj>
* Fecha de obtencion de la pelicula:${" "} ${formattedMovieDate} </i>`} </div> </div> <div class="movie__info" data-astro-cid-qfjwv5mj> <section class="movie__details"${addAttribute(movie.original_title, "data-original-title")}${addAttribute(movie.country_origin, "data-country-origin")}${addAttribute(movie.director, "data-director")}${addAttribute(movie.actors, "data-actors")}${addAttribute(movie.language, "data-language")} data-astro-cid-qfjwv5mj> <h2 class="movie__title" data-astro-cid-qfjwv5mj>${movie.title}</h2> <div class="info__container" data-astro-cid-qfjwv5mj> <h3 class="movie__cinema" data-astro-cid-qfjwv5mj> ${movie.cinema_name} </h3> <h3 class="movie__length" data-astro-cid-qfjwv5mj> ${movie.duration} </h3> <button class="movie__button-details" data-astro-cid-qfjwv5mj>Ver detalles</button> </div> <div class="more__info__container" data-astro-cid-qfjwv5mj> <h3 class="movie__classification" data-astro-cid-qfjwv5mj> ${movie.classification} </h3> <h3 class="movie__genres" data-astro-cid-qfjwv5mj> ${Array.isArray(movie.genres) && movie.genres.length > 0 ? movie.genres.join(", ") : ""} </h3> </div> <p class="movie__synopsis" data-astro-cid-qfjwv5mj> ${movie.synopsis} </p> </section> <section class="movie__functions" data-astro-cid-qfjwv5mj> <div class="functions__container" data-astro-cid-qfjwv5mj> <h3 class="functions__title" data-astro-cid-qfjwv5mj>Funciones</h3> <ul class="functions__list" data-astro-cid-qfjwv5mj> ${showtimes.map(
    (showtime) => showtime.movie === movie.id && renderTemplate`<li class="function__container" data-astro-cid-qfjwv5mj> <a${addAttribute(showtime.url, "href")} class="function__link" data-astro-cid-qfjwv5mj> <div class="function__item" data-astro-cid-qfjwv5mj> <h3 class="room__title" data-astro-cid-qfjwv5mj>
Sala ${showtime.room} </h3> <h4 class="format__title" data-astro-cid-qfjwv5mj> ${showtime.format} </h4> <h4 class="date__title" data-astro-cid-qfjwv5mj> ${showtime.date} </h4> <h4 class="schedule__item" data-astro-cid-qfjwv5mj> ${showtime.schedule} </h4> </div> </a> </li>`
  )} </ul> </div> <div class="functions__date" data-astro-cid-qfjwv5mj> <div class="showtimes__date" data-astro-cid-qfjwv5mj> ${formattedFunctionsDate && renderTemplate`<i data-astro-cid-qfjwv5mj>
* Fecha de obtención de las funciones:${" "} ${formattedFunctionsDate} </i>`} </div> </div> </section> </div> </div> </main>  `;
}, "C:/Users/MarlonPC/OneDrive/Documentos/Projects/Calinema/App_Calinema/tested-trappist/src/components/pages/MovieDetails.astro", void 0);

const $$Astro = createAstro();
async function getStaticPaths() {
  const response = await fetch("https://api-calinema.onrender.com/api/movies/");
  const movies = await response.json();
  return [
    ...movies.map((movie) => ({
      params: { movie_id: movie.id.toString() }
    }))
  ];
}
const $$movieId = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$movieId;
  const { movie_id } = Astro2.params;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "CaliNema", ",": true, "description": "CaliNema es el sitio en el que encontrar\xE1s todas las pel\xEDculas y funciones de Cali." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "MovieDetails", $$MovieDetails, { "movie_id": movie_id })} ` })}`;
}, "C:/Users/MarlonPC/OneDrive/Documentos/Projects/Calinema/App_Calinema/tested-trappist/src/pages/movie-details/[movie_id].astro", void 0);

const $$file = "C:/Users/MarlonPC/OneDrive/Documentos/Projects/Calinema/App_Calinema/tested-trappist/src/pages/movie-details/[movie_id].astro";
const $$url = "/movie-details/[movie_id]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$movieId,
    file: $$file,
    getStaticPaths,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
