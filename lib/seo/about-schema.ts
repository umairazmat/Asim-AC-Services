import { ABOUT_CONTENT } from "@/app/[locale]/about/content";

import { BRAND } from "@/lib/constants/brand";

import { CONTACT } from "@/lib/constants/contact";

import { SCHEMA_AREA_SERVED } from "@/lib/constants/geo-seo";

import { buildLocalBusinessSchema } from "@/lib/seo/local-business-schema";

import { getSiteUrl } from "@/lib/site-url";



export function buildAboutPageSchema() {

  const siteUrl = getSiteUrl();

  const businessId = `${siteUrl}/#localbusiness`;

  const base = buildLocalBusinessSchema();



  const organization = {

    "@type": "Organization",

    "@id": `${siteUrl}/#organization`,

    name: BRAND.name.en,

    alternateName: BRAND.name.ar,

    url: siteUrl,

    description: ABOUT_CONTENT.hero.entitySummary.en,

    email: CONTACT.email.address,

    telephone: "+966547524002",

    areaServed: [...SCHEMA_AREA_SERVED],

    knowsAbout: [

      "AC cleaning",

      "AC repair",

      "AC installation",

      "AC gas refill",

      "HVAC services",

      "Riyadh AC service",

      "Saudi Arabia AC service",

      "KSA air conditioning",

    ],

    sameAs: [CONTACT.social.facebook.href, CONTACT.social.instagram.href],

    parentOrganization: { "@id": businessId },

  };



  return {

    ...base,

    "@graph": [...base["@graph"], organization],

  };

}


