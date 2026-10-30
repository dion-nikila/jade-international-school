"use client";
import {useRef, useState, type FormEvent} from "react";
import {enquiryContent as copy} from "@/content/enquiry";
import {site} from "@/content/site";
import {validateEnquiry, type Enquiry, type EnquiryErrors} from "@/lib/enquiry";

export function EnquiryForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [errors, setErrors] = useState<EnquiryErrors>({});
  const [status, setStatus] = useState("");
  const [pending, setPending] = useState(false);
  function focusError(next: EnquiryErrors) {
    const key = Object.keys(next)[0];
    formRef.current?.querySelector<HTMLElement>(`[name="${key}"]`)?.focus();
  }
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending) return;
    const values = new FormData(event.currentTarget);
    const input: Enquiry = {name: String(values.get("name") || ""), email: String(values.get("email") || ""), phone: String(values.get("phone") || ""), pathway: String(values.get("pathway") || ""), message: String(values.get("message") || ""), consent: values.get("consent") === "on"};
    const result = validateEnquiry(input);
    setErrors(result.errors);
    if (Object.keys(result.errors).length) {setStatus(copy.errors.general); focusError(result.errors); return;}
    setPending(true); setStatus("");
    try {
      const response = await fetch("/api/enquiry", {method: "POST", headers: {"Content-Type": "application/json"}, body: JSON.stringify(result.data)});
      const body = await response.json();
      if (!response.ok) {
        if (body.errors) {setErrors(body.errors); focusError(body.errors);}
        setStatus(body.message || copy.errors.network);
      } else {setStatus(copy.success);}
    } catch {setStatus(copy.errors.network);}
    finally {setPending(false);}
  }
  const attributes = (name: keyof Enquiry) => ({id: `enquiry-${name}`, name, "aria-invalid": Boolean(errors[name]), "aria-describedby": errors[name] ? `error-${name}` : undefined});
  const error = (name: keyof Enquiry) => errors[name] && <span className="field-error" id={`error-${name}`}>{errors[name]}</span>;
  return <form ref={formRef} className="enquiry-form" onSubmit={submit} noValidate>
    <div className="form-grid">
      <div className="form-field"><label htmlFor="enquiry-name">{copy.labels.name}</label><input {...attributes("name")} autoComplete="name" placeholder={copy.placeholders.name} maxLength={100} required/>{error("name")}</div>
      <div className="form-field"><label htmlFor="enquiry-email">{copy.labels.email}</label><input {...attributes("email")} type="email" autoComplete="email" placeholder={copy.placeholders.email} maxLength={254} required/>{error("email")}</div>
      <div className="form-field"><label htmlFor="enquiry-phone">{copy.labels.phone}</label><input {...attributes("phone")} type="tel" autoComplete="tel" placeholder={copy.placeholders.phone} maxLength={30}/>{error("phone")}</div>
      <div className="form-field"><label htmlFor="enquiry-pathway">{copy.labels.pathway}</label><select {...attributes("pathway")} required defaultValue=""><option value="" disabled>{copy.pathways[0]}</option>{copy.pathways.slice(1).map(option => <option key={option} value={option}>{option}</option>)}</select>{error("pathway")}</div>
      <div className="form-field form-wide"><label htmlFor="enquiry-message">{copy.labels.message}</label><textarea {...attributes("message")} rows={3} placeholder={copy.placeholders.message} maxLength={2000} required/>{error("message")}</div>
    </div>
    <div className="consent-field"><label><input {...attributes("consent")} type="checkbox" required/><span>{copy.labels.consent}</span></label>{error("consent")}</div>
    <button type="submit" className="button-link" disabled={pending}><span>{pending ? copy.submitting : copy.submit}</span></button>
    <p className="form-status" role="status" aria-live="polite">{status}</p>
    <p className="form-privacy">{site.footer.privacy}</p>
  </form>;
}
