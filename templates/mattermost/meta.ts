// Generated using "yarn build-templates"

export const meta = {
  name: "Mattermost",
  description:
    "Open source platform for developer collaboration. Secure, flexible, and integrated with the tools you love.",
  instructions: null,
  changeLog: [{ date: "2022-07-12", description: "first release" }],
  links: [
    { label: "Website", url: "https://mattermost.com/" },
    { label: "Github", url: "https://github.com/mattermost/" },
  ],
  contributors: [
    { name: "Bedeoan Raul", url: "https://github.com/bedeoan" },
    { name: "Andrei Canta", url: "https://github.com/deiucanta" },
  ],
  schema: {
    type: "object",
    required: ["projectName", "domain", "appServiceName", "dbServiceName"],
    properties: {
      projectName: { type: "string", title: "Project Name" },
      domain: { type: "string", title: "Domain" },
      appServiceName: {
        type: "string",
        title: "Service Name",
        default: "mattermost",
      },
      dbServiceName: {
        type: "string",
        title: "Postgres Database Name",
        default: "mattermost-db",
      },
    },
  },
};

export type ProjectName = string;
export type Domain = string;
export type ServiceName = string;
export type PostgresDatabaseName = string;

export interface Input {
  projectName: ProjectName;
  domain: Domain;
  appServiceName: ServiceName;
  dbServiceName: PostgresDatabaseName;
}