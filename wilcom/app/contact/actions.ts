"use server";

import { redirect } from "next/navigation";

export async function submitQuoteRequest(formData: FormData) {
  const payload = {
    name: formData.get("name")?.toString() ?? "",
    company: formData.get("company")?.toString() ?? "",
    email: formData.get("email")?.toString() ?? "",
    phone: formData.get("phone")?.toString() ?? "",
    service: formData.get("service")?.toString() ?? "",
    budget: formData.get("budget")?.toString() ?? "",
    message: formData.get("message")?.toString() ?? "",
    timeline: formData.get("timeline")?.toString() ?? "",
  };

  if (!payload.name || !payload.email || !payload.message) {
    throw new Error("Missing required fields");
  }

  console.log("Quote request:", payload);

  redirect("/contact/thank-you");
}