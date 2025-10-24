const user = {
  avatarUrl: "",
  name: "",
  bio: "",
  followersUrl: 0,
  followingUrl: 0,
  fork: 0,
  stargazers: 0,
  watchers: 0,
  language: "",
  userName: "",
  repositories: [],
  events: [],
  setInfo(gitHubUser) {
    this.avatarUrl = gitHubUser.avatar_url;
    this.name = gitHubUser.name;
    this.bio = gitHubUser.bio;
    this.userName = gitHubUser.login;
    this.followersUrl = gitHubUser.followers;
    this.followingUrl = gitHubUser.following;
  },
  setRepositories(repositories) {
    this.repositories = repositories;
    this.fork = repositories.forks;
    this.stargazers = repositories.stargazers_count;
    this.watchers = repositories.watchers;
    this.language = repositories.language;
  },
  setEvents(events) {
    this.events = events;
  },
};

export { user };
