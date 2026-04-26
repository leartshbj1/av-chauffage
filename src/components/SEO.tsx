import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export function SEO({ 
  title, 
  description, 
  keywords = "chauffage, pompe à chaleur, rénovation énergétique, facility management, Genève, Suisse romande, AVCHAUFFAGE",
  image = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200", 
  url = "https://av-chauffage.ch" 
}: SEOProps) {
  const fullTitle = `${title} | AVCHAUFFAGE - L'excellence thermique à Genève`;

  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* OpenGraph tags for social sharing */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional SEO best practices */}
      <link rel="canonical" href={url} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content="AVCHAUFFAGE" />
      <meta name="geo.region" content="CH-GE" />
      <meta name="geo.placename" content="Genève" />
    </Helmet>
  );
}
