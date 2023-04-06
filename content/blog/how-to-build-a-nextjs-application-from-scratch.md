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

## Step 2: Add some pages

Next.js uses a file-based routing system, which means that each page of your application is represented by a file in the `pages` directory. Let's create a few pages to get started.

Create a new file called `index.js` in the `pages` directory and add the following code:

```jsx
function HomePage() {
  return <h1>Welcome to my app!</h1>;
}

export default HomePage;
```

This will create a simple homepage for your application. Now let's create a second page. Create a new file called `about.js` in the `pages` directory and add the following code:

```jsx
function AboutPage() {
  return <h1>About us</h1>;
}

export default AboutPage;
```

## Step 3: Add some styles

Next.js comes with built-in support for CSS modules, which allows you to write modular CSS that is scoped to a specific component. Let's add some styles to our pages.

Create a new file called `styles.module.css` in the `pages` directory and add the following code:

```css
.heading {
  font-size: 2rem;
  color: #333;
}
```

Now let's update our `index.js` and `about.js` files to use this stylesheet. Add the following code to the top of each file:

```jsx
import styles from './styles.module.css';
```

Then update the `return` statement in each file to include the `heading` class:

```jsx
function HomePage() {
  return <h1 className={styles.heading}>Welcome to my app!</h1>;
}

function AboutPage() {
  return <h1 className={styles.heading}>About us</h1>;
}
```

## Step 4: Add some data

Next.js allows you to fetch data at build time or request time, depending on your needs. Let's add some data to our application.

Create a new file called `data.js` in the `pages` directory and add the following code:

```js
export const posts = [
  {
    id: 1,
    title: 'Post 1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: 2,
    title: 'Post 2',
    content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];
```

Now let's update our `index.js` file to display this data. Add the following code to the top of the file:

```jsx
import { posts } from './data';
```

Then update the `return` statement to display the posts:

```jsx
function HomePage() {
  return (
    <div>
      <h1 className={styles.heading}>Welcome to my app!</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
```

## Step 5: Deploy your application

Now that we have built our Next.js application, it's time to deploy it. There are many ways to deploy a Next.js application, but one popular option is to use Vercel.

To deploy your application to Vercel, follow these steps:

1. Sign up for a free account at [vercel.com](https://vercel.com).
2. Install the Vercel CLI by running `npm i -g vercel`.
3. Run `vercel login` to log in to your Vercel account.
4. Run `vercel` in your project directory to deploy your application.

Once your application is deployed, you can access it at the URL provided by Vercel.

## Conclusion

In this tutorial, we have learned how to build a Next.js application from scratch. We have covered the basics of creating pages, adding styles, and fetching data. We have also learned how to deploy our application to Vercel. With this knowledge, you should be able to build your own Next.js applications with ease.

### Resources

- [Next.js documentation](https://nextjs.org/docs)
- [CSS Modules documentation](https://github.com/css-modules/css-modules)
- [Vercel documentation](https://vercel.com/docs)