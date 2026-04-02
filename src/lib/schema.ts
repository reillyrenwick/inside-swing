import { SITE_URL, SITE_NAME } from './config';

export function buildOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    description: 'Premium golf course rankings, destination guides, and travel planning.',
  };
}

export function buildWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/best-golf-courses-in/{search_term}`,
      'query-input': 'required name=search_term',
    },
  };
}

export function buildBreadcrumbSchema(items: { name: string; url?: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      ...(item.url ? { item: `${SITE_URL}${item.url}` } : {}),
    })),
  };
}

export function buildItemListSchema(name: string, items: { name: string; position: number; url?: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    numberOfItems: items.length,
    itemListElement: items.map(item => ({
      '@type': 'ListItem',
      position: item.position,
      name: item.name,
      ...(item.url ? { url: `${SITE_URL}${item.url}` } : {}),
    })),
  };
}

export function buildFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function buildArticleSchema(title: string, description: string, url: string, options?: { datePublished?: string; dateModified?: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url: `${SITE_URL}${url}`,
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
    },
    datePublished: options?.datePublished || '2026-01-01',
    dateModified: options?.dateModified || new Date().toISOString().split('T')[0],
  };
}

export function buildLocalBusinessSchema(course: {
  name: string;
  city: string;
  state: string;
  type: string;
  greensFee: string;
  rating: number;
  description: string;
  slug: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'GolfCourse',
    name: course.name,
    description: course.description,
    url: `${SITE_URL}/golf-course/${course.slug}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: course.city,
      addressRegion: course.state,
      addressCountry: 'US',
    },
    ...(course.greensFee !== 'Members Only' ? { priceRange: course.greensFee } : {}),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: course.rating,
      bestRating: 5,
      worstRating: 1,
    },
  };
}

export function buildPersonSchema(architect: {
  name: string;
  slug: string;
  bio: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: architect.name,
    url: `${SITE_URL}/architects/${architect.slug}`,
    description: architect.bio,
    jobTitle: 'Golf Course Architect',
  };
}
