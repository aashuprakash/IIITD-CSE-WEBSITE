This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

**Adding New Pages**

1. Create a New File: In the /app directory of your Next.js project, create a new folder with the name of the required page. The name of this folder will be used as the route for your new page. For example, if you create a folder named about, the route for this page will be /about. Within the folder, create a page.js and layout.js file.

2. Define a React Component: Each page in Next.js is a React Component. Define a new React Component in the file you created (page.js). For example: export default function About() {return <>About Us</> }

3. Use the Link Component for Navigation: Routing new pages through navigation components (Navbar) is not automated. You must manually add the <Link> component for each new page you create.

4. Test Your New Page: Start the Next.js development server and navigate to your new page to ensure it’s working correctly. You can start the server using npm run dev and then go to http://localhost:3000/about in your browser to see your new page.

5. Deploy Your Changes: Once you’ve tested your new page locally, push the changes to the remote repository, automatically triggering the CI/CD pipeline, and the app will be deployed using Vercel. Note that this repository has been connected to Vercel using aryanteng's GitHub account.

Refer to the following documentation for further information:

- [Project Structure](https://nextjs.org/docs/getting-started/project-structure)
- [Building Your Application: Pages and Layouts](https://nextjs.org/docs/pages/building-your-application/routing/pages-and-layouts)
- [Linking and Navigating](https://nextjs.org/docs/pages/building-your-application/routing/linking-and-navigating)

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Contact
If any help is needed, feel free to reach out to me: (aryan20499@iiitd.ac.in)
