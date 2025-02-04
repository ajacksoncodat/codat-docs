module.exports = [
    {
      type: "link",
      href: "/",
      label: "All Docs",
      className: "back",
    }, 
    {
        type: "doc",
        label: "Enterprise",
        id: "enterprise/overview",
        className: "header",
    },
    {
      type: "category",
      customProps: {
        hr: true,
      },
      items: [
        "enterprise/tech-overview/intro",
        {
            type: "category",
            label: "Codat Architecture",
            items: [
                "enterprise/tech-overview/architecture/overview",
                "enterprise/tech-overview/architecture/api",
                "enterprise/tech-overview/architecture/data-flow",
                "enterprise/tech-overview/architecture/rate-limits",
                "enterprise/tech-overview/architecture/webhooks",
            ]
          },
          {
            type: "category",
            label: "Security Features",
            items: [
                "enterprise/tech-overview/security/sso",
                "enterprise/tech-overview/security/mTLS",
            ]
          },
        "enterprise/tech-overview/security-and-data",
      ],
      label: "Technology Overview"
    },
    {
        type: "category",
        items: [
          "enterprise/tech-implementation/getting-started",
          "enterprise/tech-implementation/consent",
          "enterprise/tech-implementation/syncing-data",
          "enterprise/tech-implementation/data-types"
        ],
        label: "Technical Implementation",
      },
  ]