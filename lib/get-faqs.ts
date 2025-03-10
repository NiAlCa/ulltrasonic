import { query } from "./strapi";

const { STRAPI_HOST } = process.env;

export async function getFaqs() {
    return query("faqs")
      .then(res => {
        // Extract the array of FAQs from res.data
        const faqs = res.data.map(faq => ({
          title: faq.title,
          content: faq.content
        }));

        return faqs;
      });
  }
