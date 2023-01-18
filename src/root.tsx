// @refresh reload
import { Suspense } from "solid-js";
import {
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import "./root.css";

export default function Root() {
  return (
    <Html lang="en">
      <Head>
      <Title>SolidStart 18</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />


        <Meta
          name="twitter:image:src"
          content="https://user-images.githubusercontent.com/9034041/212753386-0671cc1a-105b-4596-a594-fee270f227e5.jpg"
        />
        <Meta name="twitter:site" content="@nusquamu" />
        <Meta name="twitter:card" content="summary" />
        <Meta name="twitter:title" content="SolidStart Eighteen - a SolidJS playground" />
        <Meta name="twitter:description" content="Just a little zen garden of ideas and tech tests in the little world of SolidStart." />
        <Meta
          property="og:image"
          content="https://user-images.githubusercontent.com/9034041/212753386-0671cc1a-105b-4596-a594-fee270f227e5.jpg"
        />
        <Meta property="og:image:alt" content="SolidStart Eighteen" />
        <Meta property="og:image:width" content="1200" />
        <Meta property="og:image:height" content="600" />
        <Meta property="og:site_name" content="SolidStart Eighteen - a SolidJS playground" />







        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="./fonts/montserrat-v25-latin-regular.woff2"
          crossorigin="anonymous"
        />

        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="./fonts/orbitron-v25-latin-600.woff2"
          crossorigin="anonymous"
        />

        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="./fonts/orbitron-v25-latin-regular.woff2"
          crossorigin="anonymous"
        />

        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="./fonts/rajdhani-v15-latin-600.woff2"
          crossorigin="anonymous"
        />

        <link
          rel="preload"
          as="font"
          type="font/woff2"
          href="./fonts/vt323-v17-latin-regular.woff2"
          crossorigin="anonymous"
        />





        <link
          rel="stylesheet"
          type="text/css"
          href="https://unpkg.com/augmented-ui@2/augmented-ui.min.css"
        />





      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
            <Routes>
              <FileRoutes />
            </Routes>
          </ErrorBoundary>
        </Suspense>
        <Scripts />
      </Body>
    </Html>
  );
}
