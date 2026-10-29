import {enquiryContent} from "@/content/enquiry";

export type Enquiry = {name: string; email: string; phone: string; pathway: string; message: string; consent: boolean};
export type EnquiryErrors = Partial<Record<keyof Enquiry, string>>;
export function validateEnquiry(input: unknown): {data: Enquiry; errors: EnquiryErrors} {
  const raw = input && typeof input === "object" ? input as Record<string, unknown> : {};
  const string = (key: string) => typeof raw[key] === "string" ? (raw[key] as string).trim() : "";
  const data: Enquiry = {name: string("name"), email: string("email"), phone: string("phone"), pathway: string("pathway"), message: string("message"), consent: raw.consent === true};
  const errors: EnquiryErrors = {};
  const copy = enquiryContent.errors;
  if (data.name.length < 2 || data.name.length > 100) errors.name = copy.name;
  if (data.email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = copy.email;
  if (data.phone && (!/^[+()\d\s.-]{7,30}$/.test(data.phone) || data.phone.replace(/\D/g, "").length < 7)) errors.phone = copy.phone;
  if (!(enquiryContent.pathways.slice(1) as readonly string[]).includes(data.pathway)) errors.pathway = copy.pathway;
  if (data.message.length < 10 || data.message.length > 2000) errors.message = copy.message;
  if (!data.consent) errors.consent = copy.consent;
  return {data, errors};
}
