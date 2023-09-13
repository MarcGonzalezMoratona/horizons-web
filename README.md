# Horizons Website

## Getting Started

First, install the dependencies and run the development server:

```bash
# yarn is recommended
yarn
yarn dev
# or
npm i
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

---

## Adding a New Blog Post

To add a new blog post to our website, follow these steps:

1. Open the [posts.js](https://github.com/MarcGonzalezMoratona/horizons-web/blob/main/app/data/posts.js) file located in the `app/data` folder of the repository.
2. Create a markdown file inside the `app/data` folder, which must be called exactly as the post slug. e.g. If the slug of your post is `how-to-create-a-post`, your file should be called `how-to-create-a-post.md`
3. Create a new object following the structure of the existing posts in the array, with a unique `id`, `slug`, a `title`, a `subtitle`, an optional `caption` and `alt` for the preview image, the `profile` image file name and the `author` name, the `date` when the post was published, and an array of `paragraphs`.
4. In the `paragraphs` array, create a new object for each paragraph with any optional `video`, `document`, and `documentCTA` properties.

Note: Check the [posts.example.js](https://github.com/MarcGonzalezMoratona/horizons-web/blob/main/app/data/posts.example.js) file in the app/data folder for an example object that you can use as a reference.

---

## Environments

### Main Branch

The main branch is the production-ready version of our app that is publicly accessible. [Here](https://horizons-games.vercel.app) you can find the deployment of the main branch. This is the version of the app that users will interact with, so it is important that it is always stable and up-to-date.

### Staging Branch

The staging branch is a testing environment for our app. This is where we can test new features and changes before they are deployed to the main branch. [Here](https://staging-horizons-games.vercel.app) you can find the deployment of the staging branch. This environment allows us to catch any issues or bugs before they are visible to our users on production.
