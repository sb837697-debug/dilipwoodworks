import { Helmet } from 'react-helmet-async';
import { companyInfo } from '../data/companyInfo';

export default function SEO({
  title,
  description = companyInfo.shortDesc,
  keywords = "Dilip wood works, bespoke furniture chandigarh, custom carpentry sarangpur, solid teak wood, sheesham furniture",
  canonical,
  ogImage = "/hero-workshop.jpg",
  ogType = "website",
  schema
}) {
  const fullTitle = title 
    ? (title.includes(companyInfo.name) ? title : `${title} | ${companyInfo.name}`) 
    : `Rack Manufacturer in Chandigarh | ${companyInfo.name}`;

  const siteUrl = "https://dilipwoodworks.com";
  const canonicalUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;
  const imageUrl = ogImage.startsWith("http") ? ogImage : `${siteUrl}${ogImage}`;

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content={companyInfo.name} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Optional Custom Schema Injection */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
