import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap"
            rel="stylesheet"
          />

          <link
            href="https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Style+Script&display=swap"
            rel="stylesheet"
          />
          <meta name="keywords" content="المهندس محمد عبدالوهاب الخطيب  " />
          <meta name="keywords" content="مطور تطبيقات ويب في اليمن " />
          <meta
            name="keywords"
            content="Full Stack Web Devloper in Yemen, Freelancer"
          />
          <meta
            name="description"
            content="Full Stack Web Devloper Looking For a job"
          />
        </Head>
        <body className="bg-gradient-to-r from-lightGreen to-blue-400 dark:from-dark-700 dark:to-dark-300 dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
