import { BRAND } from "@/lib/constants/brand";

import { CONTACT } from "@/lib/constants/contact";

import {

  LOCAL_BUSINESS_DESCRIPTION,

  SCHEMA_AREA_SERVED,

} from "@/lib/constants/geo-seo";

import { getSiteUrl } from "@/lib/site-url";



type LocalBusinessGraph = {

  "@context": "https://schema.org";

  "@graph": Array<Record<string, unknown>>;

};



export function buildLocalBusinessSchema(): LocalBusinessGraph {

  const siteUrl = getSiteUrl();

  const businessId = `${siteUrl}/#localbusiness`;



  return {

    "@context": "https://schema.org",

    "@graph": [

      {

        "@type": ["LocalBusiness", "HVACBusiness"],

        "@id": businessId,

        name: BRAND.name.en,

        alternateName: BRAND.name.ar,

        description: LOCAL_BUSINESS_DESCRIPTION,

        telephone: "+966547524002",

        email: CONTACT.email.address,

        url: siteUrl,

        priceRange: "Request a Quote",

        areaServed: [...SCHEMA_AREA_SERVED],

        availableLanguage: ["Arabic", "English"],

        address: {

          "@type": "PostalAddress",

          addressLocality: "Riyadh",

          addressRegion: "Riyadh Province",

          addressCountry: "SA",

        },

        sameAs: [CONTACT.social.facebook.href, CONTACT.social.instagram.href],

        image: `${siteUrl}/brand/poster.png`,

      },

      {

        "@type": "WebSite",

        "@id": `${siteUrl}/#website`,

        url: siteUrl,

        name: BRAND.name.en,

        alternateName: BRAND.name.ar,

        inLanguage: ["ar-SA", "en-US"],

        publisher: { "@id": businessId },

      },

    ],

  };

}


