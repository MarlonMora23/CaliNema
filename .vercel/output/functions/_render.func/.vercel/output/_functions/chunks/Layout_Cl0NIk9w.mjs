import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as renderHead, d as renderSlot, e as renderComponent, f as createAstro } from './astro/server_fyeRQW9z.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                         */

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="footer" data-astro-cid-sz7xmlte> <p data-astro-cid-sz7xmlte>&copy; Marlon Mora</p> </footer> `;
}, "C:/Users/MarlonPC/OneDrive/Documentos/Projects/Calinema/App_Calinema/tested-trappist/src/components/Footer.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description"${addAttribute(description, "content")}><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} </body></html>`;
}, "C:/Users/MarlonPC/OneDrive/Documentos/Projects/Calinema/App_Calinema/tested-trappist/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
