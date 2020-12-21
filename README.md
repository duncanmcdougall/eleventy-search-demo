# Eleventy ElasticlunrJS

I modified from [eleventy-search-demo](https://github.com/duncanmcdougall/eleventy-search-demo) with many fixed bugs and new features (I've asked for a pull request but the author didn't answer me! So I decide to make a different repository with my customization).

👉 **Demo**: <https://wizardly-mccarthy-186661.netlify.app>

📌 **Features**:

1. Using [Elasticlunrjs](http://elasticlunr.com/) for a client search site.
2. Instant search (search when you type keywords, change with key hit).
3. Flexible trigger keyboards (Arrow keys, Tab key, ESC).
4. Quick key to focused (`/` like on Youtube, can be customized).
5. Handle focused element.
6. Only show result when available.
7. Highlight keywords in the result search.
8. ...and many more.

🚀 **Build and run**:

``` bash
npm install # first time only
npm run build # build project
npm run dev # build and watch
```

Movie data from [TheMovieDB](https://developers.themoviedb.org/3/).
