/**
 * API utilities for Headless WordPress + WPGraphQL.
 * Falls back to static data from data.ts when WP is not connected.
 */

import { SERVICES, LOCATIONS, TESTIMONIALS, HOME_FAQS } from "./data";

const WP_GRAPHQL_URL =
  process.env.WP_GRAPHQL_URL || "";

async function fetchGraphQL<T>(
  query: string,
  variables: Record<string, unknown> = {}
): Promise<T | null> {
  if (!WP_GRAPHQL_URL) return null;

  try {
    const res = await fetch(WP_GRAPHQL_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, variables }),
      next: { revalidate: 60 },
    });
    const json = await res.json();
    if (json.errors) {
      console.error("WPGraphQL errors:", json.errors);
      return null;
    }
    return json.data as T;
  } catch (err) {
    console.error("WPGraphQL fetch error:", err);
    return null;
  }
}

// Returns services — from WP if connected, otherwise static fallback
export async function getServices() {
  const data = await fetchGraphQL<{ services: typeof SERVICES }>(
    `query GetServices {
      services { id title slug shortDesc icon }
    }`
  );
  return data?.services ?? SERVICES;
}

// Returns locations — from WP if connected, otherwise static fallback
export async function getLocations() {
  const data = await fetchGraphQL<{ locations: typeof LOCATIONS }>(
    `query GetLocations {
      locations { id name slug description }
    }`
  );
  return data?.locations ?? LOCATIONS;
}

// Returns testimonials
export async function getTestimonials() {
  return TESTIMONIALS;
}

// Returns FAQs
export async function getFAQs() {
  return HOME_FAQS;
}
