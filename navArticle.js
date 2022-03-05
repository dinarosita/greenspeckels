/* navArticle.js
About: automatically generated navigation bar of articles. Styling class included.
Requirements: 
1. <nav id="navMenu"></nav>
2. <article id="article_name">
   ID format: lowercase, _ or - separated. 
   Will be automatically modified into button title.
   Button title format: uppercase first letter, space separated.
   Example: ID: "img_media" => Title: "Img media"
*/

function makeTitle (id) {
    let title = id;
    title = title.replace(/[_-]/g, " ");
    title = title[0].toUpperCase() + title.substring(1);
    return title;
};

function makeNavUl () {
    /* Generate and append <ul> in <nav id="navMenu"> */
    const navUl = document.createElement("ul");
    navUl.id = "navUl"
    document.querySelector("#navMenu").appendChild(navUl);
    document.querySelector("#navMenu").className = "html-nav";
}

function articleNavBar (sect) {
    /* Grab article id and create title */
    const articleID = sect.id;
    const articleTitle = makeTitle(articleID);

    /* Generate and append <li> */
    const navLi = document.createElement("li");
    navLi.id = articleID + "Button";
    // navLi.title = "Go to " + articleTitle;
    document.querySelector("#navUl").appendChild(navLi);

    /* Generate and append <a> */
    const navA = document.createElement("a");
    navA.href = `#${articleID}`;
    navA.textContent = articleTitle;
    navLi.appendChild(navA);
};

makeNavUl();
document.querySelectorAll("article").forEach(articleNavBar);