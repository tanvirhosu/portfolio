# Tanvir Portfolio
...

## About project
...

## Tech decisions
- [Why Astro?](docs/0-starter-kit.md)

## Getting started
To run this project locally, follow these steps:

### Prerequisites
- Check Git version
  ```bash
  git --version
  ```
  - If not installed, [download from Git](https://git-scm.com) (v2.50 or higher)
- Check Node.js version
  ```bash
  node -v
  ```
  - If not installed, [download from Node.js](https://nodejs.org/en/download) (v24 or higher). [Recommendation: use NVM with NPM]

### Installation
- Clone repository
  ```bash
  git clone https://github.com/tanvirhosu/portfolio.git
  cd portfolio
  ```
- Install project dependencies
  ```bash
  npm install
  ```
- Start local development server (default port: 4321)
  ```bash
  npm run dev
  ```

### Build for production
- Generate static site to `./dist` (production output)
  ```bash
  npm run build
  ```
- Preview production build locally
  ```bash
  npm run preview
  ```
- Deploy to static host service (e.g., Vercel)
  ```bash
  npm run deploy
  ```

## License
Distributed under the MIT License. See [LICENSE](./LICENSE) for more information.
