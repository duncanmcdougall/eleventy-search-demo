(function (window, document) {
  "use strict";

  const search = (e) => {
    const results = window.searchIndex.search(e.target.value, {
      bool: "OR",
      expand: true,
    });

    // search keyword
    const kw = e.target.value;
    var regEx = new RegExp(kw, "ig");

    const resEl = document.getElementById("searchResults");
    const noResultsEl = document.getElementById("noResultsFound");

    resEl.innerHTML = "";
    if (e.target.value != "") {
      if (results != "") {
        noResultsEl.style.display = "none";
        results.map((r) => {
          var { id, title, description } = r.doc;
          const el = document.createElement("li");
          resEl.appendChild(el);

          const h3 = document.createElement("h3");
          el.appendChild(h3);

          const a = document.createElement("a");
          a.setAttribute("href", id);
          if (description && kw){
            if (title.toLowerCase().includes(kw.toLowerCase())){
              title = title.replace(regEx, function (x) {
                return '<mark>'+x+'</mark>';
              });
            }
          }
          a.innerHTML = title;
          h3.appendChild(a);

          const p = document.createElement("p");
          if (description && kw){
            if (description.toLowerCase().includes(kw.toLowerCase())){
              description = description.replace(regEx, function (x) {
                return '<mark>'+x+'</mark>';
              });
            }
            if (description.length > 500){
              description = "..." + description.substring(description.indexOf("<mark>")-1, description.indexOf("<mark>")+kw.length+15) + "..."
            }
          }
          p.innerHTML = description;
          el.appendChild(p);
        });
      } else {
        noResultsEl.style.display = "block";
      }
    } else {
      noResultsEl.style.display = "none";
    }
  };

  fetch("/pages/search-index.json").then((response) =>
    response.json().then((rawIndex) => {
      window.searchIndex = elasticlunr.Index.load(rawIndex);
      document.getElementById("searchField").addEventListener("input", search);
    })
  );
})(window, document);
