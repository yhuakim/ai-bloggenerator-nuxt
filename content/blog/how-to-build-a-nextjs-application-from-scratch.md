--- 
 title: "how to build a NextJs Application from scratch" 
 description: "AI generated text for the topic: how to build a NextJs Application from scratch" 
--- 
<!--Content of the page-->
# How to Build a Next.js Application from Scratch

Next.js is a popular React framework that allows developers to build server-side rendered (SSR) applications with ease. In this tutorial, we will walk through the steps to build a Next.js application from scratch.

## Prerequisites

Before we begin, make sure you have the following installed on your machine:

- Node.js (version 10 or higher)
- npm (version 6 or higher)

## Step 1: Create a new Next.js project

To create a new Next.js project, open your terminal and run the following command:

```
npx create-next-app my-app
```

This will create a new Next.js project in a directory called `my-app`. Once the installation is complete, navigate to the project directory by running:

```
cd my-app
```

## Step 2: Run the development server

To start the development server, run the following command:

```
npm run dev
```

This will start the server at `http://localhost:3000`. You should see a welcome page with the Next.js logo.

## Step 3: Create a new page

Next.js uses a file-based routing system, which means that each page is represented by a file in the `pages` directory. To create a new page, create a new file in the `pages` directory with the `.js` extension.

For example, to create a new page called `about`, create a file called `about.js` in the `pages` directory with the following content:

```jsx
function About() {
  return <h1>About Page</h1>;
}

export default About;
```

Now if you navigate to `http://localhost:3000/about`, you should see the "About Page" heading.

## Step 4: Add some styles

Next.js supports CSS modules out of the box, which allows you to write scoped CSS for your components. To add some styles to our `about` page, create a new file called `about.module.css` in the same directory as the `about.js` file with the following content:

```css
.heading {
  color: blue;
}
```

Now update the `about.js` file to use the `heading` class:

```jsx
import styles from './about.module.css';

function About() {
  return <h1 className={styles.heading}>About Page</h1>;
}

export default About;
```

Refresh the page and you should see the heading in blue.

## Step 5: Fetch some data

Next.js provides a built-in `getStaticProps` function that allows you to fetch data at build time. To demonstrate this, let's create a new page called `posts` that fetches some data from an API.

Create a new file called `posts.js` in the `pages` directory with the following content:

```jsx
function Posts({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return {
    props: {
      posts,
    },
  };
}

export default Posts;
```

This page fetches some data from the [JSONPlaceholder](https://jsonplaceholder.typicode.com/) API and renders a list of posts. The `getStaticProps` function is called at build time and the data is passed to the `Posts` component as a prop.

Now if you navigate to `http://localhost:3000/posts`, you should see a list of posts.

## Step 6: Deploy your application

To deploy your Next.js application, you can use a variety of hosting services such as Vercel, Netlify, or AWS. For this tutorial, we will use Vercel.

First, create an account on [Vercel](https://vercel.com/) and install the Vercel CLI by running the following command:

```
npm install -g vercel
```

Next, run the following command to deploy your application:

```
vercel
```

This will start the deployment process and give you a URL where your application is hosted.

## Conclusion

In this tutorial, we walked through the steps to build a Next.js application from scratch. We covered creating a new project, running the development server, creating a new page, adding styles, fetching data, and deploying the application. Next.js is a powerful framework that allows you to build SSR applications with ease, and we hope this tutorial has given you a good introduction to it.

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://reactjs.org/docs)
- [CSS Modules Documentation](https://github.com/css-modules/css-modules)