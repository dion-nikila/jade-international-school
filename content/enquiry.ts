export const enquiryContent = {
  labels: {name: "Your name", email: "Email address", phone: "Phone number (optional)", pathway: "I’m interested in", message: "What would you like to know?", consent: "I understand this is a prototype and my enquiry will not be sent."},
  placeholders: {name: "Parent or guardian name", email: "you@example.com", phone: "+94", message: "Tell us about the pathway or visit you have in mind."},
  pathways: ["Select a pathway", "Primary", "Secondary", "IGCSE & A Levels", "Fast Track A Levels", "A school tour", "I’d like some guidance"],
  submit: "Check my enquiry", submitting: "Checking enquiry…", required: "Required",
  errors: {
    name: "Please enter your name (at least 2 characters).", email: "Please enter a valid email address.", phone: "Please enter a valid phone number or leave this blank.",
    pathway: "Please choose a pathway or school tour.", message: "Please write a short message (10–2,000 characters).", consent: "Please confirm you understand this is a prototype.",
    general: "Please check the highlighted fields.", network: "We couldn’t check your enquiry. Please try again or contact the school directly.",
    invalidBody: "The enquiry could not be read. Please try again.", tooLarge: "This enquiry is too large. Please shorten your message.", unsupported: "Please send a JSON enquiry.",
  },
  success: "Your enquiry looks ready. This prototype has not sent or saved it. Please call or WhatsApp the school to continue.",
} as const;
