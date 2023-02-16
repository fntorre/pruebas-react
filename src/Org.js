import React from "react";

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  url: "https://www.stanley-pmi.com.ar/",
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "11-39178980",
      contactType: "customer service",
    },
  ],
};

const SchemaOrg = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      <div>Your content</div>
    </>
  );
};

export default SchemaOrg;
