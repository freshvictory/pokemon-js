export class Navigation {


  static navigate(path) {
    window.history.push(path);
  }


  static query(id, value) {
    const params = new URLSearchParams(window.location.search);
    params.set(id, value)
    window.history.replace(window.location.pathname + '?' + params.toString());
  }
}


export class Router {
  constructor() {
    this.routes = [];
  }


  route() {
    const path = window.location.pathname.endsWith('/')
      ? window.location.pathname.substring(0, window.location.pathname.length - 1)
      : window.location.pathname;

    for (const route of this.routes) {
      if (route.path instanceof RegExp) {
        const matches = path.match(route.path);
        if (matches) {          
          return route.load(matches.slice(1), new URLSearchParams(window.location.search));
        }
      } else if (path === route.path) {
        route.load();
      }
    }
  }


  add(name, path, load) {
    this.routes.push(new Route(name, path, load));

    return this;
  }
}

class Route {
  constructor(name, path, load) {
    this.name = name;
    this.path = path;
    this.load = load;
  }
}
