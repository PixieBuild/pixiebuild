import { questions } from "@/lib/faq";
import { projects } from "@/lib/pricing";
import { site } from "@/lib/site";

const id = {
  organization: `${site.url}/#organization`,
  website: `${site.url}/#website`,
  page: `${site.url}/#webpage`,
};

/* Every answer here is also on the page. Schema that says more than the page
   does is what earns a manual action, so both read from the same source. */
export function siteSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": id.organization,
        name: site.name,
        alternateName: site.alsoKnownAs,
        url: site.url,
        description: site.description,
        email: site.email,
        telephone: site.phone,
        foundingDate: site.founded,
        logo: {
          "@type": "ImageObject",
          url: `${site.url}/pb-logo.png`,
          width: 512,
          height: 512,
        },
        address: {
          "@type": "PostalAddress",
          addressCountry: site.country,
        },
        areaServed: { "@type": "Place", name: "Worldwide" },
        sameAs: site.profiles,
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          email: site.email,
          telephone: site.phone,
          areaServed: "Worldwide",
          availableLanguage: ["English"],
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Web design and development",
          itemListElement: projects.map(project => ({
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: project.name,
              description: project.who,
              provider: { "@id": id.organization },
            },
            /* The page says "from", so the schema says a minimum too — and
               stays quiet for the work that is only ever quoted. */
            ...(project.price && {
              priceSpecification: {
                "@type": "PriceSpecification",
                priceCurrency: "USD",
                minPrice: Number(project.price.USD.replace(/,/g, "")),
              },
            }),
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": id.website,
        name: site.name,
        url: site.url,
        inLanguage: "en-GB",
        publisher: { "@id": id.organization },
      },
      {
        "@type": ["WebPage", "FAQPage"],
        "@id": id.page,
        url: site.url,
        name: site.title,
        description: site.description,
        isPartOf: { "@id": id.website },
        about: { "@id": id.organization },
        inLanguage: "en-GB",
        mainEntity: questions.map(question => ({
          "@type": "Question",
          name: question.ask,
          acceptedAnswer: { "@type": "Answer", text: question.answer },
        })),
      },
    ],
  };
}
