import { NextResponse } from "next/server";

type ContactSubmission = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  message?: unknown;
};

function cleanText(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: Request) {
  let body: ContactSubmission;
  try {
    body = (await request.json()) as ContactSubmission;
  } catch {
    return NextResponse.json({ error: "Please send a valid form submission." }, { status: 400 });
  }

  const name = cleanText(body.name);
  const email = cleanText(body.email);
  const company = cleanText(body.company);
  const message = cleanText(body.message);
  const errors: Record<string, string> = {};

  if (name.length < 2 || name.length > 80) errors.name = "Name must be between 2 and 80 characters.";
  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Enter a valid email address.";
  if (company.length < 2 || company.length > 120) errors.company = "Company must be between 2 and 120 characters.";
  if (message.length < 10 || message.length > 2000) errors.message = "Message must be between 10 and 2,000 characters.";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ error: "Please check the highlighted details and try again.", fields: errors }, { status: 400 });
  }

  console.info("[Shrek Consulting IT] Contact submission received", {
    name,
    email,
    company,
    message,
    receivedAt: new Date().toISOString()
  });

  return NextResponse.json({ ok: true, message: "Your message has been received." });
}
