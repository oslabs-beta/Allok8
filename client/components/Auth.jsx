class Auth {
  constructor() {
    this.authenticated = false;
    this.link = '';
  }

  login(cb, link) {
    this.authenticated = true;
    this.link = link;
    cb();
  }

  logout(cb) {
    this.authenticated = false;
    cb();
  }

  isAuthenticated() {
    return this.authenticated;
  }
}

export default new Auth();
