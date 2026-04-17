"use server"

export type ContactFormState = {
  status: "idle" | "success" | "error"
  message: string
}

export async function sendContactEmail(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const name = (formData.get("name") as string)?.trim()
  const email = (formData.get("email") as string)?.trim()
  const subject = (formData.get("subject") as string)?.trim()
  const message = (formData.get("message") as string)?.trim()

  if (!name || !email || !message) {
    return { status: "error", message: "Please fill in all required fields." }
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return { status: "error", message: "Please enter a valid email address." }
  }

  // Using Formspree as a zero-config email backend.
  // Replace FORMSPREE_FORM_ID with your actual Formspree form ID from formspree.io
  const FORMSPREE_ENDPOINT = process.env.FORMSPREE_ENDPOINT ?? ""

  if (!FORMSPREE_ENDPOINT) {
    // Fallback: log and succeed in dev — set FORMSPREE_ENDPOINT in production
    console.log("[Contact Form]", { name, email, subject, message })
    return { status: "success", message: "Message received! I'll get back to you soon." }
  }

  try {
    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ name, email, subject: subject || "Portfolio Contact", message }),
    })

    if (!res.ok) throw new Error("Formspree error")
    return { status: "success", message: "Message sent! I'll get back to you soon." }
  } catch {
    return { status: "error", message: "Something went wrong. Please email me directly." }
  }
}
