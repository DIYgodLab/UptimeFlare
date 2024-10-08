const pageConfig = {
  // Title for your status page
  title: "DIYgod's Status Page",
  // Links shown at the header of your status page, could set `highlight` to `true`
  links: [
    { link: 'https://github.com/DIYgod', label: 'GitHub' },
    { link: 'https://diygod.cc/', label: 'Blog' },
  ],
}

const workerConfig = {
  // Write KV at most every 3 minutes unless the status changed
  kvWriteCooldownMinutes: 3,
  // Enable HTTP Basic auth for status page & API by uncommenting the line below, format `<USERNAME>:<PASSWORD>`
  // passwordProtection: 'username:password',
  // Define all your monitors here
  monitors: [
    {
      // `id` should be unique, history will be kept if the `id` remains constant
      id: 'Public - xLog',
      // `name` is used at status page and callback message
      name: 'Public - xLog',
      // `method` should be a valid HTTP Method
      method: 'GET',
      // `target` is a valid URL
      target: 'https://xlog.app',
    },
    {
      id: 'Public - RSSHub',
      name: 'Public - RSSHub',
      method: 'GET',
      target: 'https://rsshub.app',
      timeout: 30000,
    },
    {
      id: 'Public - RSSHub Docs',
      name: 'Public - RSSHub Docs',
      method: 'GET',
      target: 'https://docs.rsshub.app',
    },
    {
      id: 'Public - DPlayer Docs',
      name: 'Public - DPlayer Docs',
      method: 'GET',
      target: 'https://dplayer.diygod.dev',
    },
    {
      id: 'Public - APlayer Docs',
      name: 'Public - APlayer Docs',
      method: 'GET',
      target: 'https://aplayer.js.org',
    },
    {
      id: 'Personal - Blog',
      name: 'Personal - Blog',
      method: 'GET',
      target: 'https://diygod.cc',
    },
    {
      id: 'Personal - Fog Machine',
      name: 'Personal - Fog Machine',
      method: 'GET',
      target: 'https://fogmachine.diygod.me',
    },
    {
      id: 'Personal - NAS',
      name: 'Personal - NAS',
      method: 'GET',
      target: 'https://nas.diygod.me',
    },
    {
      id: 'Personal - NAS Status',
      name: 'Personal - NAS Status',
      method: 'GET',
      target: 'https://nas-status.diygod.me',
    },
    {
      id: 'Personal - RSSHub',
      name: 'Personal - RSSHub',
      method: 'GET',
      target: 'https://rsshub.diygod.me',
    },
    {
      id: 'Personal - Umami',
      name: 'Personal - Umami',
      method: 'GET',
      target: 'https://umami.diygod.dev',
      expectedCodes: [200, 307]
    },
    {
      id: 'Personal - Suannai',
      name: 'Personal - Suannai',
      method: 'GET',
      target: 'https://suannai.cat',
    },
  ],
  notification: {
    // [Optional] apprise API server URL
    // if not specified, no notification will be sent
    appriseApiServer: "https://apprise.example.com/notify",
    // [Optional] recipient URL for apprise, refer to https://github.com/caronc/apprise
    // if not specified, no notification will be sent
    recipientUrl: "tgram://bottoken/ChatID",
    // [Optional] timezone used in notification messages, default to "Etc/GMT"
    timeZone: "Asia/Shanghai",
    // [Optional] grace period in minutes before sending a notification
    // notification will be sent only if the monitor is down for N continuous checks after the initial failure
    // if not specified, notification will be sent immediately
    gracePeriod: 5,
  },
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called when there's a status change for any monitor
      // Write any Typescript code here

      // This will not follow the grace period settings and will be called immediately when the status changes
      // You need to handle the grace period manually if you want to implement it
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // This callback will be called EVERY 1 MINTUE if there's an on-going incident for any monitor
      // Write any Typescript code here
    },
  },
}

// Don't forget this, otherwise compilation fails.
export { pageConfig, workerConfig }
