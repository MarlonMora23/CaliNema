/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, e as renderComponent, a as addAttribute } from '../chunks/astro/server_fyeRQW9z.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_6_vF2_xe.mjs';
import 'clsx';
/* empty css                                 */
import { $ as $$Image } from '../chunks/_astro_assets_jCsoHRcZ.mjs';
export { renderers } from '../renderers.mjs';

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="nav__container" data-astro-cid-3ef6ksr2> <nav class="nav" data-astro-cid-3ef6ksr2> <a href="/" class="nav__scroll" data-astro-cid-3ef6ksr2> <h2 class="nav__logo--link" data-astro-cid-3ef6ksr2>CaliNema</h2> </a> <ul class="nav__list" data-astro-cid-3ef6ksr2> <li class="nav__item" data-astro-cid-3ef6ksr2> <div class="search__container" data-astro-cid-3ef6ksr2> <input class="search__input" id="searchInput" type="text" name="" placeholder="Buscar..." data-astro-cid-3ef6ksr2> <button class="clear__search" id="clearSearchButton" data-astro-cid-3ef6ksr2> <img src="/close.svg" alt="cerrrar" data-astro-cid-3ef6ksr2> </button> <button class="search__button" id="searchButton" data-astro-cid-3ef6ksr2> <img src="/search.svg" alt="search" data-astro-cid-3ef6ksr2> </button> </div> </li> <li class="nav__item submenu" data-astro-cid-3ef6ksr2> <div class="nav__item--container" data-astro-cid-3ef6ksr2> <div class="nav__link" id="cines" data-astro-cid-3ef6ksr2>Cines</div> <img src="/arrow_drop_down.svg" alt="flecha" data-astro-cid-3ef6ksr2> </div> <ul class="submenu__content" data-astro-cid-3ef6ksr2> <li class="nav__item" data-astro-cid-3ef6ksr2> <a href="#movies__cinecolombia" class="nav__scroll cinema__link" data-astro-cid-3ef6ksr2>CineColombia</a> </li> <li class="nav__item" data-astro-cid-3ef6ksr2> <a href="#movies__cinepolis" class="nav__scroll cinema__link" data-astro-cid-3ef6ksr2>Cinepolis</a> </li> <li class="nav__item" data-astro-cid-3ef6ksr2> <a href="#movies__cinemark" class="nav__scroll cinema__link" data-astro-cid-3ef6ksr2>Cinemark</a> </li> <li class="nav__item" data-astro-cid-3ef6ksr2> <a href="#movies__izimovie" class="nav__scroll cinema__link" data-astro-cid-3ef6ksr2>IziMovie</a> </li> <li class="nav__item" data-astro-cid-3ef6ksr2> <a href="#movies__royalfilms" class="nav__scroll cinema__link" data-astro-cid-3ef6ksr2>RoyalFilms</a> </li> </ul> </li> </ul> <img src="/menu.svg" alt="" class="nav__menu" data-astro-cid-3ef6ksr2> </nav> </header> `;
}, "C:/Users/MarlonPC/OneDrive/Documentos/Projects/Calinema/App_Calinema/tested-trappist/src/components/Header.astro", void 0);

const $$Movies = createComponent(async ($$result, $$props, $$slots) => {
  const response = await fetch("https://api-calinema.onrender.com/api/movies/");
  const movies = await response.json();
  return renderTemplate`${maybeRenderHead()}<section class="movies__main" data-astro-cid-ehhoux7e> <section class="movies__cinecolombia movies__container" data-astro-cid-ehhoux7e> <article class="movies__texts" data-astro-cid-ehhoux7e> <h2 class="cinema__title" data-astro-cid-ehhoux7e>CineColombia</h2> <ul class="movie__list" data-astro-cid-ehhoux7e> <!-- Mensaje por si no hay películas --> <li class="noMovies__message--item" style="display: none;" data-astro-cid-ehhoux7e> <h2 class="noMovies__message" data-astro-cid-ehhoux7e>
No hay películas disponibles
</h2> </li> ${movies.map(
    (movie) => movie.cinema_name === "CineColombia" && renderTemplate`<li class="movie__items" data-astro-cid-ehhoux7e> <figure class="movie__figure" data-astro-cid-ehhoux7e> ${renderComponent($$result, "Image", $$Image, { "class": "movie__img", "src": movie.image_url, "data-id": movie.id, "data-title": movie.title, "data-cinema": movie.cinema_name, "alt": movie.title, "width": 230, "height": 345, "data-astro-cid-ehhoux7e": true })} </figure> <div class="movie__texts" data-astro-cid-ehhoux7e> <h3 class="movie__title" data-astro-cid-ehhoux7e> ${movie.title} </h3> <p class="movie__cinema" data-astro-cid-ehhoux7e> ${movie.cinema_name} </p> </div> </li>`
  )} </ul> </article> </section> <section class="movies__cinepolis movies__container" data-astro-cid-ehhoux7e> <article class="movies__texts" data-astro-cid-ehhoux7e> <h2 class="cinema__title" data-astro-cid-ehhoux7e>Cinepolis</h2> <ul class="movie__list" data-astro-cid-ehhoux7e> <!-- Mensaje por si no hay películas --> <li class="noMovies__message--item" style="display: none;" data-astro-cid-ehhoux7e> <h2 class="noMovies__message" data-astro-cid-ehhoux7e>
No hay películas disponibles
</h2> </li> ${movies.map(
    (movie) => movie.cinema_name === "Cinepolis" && renderTemplate`<li class="movie__items" data-astro-cid-ehhoux7e> <figure class="movie__figure" data-astro-cid-ehhoux7e> ${renderComponent($$result, "Image", $$Image, { "class": "movie__img", "src": movie.image_url, "data-id": movie.id, "data-title": movie.title, "data-cinema": movie.cinema_name, "alt": movie.title, "width": 230, "height": 345, "data-astro-cid-ehhoux7e": true })} </figure> <div class="movie__texts" data-astro-cid-ehhoux7e> <h3 class="movie__title" data-astro-cid-ehhoux7e> ${movie.title} </h3> <p class="movie__cinema" data-astro-cid-ehhoux7e> ${movie.cinema_name} </p> </div> </li>`
  )} </ul> </article> </section> <section class="movies__cinemark movies__container" data-astro-cid-ehhoux7e> <article class="movies__texts" data-astro-cid-ehhoux7e> <h2 class="cinema__title" data-astro-cid-ehhoux7e>Cinemark</h2> <ul class="movie__list" data-astro-cid-ehhoux7e> <!-- Mensaje por si no hay películas --> <li class="noMovies__message--item" style="display: none;" data-astro-cid-ehhoux7e> <h2 class="noMovies__message" data-astro-cid-ehhoux7e>
No hay películas disponibles
</h2> </li> ${movies.map(
    (movie) => movie.cinema_name === "Cinemark" && renderTemplate`<li class="movie__items" data-astro-cid-ehhoux7e> <figure class="movie__figure" data-astro-cid-ehhoux7e> ${renderComponent($$result, "Image", $$Image, { "class": "movie__img", "src": movie.image_url, "data-id": movie.id, "data-title": movie.title, "data-cinema": movie.cinema_name, "alt": movie.title, "width": 230, "height": 345, "data-astro-cid-ehhoux7e": true })} </figure> <div class="movie__texts" data-astro-cid-ehhoux7e> <h3 class="movie__title" data-astro-cid-ehhoux7e> ${movie.title} </h3> <p class="movie__cinema" data-astro-cid-ehhoux7e> ${movie.cinema_name} </p> </div> </li>`
  )} </ul> </article> </section> <section class="movies__izimovie movies__container" data-astro-cid-ehhoux7e> <article class="movies__texts" data-astro-cid-ehhoux7e> <h2 class="cinema__title" data-astro-cid-ehhoux7e>IziMovie</h2> <ul class="movie__list" data-astro-cid-ehhoux7e> <!-- Mensaje por si no hay películas --> <li class="noMovies__message--item" style="display: none;" data-astro-cid-ehhoux7e> <h2 class="noMovies__message" data-astro-cid-ehhoux7e>
No hay películas disponibles
</h2> </li> ${movies.map(
    (movie) => movie.cinema_name === "IziMovie" && renderTemplate`<li class="movie__items" data-astro-cid-ehhoux7e> <figure class="movie__figure" data-astro-cid-ehhoux7e> ${renderComponent($$result, "Image", $$Image, { "class": "movie__img", "src": movie.image_url, "data-id": movie.id, "data-title": movie.title, "data-cinema": movie.cinema_name, "alt": movie.title, "width": 230, "height": 345, "data-astro-cid-ehhoux7e": true })} </figure> <div class="movie__texts" data-astro-cid-ehhoux7e> <h3 class="movie__title" data-astro-cid-ehhoux7e> ${movie.title} </h3> <p class="movie__cinema" data-astro-cid-ehhoux7e> ${movie.cinema_name} </p> </div> </li>`
  )} </ul> </article> </section> <section class="movies__royalfilms movies__container" data-astro-cid-ehhoux7e> <article class="movies__texts" data-astro-cid-ehhoux7e> <h2 class="cinema__title" data-astro-cid-ehhoux7e>RoyalFilms</h2> <ul class="movie__list" data-astro-cid-ehhoux7e> <!-- Mensaje por si no hay películas --> <li class="noMovies__message--item" style="display: none;" data-astro-cid-ehhoux7e> <h2 class="noMovies__message" data-astro-cid-ehhoux7e>
No hay películas disponibles
</h2> </li> ${movies.map(
    (movie) => movie.cinema_name === "RoyalFilms" && renderTemplate`<li class="movie__items" data-astro-cid-ehhoux7e> <figure class="movie__figure" data-astro-cid-ehhoux7e> <img class="movie__img"${addAttribute(movie.image_url, "src")}${addAttribute(movie.id, "data-id")}${addAttribute(movie.title, "data-title")}${addAttribute(movie.cinema_name, "data-cinema")} data-astro-cid-ehhoux7e> </figure> <div class="movie__texts" data-astro-cid-ehhoux7e> <h3 class="movie__title" data-astro-cid-ehhoux7e> ${movie.title} </h3> <p class="movie__cinema" data-astro-cid-ehhoux7e> ${movie.cinema_name} </p> </div> </li>`
  )} </ul> </article> </section> </section>  `;
}, "C:/Users/MarlonPC/OneDrive/Documentos/Projects/Calinema/App_Calinema/tested-trappist/src/components/Movies.astro", void 0);

const calinema_banner = new Proxy({"src":"/_astro/calinema_banner.Bktsb6sq.webp","width":1472,"height":628,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/MarlonPC/OneDrive/Documentos/Projects/Calinema/App_Calinema/tested-trappist/public/calinema_banner.webp";
							}
							
							return target[name];
						}
					});

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="hero__main container container--hero" data-astro-cid-bbe6dxrz> <figure class="hero__figure" data-astro-cid-bbe6dxrz> ${renderComponent($$result, "Image", $$Image, { "src": calinema_banner, "alt": "Calinema banner", "class": "hero__img", "loading": "eager", "data-astro-cid-bbe6dxrz": true })} </figure> </section> `;
}, "C:/Users/MarlonPC/OneDrive/Documentos/Projects/Calinema/App_Calinema/tested-trappist/src/components/Hero.astro", void 0);

const $$App = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<main> ${renderComponent($$result, "Header", $$Header, {})} ${renderComponent($$result, "Hero", $$Hero, {})} ${renderComponent($$result, "Movies", $$Movies, {})} </main>`;
}, "C:/Users/MarlonPC/OneDrive/Documentos/Projects/Calinema/App_Calinema/tested-trappist/src/components/pages/App.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "CaliNema", ",": true, "description": "CaliNema es el sitio en el que encontrar\xE1s todas las pel\xEDculas y funciones de Cali." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "App", $$App, {})} ` })}`;
}, "C:/Users/MarlonPC/OneDrive/Documentos/Projects/Calinema/App_Calinema/tested-trappist/src/pages/index.astro", void 0);

const $$file = "C:/Users/MarlonPC/OneDrive/Documentos/Projects/Calinema/App_Calinema/tested-trappist/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
