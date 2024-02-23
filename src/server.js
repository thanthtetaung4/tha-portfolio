import { createServer, Model } from "miragejs";

createServer({
  models: {
    projects: Model,
  },
  routes() {
    this.namespace = "api";

    this.get("/projects", (schema) => {
      return schema.projects.all();
    });

    this.get("/projects/:id", (schema, request) => {
      let id = request.params.id;

      return schema.projects.find(id);
    });
  },
  seeds(server) {
    server.create("project", {
      id: 1,
      name: "AnalytixNexa",
      imgUrl:
        "https://tha.sgp1.cdn.digitaloceanspaces.com/tha-portfolio-images/analytixnexa.png",
      description: "No-code easy to use data analysis web-based application",
      siteLink: "link to analytixnexa",
      techUsed: ["React", "MUI", "JavaScript", "Firebase"],
    });
    server.create("project", {
      id: 2,
      name: "Serfect",
      imgUrl:
        "https://tha.sgp1.cdn.digitaloceanspaces.com/tha-portfolio-images/serfect.png",
      description:
        "A Singapore trip plan website, where you can find the best trip plans",
      siteLink: "link to serfect",
      techUsed: ["React", "TailwindCSS", "TypeScript", "Firebase"],
    });
    server.create("project", {
      id: 3,
      name: "THA Portfolio",
      imgUrl:
        "https://tha.sgp1.cdn.digitaloceanspaces.com/tha-portfolio-images/portfolio.png",
      description: "The website you are looking at 😉",
      siteLink: "link to tha",
      techUsed: ["React", "TailwindCSS", "JavaScript", "MirageJS"],
    });
  },
});
