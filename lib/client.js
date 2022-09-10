import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";
export const client = sanityClient({
  projectId: "sxtx21j2",
  dataset: "production",
  apiVersion: "2022-09-08",
  useCdn: true,
  token:
    "skXMkugUetRM7ppiPteNOaIejp5PB0zppuPMsiI8eL6q1cY7pYRfEkgI5pBLBLBq6lidxlk7QudEgO8tuwzkISNTLaBV9KfH3zqOrFDgDIUSzPejLOgcDEl1prgvYLmPLEcZnwCDqEVUruHQRTz5fOzxFtLS69nxfNd4H6TgrM2dqmrDtK5X",
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
