# aftermath-theme

A Hugo theme for post-apocalyptic RPG campaign sites. Stencil headings, typed
body text, an olive-drab canvas with a manila sheet on top. No JavaScript, no
external requests: fonts are bundled.

Tested with Hugo extended 0.147. Needs 0.128 or later.

## Install (theme kept in the same repo as the content)

Unpack so the folder sits at `themes/aftermath-theme/` in your site repo, then
in your site config:

```toml
theme = "aftermath-theme"
```

To try the bundled sample content without touching your own:

```sh
cd themes/aftermath-theme/exampleSite
hugo server --themesDir ../..
```

## Typography

| Role | Font |
| --- | --- |
| Headings, site name, stamps | Allerta Stencil |
| Body text | Courier Prime (regular, italic, bold) |
| Terminal blocks | VT323 |

The files live in `static/fonts/` (SIL OFL 1.1, licenses alongside). The
`@font-face` rules are in `layouts/partials/head.html`. To swap a font, replace
the file, edit that rule, and change the matching `--font-*` variable at the top
of `assets/css/main.css`.

## Colors

All colors are variables at the top of `assets/css/main.css` (`--canvas`,
`--sheet`, `--ink`, `--stamp`, and so on). Change them there.

## Site config

```toml
[params]
  tagline = "Recovery team records"   # shown under the home page title
  description = "Meta description"
  dateFormat = "2006-01-02"           # Go reference-time layout
  indexTitle = "Contents"             # heading for the home page section list
  homeRecent = 3                      # latest blog entries on the home page
  footer = "Markdown allowed."        # omit for no footer
```

The hamburger menu is built from your top-level sections and their child
sections. Define `[[menus.main]]` entries in your config to replace it.

## Front matter

| Key | Where | Effect |
| --- | --- | --- |
| `title`, `description` | any page | Page title and meta description |
| `tagline` | any page | Italic line under the title; also shown in contents lists |
| `weight` | any page | Order within its section (default sort) |
| `sortby` | section `_index.md` | `weight` (default), `title`, or `date` (newest first) |
| `classification` | any page | Red stamp above the title |
| `toc` | single page | Show a contents box built from the headings |
| `showdate` | single page | Show the date (blog pages always show it) |

Previous/next links at the bottom of a page follow the same order as its
section list.

## Shortcodes

Use the `{{< >}}` form for all of them.

```
{{< memo ref="MP-001" to="Team Leader" from="Command" date="1987-05-14" subject="Directive" >}}

{{< callout >}}Note text.{{< /callout >}}
{{< callout type="warning" title="Hazard" >}}Warning text.{{< /callout >}}

{{< classified level="Eyes only" >}}Restricted text.{{< /classified >}}

{{< terminal title="STATUS" >}}
> LINE ONE
{{< /terminal >}}

{{< redact >}}hidden until hover or focus{{< /redact >}}
{{< stamp "Declassified" >}}
```

## Archetypes

`default`, `docs`, `blog` and `section` are included.

```sh
hugo new docs/bowl/features.md
hugo new blog/session-one.md
hugo new --kind section docs/bowl/_index.md
```

Archetypes in your site root override the theme copies.

## Layout

```
archetypes/            starting front matter
assets/css/main.css    the whole stylesheet (minified and fingerprinted in production)
layouts/_default/      base, single, list
layouts/index.html     home page
layouts/partials/      head, header, nav, footer, breadcrumbs, pager, entry, sorted
layouts/shortcodes/    memo, callout, classified, terminal, redact, stamp
static/fonts/          bundled fonts and their licenses
exampleSite/           sample config and content
```
