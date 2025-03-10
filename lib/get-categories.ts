import { query } from "./strapi";

const { STRAPI_HOST } = process.env;

export function getCategories ( locale: string = "en" ) {
    return query (`product-categories?locale=${locale}&fields[0]=name&fields[1]=slug&fields[2]=description&populate[image][fields][0]=url`)
    .then (res => {
        return res.data.map(category => {
            const { name, slug, description, image: rawImage  } = category;
            const image = `${STRAPI_HOST}${rawImage.url}`;
            return { name, slug, description, image };
        })
    })
}
