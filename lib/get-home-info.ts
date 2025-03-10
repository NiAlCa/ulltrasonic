import { query } from "./strapi";

const { STRAPI_HOST} = process.env;

export function getHomeInfo() {
    return query("Home?populate=cover")
    .then(res => {


       // console.log('Respuesta completa:', JSON.stringify(res, null, 2));


    const { title, description, cover} = res.data
    const image = `${STRAPI_HOST}${cover.url}`


   // console.log ({title, description, image});
    return {title, description, image}
    })
}

