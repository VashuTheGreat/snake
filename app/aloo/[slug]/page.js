"use client";

import { use } from "react";

export default function Page({ params }) {
  const resolvedParams = use(params); // Unwrap params Promise
  return <p>Post Slug: {resolvedParams.slug}</p>;
}
