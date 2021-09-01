const settings = {
  name: "jankarmtic-group-sales-app",
  state: {
    frontity: {
      url: "https://test.frontity.org",
      title: "Fast, Affordable Web Development",
      description: "WordPress installation for Frontity development",
    },
  },
  packages: [
    {
      name: "v-1-0",
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "https://jankarmtic.com/",
          postTypes: [
            {
              type: "sales",
              endpoint: "sales",
              archive: "/sales",
            },
          ],
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
