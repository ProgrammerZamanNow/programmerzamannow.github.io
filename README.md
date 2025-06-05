<div align="center">
  <a href="https://www.programmerzamannow.com/">
    <img
      src="https://scontent.fsub21-1.fna.fbcdn.net/v/t39.30808-1/307504703_465312565642673_1432312120056487708_n.png?stp=dst-png_s200x200&_nc_cat=103&ccb=1-7&_nc_sid=2d3e12&_nc_ohc=W6PS5YbHtg0Q7kNvwFiV1nt&_nc_oc=AdkEJmlUw0LLxxiCmLVIhotnGXd6f1pFDIEQKyBDc5FyYkzroU8akWpM71LExZEY5HY&_nc_zt=24&_nc_ht=scontent.fsub21-1.fna&_nc_gid=sDOjO81vZ0dAAnV7D2MNsw&oh=00_AfN6hxGVwZEP6SaZEYtp9CoUIxIlvRqTpBVqSIEpX7LVXQ&oe=6847167C"
      alt="Logo"
      width="100"
      height="100"
    />
  </a>
  <h3>Welcome to the ProgrammerzamanNow Website</h3>
</div>

<br/>

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local development

```
$ yarn start
```
This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
GIT_USER=khannedy USE_SSH=true DEPLOYMENT_BRANCH=gh-pages yarn deploy
```

If you're using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.