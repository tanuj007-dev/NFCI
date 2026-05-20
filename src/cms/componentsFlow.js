/**
 * NFCI CMS — all 49 component IDs: flow diagram, tables, and render pipeline.
 * Human-readable copy: COMPONENTS_FLOW.md
 */
import {
  COMPONENT_CATALOG,
  COMPONENT_IDS,
  ALL_COMPONENT_IDS,
} from "./componentIds";

export const COMPONENT_COUNT = ALL_COMPONENT_IDS.length;

/** How a page is built from JSON blocks */
export const PAGE_BUILD_FLOW = {
  title: "CMS page render pipeline",
  steps: [
    { step: 1, action: "LOAD_CONFIG", detail: "pageConfigs.js → pages/*.json" },
    { step: 2, action: "SORT_BLOCKS", detail: "blocks sorted by `order`" },
    {
      step: 3,
      action: "RESOLVE_ID",
      detail: "block.componentId → COMPONENT_REGISTRY[id]",
    },
    {
      step: 4,
      action: "RENDER",
      detail: "<Component key={instanceId} {...props} />",
    },
    {
      step: 5,
      action: "FOOTER",
      detail: "App.jsx Footer (global, unless block uses `footer` id)",
    },
  ],
};

/** Mermaid diagram — paste into Markdown preview or mermaid.live */
export const COMPONENT_FLOW_MERMAID = `flowchart TB
  subgraph pipeline["Page build flow"]
    JSON["pages/*.json<br/>blocks[]"]
    CFG["pageConfigs.js"]
    REN["PageRenderer.jsx"]
    REG["componentRegistry.js<br/>49 component IDs"]
    UI["Live page UI"]
    JSON --> CFG --> REN --> REG --> UI
  end

  subgraph nav["navigation — 3"]
    N1["navbar"]
    N2["about-navbar"]
    N3["footer"]
  end

  subgraph hero["hero — 7"]
    H1["hero"]
    H2["about-hero"]
    H3["placement-hero"]
    H4["career-beauty-hero"]
    H5["events-hero"]
    H6["blog-hero"]
    H7["blog-hero-banner"]
  end

  subgraph content["content — 18"]
    C1["stats … contact"]
  end

  subgraph events["events — 10"]
    E1["partners-logo-grid … featured-music-festival"]
  end

  subgraph blog["blog — 4"]
    B1["blog-card-section … blog-detail-content"]
  end

  subgraph courses["courses — 7"]
    CO1["explore-courses … indian-cuisine-course-details"]
  end

  REG --> nav
  REG --> hero
  REG --> content
  REG --> events
  REG --> blog
  REG --> courses
`;

/** Mermaid: every component ID node (compact by category) */
export const COMPONENT_IDS_MERMAID = `flowchart LR
  subgraph navigation["navigation (3)"]
    navbar --> about-navbar --> footer
  end
  subgraph heroes["hero (7)"]
    hero --> about-hero --> placement-hero --> career-beauty-hero
    events-hero --> blog-hero --> blog-hero-banner
  end
  subgraph general["content (18)"]
    stats --> about --> our-company --> why-choose-us
    why-choose-about --> programs-slider --> courses-slider --> affiliations
    expertise --> top-employers --> video-section --> testimonials
    articles --> faq --> contact --> nfci-history --> about-team --> training-partners
  end
  subgraph ev["events (10)"]
    partners-logo-grid --> future-leaders-event --> upcoming-events
    featured-event-banner --> event-page-team --> event-stats
    recent-events --> related-events --> about-event-gallery --> featured-music-festival
  end
  subgraph bl["blog (4)"]
    blog-card-section --> recent-posts --> related-posts --> blog-detail-content
  end
  subgraph cr["courses (7)"]
    explore-courses --> reasons-section --> what-will-you-learn
    indian-tandoori-gallery --> certificate-tandoor --> indian-cooking-eligibility --> indian-cuisine-course-details
  end
`;

/** Tables grouped by category (derived from COMPONENT_CATALOG) */
export function getComponentsTableByCategory() {
  const categories = [
    "navigation",
    "hero",
    "content",
    "events",
    "blog",
    "courses",
  ];
  return Object.fromEntries(
    categories.map((category) => [
      category,
      COMPONENT_CATALOG.filter((row) => row.category === category).map(
        (row, index) => ({
          "#": index + 1,
          componentId: row.id,
          label: row.label,
          file: row.file,
          constant:
            Object.entries(COMPONENT_IDS).find(([, v]) => v === row.id)?.[0] ??
            "—",
        }),
      ),
    ]),
  );
}

/** Flat master table — all 49 rows */
export function getAllComponentsTable() {
  return COMPONENT_CATALOG.map((row, index) => ({
    "#": index + 1,
    componentId: row.id,
    label: row.label,
    file: `src/components/${row.file}`,
    category: row.category,
    constant:
      Object.entries(COMPONENT_IDS).find(([, v]) => v === row.id)?.[0] ?? "—",
  }));
}

export const COMPONENTS_FLOW = {
  count: COMPONENT_COUNT,
  ids: COMPONENT_IDS,
  catalog: COMPONENT_CATALOG,
  pageBuildFlow: PAGE_BUILD_FLOW,
  diagrams: {
    pipeline: COMPONENT_FLOW_MERMAID,
    allIdsByCategory: COMPONENT_IDS_MERMAID,
  },
  tables: {
    all: getAllComponentsTable(),
    byCategory: getComponentsTableByCategory(),
  },
};

export default COMPONENTS_FLOW;
