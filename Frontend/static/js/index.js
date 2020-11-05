import Dashboard from "./views/dashboard.js";
import Post from "./views/posts.js";
import Settings from "./views/settings.js";
import ErrorPage from "./views/404.js";

//NavigateTo without reload
const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

const router = async () => {
  //Routes
  const routes = [
    {
      path: "/",
      view: Dashboard
    },
    {
      path: "/posts",
      view: Post
    },
    {
      path: "/settings",
      view: Settings
    }
  ];

  //Check potential matches
  const potentialMatches = routes.map((route) => {
    return {
      route,
      isMatch: location.pathname === route.path
    };
  });

  //Find match with true
  let match = potentialMatches.find(
    (potentialMatche) => potentialMatche.isMatch
  );

  //404 Page
  if (!match)
    match = {
      route: {
        view: ErrorPage
      },
      isMatch: true
    };

  const view = new match.route.view();

  document.querySelector("#app").innerHTML = await view.getHtml();

  //   console.log(match.route.view());
};
//Add event to windows on state change
window.addEventListener("popstate", router);

// Add global event listener
document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matches("[data-link]")) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });
  router();
});
