# Hilo

Landing page — herramientas inteligentes para equipos reales.

**Producción:** https://gasacher.github.io/hilo/

## Desarrollo

```bash
npm install
npm run dev
```

## Publicar cambios

1. Trabajá en la rama `dev`
2. Hacé commit y push → GitHub Actions compila y publica en `gh-pages`
3. En unos minutos el sitio se actualiza

**GitHub Pages:** Settings → Pages → Deploy from branch → `gh-pages` / root

## Estructura del repo

| Rama | Contenido |
|------|-----------|
| `dev` | Código fuente (Next.js) |
| `gh-pages` | Sitio compilado (generado automáticamente) |
