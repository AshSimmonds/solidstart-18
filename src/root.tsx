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
        <Title>Solid Start Starter</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />









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
