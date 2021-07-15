import Prismic from "@prismicio/client";

export async function getPrismicClient(req?: unknown) {
  const prismic = await Prismic.client(process.env.PRISMIC_URL, {
    req,
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  });

  return prismic;
}
