/*
 * Delog — product catalogue: every page renders from this file. Field reference and a template
 * for new products: README.md → "Product data reference" and tools/product.template.js.
 * Publish releases with tools/add-release.mjs; keep its "@release" marker comments.
 */
window.DELOG_PRODUCTS = [
  {
    id: 'driftly',
    name: 'Driftly',
    tagline: 'The all-in-one QA desk for teams that ship websites.',
    description:
      'Driftly catches every visual and content change on your sites with before/after screenshots and plain-language explanations — then reviews security, tests performance, APIs and recorded flows, and gives you one GO / NO-GO before you release. Free for Windows; it runs on your own computer.',
    category: 'Website QA & release checks',
    status: 'available',
    platforms: { windows: 'available', macos: 'coming-soon', linux: 'coming-soon' },
    // Free to download and use, including commercially; closed source (proprietary freeware).
    price: { amount: 0, currency: 'USD' },
    license: {
      kind: 'proprietary',
      name: 'Driftly End User Licence Agreement',
      url: 'terms.html#eula',
      // Plain-language summary shown on the product and licenses pages. The EULA is the binding text.
      summary: [
        { icon: 'check', text: 'Free to download, install and use — including for commercial work.' },
        { icon: 'lock', text: 'Closed source: Driftly’s source code is not distributed or licensed.' },
        { icon: 'box', text: 'No redistribution, resale, reverse engineering or decompiling, except where the law expressly allows.' }
      ],
      thirdParty: 'licenses/driftly/THIRD-PARTY-NOTICES.txt'
    },
    accent: { dark: '#2dd4bf', light: '#0f766e' },
    icon: 'assets/products/driftly/icon-256.png',
    // Screenshot paths have no theme or size: the site loads <src>-dark|light-800|1440.webp.
    hero: {
      src: 'assets/products/driftly/screens/home',
      alt: 'Driftly Home: summary tiles for changes to review, critical changes, pages watched and the last check; a radial site map of the watched website with the pages that need attention glowing; and a list of changes that need review.'
    },
    // The cinematic product page (products/<id>.html). Screenshot paths have no theme or size.
    // Chapter layouts: center · split · split-rev · bleed · verdict · terminal.
    // Visual types: shot · compare · verdict · terminal.
    launch: {
      headline: 'Know before you ship.',
      line: 'The all-in-one QA desk for teams that ship websites. Free for Windows.',
      tour: 'Take the tour',
      reveal: {
        caption: 'Every site you watch, at a glance — on your own computer.'
      },
      // Floating status chips around the window in the reveal (states shown in the demo screens).
      chips: [
        { text: '36 changes to review', tone: 'warn' },
        { text: 'Release v2.4.0 · NO-GO', tone: 'bad' },
        { text: 'Security grade C · passive', tone: 'ok' }
      ],
      stats: [
        { value: '8', label: 'tools.', sub: 'One desk.' },
        { value: '5', label: 'code exports.', sub: 'Playwright to Puppeteer.' },
        { value: '4', label: 'CI formats.', sub: 'JUnit, SARIF, Markdown, JSON.' },
        { value: '0', label: 'accounts.', sub: 'It runs on your computer.' }
      ],
      chapters: [
        {
          id: 'changes', layout: 'center', eyebrow: 'Change detection',
          title: 'Every change. Explained.',
          text: 'Driftly snapshots every page on a schedule and tells you, in plain language, what changed since last time — and why it matters. Drag to compare a real check of the demo store.',
          visual: {
            type: 'compare',
            before: 'assets/products/driftly/compare/home-before', beforeLabel: 'Before · version 1',
            after: 'assets/products/driftly/compare/home-after', afterLabel: 'After · version 2',
            alt: 'The demo store’s home page before and after a release: the headline changed from “Ship faster with confidence” to “Release with total confidence”, a sale banner appeared, the button changed from “Browse products” to “Start shopping”, and the navigation was renamed.'
          },
          points: ['Headline rewritten', 'Sale banner added', '“Browse products” → “Start shopping”', 'Navigation renamed']
        },
        {
          id: 'security', layout: 'split', eyebrow: 'Security',
          title: 'Security without the noise.',
          text: 'A passive review of what a visitor’s browser received — headers, cookies, forms and scripts — graded, explained as attack paths, with the fix. Nothing is attacked.',
          visual: { type: 'shot', src: 'assets/products/driftly/screens/security', alt: 'Driftly security radar: the website’s pages, assets and API endpoints on rings with signals glowing, a C grade and a list of signals such as “No Content Security Policy”.' }
        },
        {
          id: 'performance', layout: 'bleed', eyebrow: 'Performance',
          title: 'Speed you can see.',
          text: 'Lab tests on phone, tablet or desktop profiles: Core Web Vitals, waterfall, filmstrip, budgets — and the fixes that matter most.',
          visual: { type: 'shot', src: 'assets/products/driftly/screens/performance', alt: 'Driftly performance results on a mobile profile: gauges for LCP, FCP, Speed Index, TTFB, TBT, INP, CLS and load time around a phone preview, with the network timeline below.' }
        },
        {
          id: 'api', layout: 'split-rev', eyebrow: 'API testing',
          title: 'APIs, collection first.',
          text: 'Start from the calls your site already makes. Chain them into flows — log in, pass the token, add to cart — assert every step, and export to Postman, OpenAPI or test code.',
          visual: { type: 'shot', src: 'assets/products/driftly/screens/api-flow', alt: 'A Driftly API flow graph: log-in and product requests feeding a token and product id into who-am-I, cart and add-to-cart requests, with one request failing.' }
        },
        {
          id: 'recorder', layout: 'center', eyebrow: 'Recorder',
          title: 'Record once. Heal on replay.',
          text: 'Record a flow in a real browser. Driftly replays it on every check, repairs locators that drift, tells you what it healed — and exports Playwright, Selenium, Cypress, WebdriverIO or Puppeteer code.',
          visual: { type: 'shot', src: 'assets/products/driftly/screens/recorder', alt: 'Driftly Recorder replaying a “Sign in and browse products” flow, paused at step 6 of 7, with an assertion outlined on the page and a filmstrip of every step.' }
        },
        {
          id: 'bugs', layout: 'split-rev', eyebrow: 'Bug reports',
          title: 'Bugs, written for you.',
          text: 'Press Report bug on any change, finding, failed request or test. Driftly writes the steps, expected and actual, attaches screenshots, console errors and failed requests — and files it to Jira, GitHub, Linear or Azure DevOps.',
          visual: { type: 'shot', src: 'assets/products/driftly/screens/bugs', alt: 'A Driftly bug report filed to Jira as QA-128: severity, priority and status, a summary, three steps to reproduce with screenshots, and the tracker, re-check and history panels.' }
        },
        {
          id: 'release', layout: 'verdict', eyebrow: 'Release checks',
          title: 'One answer: GO or NO‑GO.',
          text: 'Before you ship, one run across visual, security, performance, API and recorded tests — with every blocking rule, its evidence, and a comparison with the last release.',
          visual: { type: 'verdict', word: 'NO-GO', src: 'assets/products/driftly/screens/release', alt: 'Driftly release check for v2.4.0 with a NO-GO verdict: three rules block the release and two raise warnings, each with a link to its evidence.' }
        },
        {
          id: 'monitoring', layout: 'split', eyebrow: 'Monitoring',
          title: 'Always watching.',
          text: 'Schedule API runs, replays, performance tests, security reviews and release checks — hourly, after every check or at set times — and hear about it the moment one starts failing.',
          visual: { type: 'shot', src: 'assets/products/driftly/screens/monitoring', alt: 'Driftly Monitoring: six scheduled monitors, each with a 14-day run strip, its pass rate and its next run.' }
        },
        {
          id: 'ci', layout: 'terminal', eyebrow: 'CI',
          title: 'Gate every merge.',
          text: '`driftly ci` runs the same release check on your runner and fails the build on a NO-GO — with JUnit, SARIF, Markdown and JSON for your pipeline.',
          visual: {
            type: 'terminal',
            // Real output of `driftly ci` against the demo store (abridged).
            command: 'driftly ci "Demo Store" --release "Standard release" --out ci-out',
            lines: [
              { s: 'bad', t: '✘ Visual & content      Failed    6 pages changed · 2 critical · 3 high' },
              { s: 'ok', t: '✔ Security review       Passed    Grade C · no new serious findings' },
              { s: 'bad', t: '✘ Performance test      Failed    1 budget exceeded · Mobile' },
              { s: 'bad', t: '✘ API collections       Failed    3/4 requests passed (75%)' },
              { s: 'warn', t: '! Recorder tests        Warning   1/1 tests passed · 1 healed step' }
            ],
            verdict: 'NO-GO — exit 1 (the gate failed)',
            artifacts: 'Artifacts in ci-out: junit.xml · security.sarif · summary.md · result.json'
          }
        },
        {
          id: 'share', layout: 'center', eyebrow: 'Read-only dashboards',
          title: 'Share without sharing.',
          text: 'Hand stakeholders one self-contained HTML file — no server, no network requests, secrets redacted, optional password.',
          visual: { type: 'shot', src: 'assets/products/driftly/screens/shared-dashboard', alt: 'A read-only dashboard exported from Driftly, opened as a single HTML file: sections with item counts, severity filters, overview tiles and a 14-day change chart.' }
        }
      ],
      // "Everything in one place" — each tile has a small CSS animation (anim).
      bento: [
        { size: 'l', anim: 'diff', title: 'Change detection', text: 'Visual, content, structure, form and flow changes — in plain words.' },
        { size: 's', anim: 'radar', title: 'Passive security', text: 'Graded, explained, fixed. Nothing attacked.' },
        { size: 's', anim: 'budget', title: 'Budgets', text: 'Every test flags pages that go over.' },
        { size: 's', anim: 'verdict', title: 'Release checks', text: 'GO, warnings or NO-GO.' },
        { size: 's', anim: 'locator', title: 'Self-healing locators', text: 'Replays repair drifting selectors — and tell you.' },
        { size: 'l', anim: 'strip', title: 'Scheduled monitors', text: '14 days of runs at a glance.' },
        { size: 's', anim: 'noise', title: 'Noise control', text: 'Clocks and counters set aside. Prices never.' },
        { size: 's', anim: 'bell', title: 'Alerts', text: 'Desktop, Slack, Teams, email, webhooks, Jira.' },
        { size: 's', anim: 'api', title: 'API testing', text: 'Collections, flows, assertions, data files.' },
        { size: 's', anim: 'ask', title: 'Ask Driftly', text: 'Answers from your own history. Works offline.' },
        { size: 'l', anim: 'ci', title: 'CI gating', text: 'The same verdict on your runner, with JUnit and SARIF.' },
        { size: 's', anim: 'share', title: 'Shareable', text: 'One HTML file. Nothing uploaded.' },
        { size: 's', anim: 'bug', title: 'Bug reports', text: 'Steps, expected and actual — filed for you.' }
      ],
      // Tech specs: groups → rows. A row is { label?, value } or { label?, list: [...] }.
      // value 'release:size' / 'release:version' / 'release:date' is filled from the latest release.
      specs: [
        { group: 'Version', rows: [
          { label: 'Latest', value: 'release:version' },
          { label: 'Released', value: 'release:date' }
        ] },
        { group: 'Platform', rows: [
          { label: 'Operating system', value: 'Windows 10 or Windows 11, 64-bit (x64)' },
          { label: 'Processor', value: 'Any 64-bit (x64) PC that runs Windows 10 or 11' },
          { label: 'Browser', value: 'Microsoft Edge (included with Windows) or Google Chrome — Driftly drives a browser that is already installed' },
          { label: 'Disk space', value: 'About 410 MB for the app, plus room for your snapshots' },
          { label: 'macOS and Linux', value: 'Coming soon' }
        ] },
        { group: 'Installer', rows: [
          { label: 'Type', value: 'Windows installer — for you only, or for everyone on the computer; you choose the folder' },
          { label: 'Download size', value: 'release:size' },
          { label: 'Verification', value: 'SHA-256 checksum published for every file' },
          { label: 'Updates', value: 'Automatic updates are off until you turn them on' }
        ] },
        { group: 'Licence', rows: [
          { value: 'Free · closed source' },
          { value: 'Free for personal and commercial use, under the Driftly EULA' }
        ] },
        { group: 'Your data', rows: [
          { label: 'Location', value: 'Your Documents\\Driftly folder, on your computer' },
          { label: 'Privacy', value: 'No accounts, analytics or telemetry; offline mode on at first install' },
          { label: 'Secrets', value: 'Passwords and tokens encrypted with your Windows account' },
          { label: 'Backup', value: 'One-file backup and restore; packs to move chosen tools and websites' }
        ] },
        { group: 'AI', rows: [
          { label: 'On your computer', value: 'Built-in engine, or a local Ollama model' },
          { label: 'Optional', value: 'A cloud provider (OpenAI) with your own key — blocked in offline mode' }
        ] },
        { group: 'Exports', rows: [
          { label: 'Test code', list: ['Playwright', 'Selenium', 'Cypress', 'WebdriverIO', 'Puppeteer'] },
          { label: 'API', list: ['Postman', 'OpenAPI', 'Test code'] },
          { label: 'Reports', list: ['PDF', 'Web page', 'Markdown', 'JSON', 'JUnit XML'] },
          { label: 'Dashboards', value: 'Read-only, as one self-contained HTML file or a ZIP, with an optional password' },
          { label: 'Bug reports', list: ['Markdown', 'Jira', 'Plain text', 'Web page', 'PDF', 'ZIP'] }
        ] },
        { group: 'CI', rows: [
          { label: 'Command', value: '`driftly ci` — exit codes 0, 1 and 2' },
          { label: 'Outputs', list: ['junit.xml', 'security.sarif', 'summary.md', 'result.json'] },
          { label: 'Templates', list: ['GitHub Actions', 'Azure DevOps', 'GitLab CI', 'Jenkins'] }
        ] },
        { group: 'Integrations', rows: [
          { label: 'Alerts', list: ['Desktop notifications', 'Slack', 'Microsoft Teams', 'Email (SMTP)', 'Signed webhooks', 'Jira'] },
          { label: 'Bug trackers', list: ['Jira', 'GitHub', 'Linear', 'Azure DevOps'] },
          { label: 'Test suites', list: ['Selenium', 'Playwright', 'Cypress'] },
          { label: 'Real-user data', value: 'Chrome UX Report, optional' }
        ] },
        { group: 'Accessibility & appearance', rows: [
          { label: 'Themes', list: ['Match system', 'Light', 'Dark', 'Pure black'] },
          { label: 'Accent colours', value: 'Tide, Aurora, Ocean, Forest, Sunset, Orchid, Graphite or custom' },
          { label: 'Interface size', value: 'Auto, or 85% to 120%' },
          { label: 'Keyboard', value: 'Shortcuts for every main screen; a command palette (Ctrl+K)' }
        ] },
        { group: 'Language', rows: [
          { value: 'English' }
        ] }
      ]
    },
    // Every screenshot, in tour order — shown in the product page's gallery (light + dark).
    screenshots: [
      { src: 'assets/products/driftly/screens/home', title: 'Home', alt: 'Driftly Home: summary tiles for changes to review, critical changes, pages watched and the last check; a radial site map with the pages that need attention glowing; and the changes that need review.' },
      { src: 'assets/products/driftly/screens/changes-feed', title: 'Changes', alt: 'Driftly’s Changes feed: tabs for needs review, all and reviewed, a severity strip with counts, and changes grouped by day, each with a zoomed thumbnail, importance and a one-line summary.' },
      { src: 'assets/products/driftly/screens/changes', title: 'Reviewing a change', alt: 'Driftly reviewing “Checkout page changed”: before and after screenshots side by side, a filmstrip of the page’s snapshots, and an inspector listing what changed in plain language.' },
      { src: 'assets/products/driftly/screens/release', title: 'Release check', alt: 'Driftly release check for version 2.4.0 with a NO-GO verdict: three rules block the release and two raise warnings, each with a link to its evidence, compared with v2.3.0.' },
      { src: 'assets/products/driftly/screens/monitoring', title: 'Scheduled monitoring', alt: 'Driftly Monitoring: six scheduled monitors, each with a 14-day run strip, pass rate and next run.' },
      { src: 'assets/products/driftly/screens/ci', title: 'CI & automation', alt: 'Driftly CI and automation: the release check and lanes a pipeline runs, the fail-the-build rule, report formats and output folder, with exit codes and an “Export pack for CI” button.' },
      { src: 'assets/products/driftly/screens/security', title: 'Security radar', alt: 'Driftly Security radar: the website’s pages, assets and API endpoints on rings with signals glowing, a C grade, attack-surface counts and a list of signals.' },
      { src: 'assets/products/driftly/screens/attack-paths', title: 'Attack paths', alt: 'Driftly attack path for clickjacking on /checkout: entry, page, click and impact laid out as a chain, the blast radius, and the configuration that breaks the path.' },
      { src: 'assets/products/driftly/screens/performance', title: 'Performance lab', alt: 'Driftly performance results for a mobile test: gauges for LCP, FCP, Speed Index, TTFB, TBT, INP, CLS and load time around a phone preview, with the network timeline below.' },
      { src: 'assets/products/driftly/screens/budgets', title: 'Performance budgets', alt: 'Driftly performance budgets for Largest Contentful Paint, Total Blocking Time, layout shift, page weight, requests and JavaScript, each showing how many pages pass.' },
      { src: 'assets/products/driftly/screens/api', title: 'API testing', alt: 'Driftly API testing: collections including APIs discovered from website checks, and a GET request to /api/me failing with 401 Unauthorized.' },
      { src: 'assets/products/driftly/screens/api-flow', title: 'API flows', alt: 'Driftly API flow graph: log-in and product requests feeding a token and product id into who-am-I, cart and add-to-cart requests, with one request failing.' },
      { src: 'assets/products/driftly/screens/recorder', title: 'Recorder', alt: 'Driftly Recorder replaying a “Sign in and browse products” flow, paused at step 6 of 7, with a filmstrip of every step and the step’s check settings.' },
      { src: 'assets/products/driftly/screens/bugs', title: 'Bug report', alt: 'A Driftly bug report filed to Jira as QA-128, with severity, priority, status, a summary, steps to reproduce with screenshots, and the tracker, re-check and history panels.' },
      { src: 'assets/products/driftly/screens/bug-annotate', title: 'Marking up a screenshot', alt: 'Driftly’s screenshot editor over a close-up of a change: boxes, an arrow and a “This moved” label in red, with tools for boxes, arrows, text, highlight and blur.' },
      { src: 'assets/products/driftly/screens/reports', title: 'Reports', alt: 'Driftly Reports: live cards for changes, security, performance, API, Recorder and release checks, and a shelf of saved reports.' },
      { src: 'assets/products/driftly/screens/shared-dashboard', title: 'Read-only dashboard', alt: 'A read-only dashboard exported from Driftly as one HTML file: sections with item counts, severity filters, overview tiles and a 14-day change chart.' },
      { src: 'assets/products/driftly/screens/settings', title: 'Settings', alt: 'Driftly Settings: tiles for appearance with accent colours, storage, AI assistant, privacy with offline mode, advanced, alerts and integrations, backup and transfer, and general.' }
    ],
    install: [
      'Run the installer. Choose to install just for you (no administrator rights needed) or for everyone on the computer, and pick the folder.',
      'Start Driftly from the Start menu or the desktop shortcut, then click “Try a sample site” to see a check end to end.',
      'Uninstalling never deletes your data in Documents\\Driftly.'
    ],
    releases: [
      // @releases driftly — tools/add-release.mjs inserts new releases below this line
      /* @release driftly 0.1.0 */ {
        version: '0.1.0',
        date: '2026-10-10', // PLACEHOLDER: set to the real release date (add-release.mjs sets today's date)
        notes: [
          'First public release, for Windows 10 and 11 (x64).',
          'Website change monitoring with plain-language summaries, noise control, approved baselines and a time machine for every page.',
          'Security, Performance, API and Recorder testing windows.',
          'Release checks with a GO / NO-GO verdict, scheduled monitoring and `driftly ci` for pipelines.',
          'Bug reports from any change, finding or failed test: steps, expected and actual written for you, marked-up screenshots, capture mode, duplicate warnings and filing to Jira, GitHub, Linear or Azure DevOps.',
          'Read-only dashboards exported as a single offline HTML file.',
          'Automatic updates are off until you turn them on in Settings.'
        ],
        files: [
          {
            platform: 'windows',
            arch: 'x64',
            kind: 'installer',
            filename: 'Driftly Setup 0.1.0.exe',
            url: 'downloads/driftly/0.1.0/Driftly%20Setup%200.1.0.exe',
            size: null,
            sha256: null
          }
        ]
      } /* @end-release */
    ]
  }
];
