import {NextResponse} from "next/server";
import {validateEnquiry} from "@/lib/enquiry";
import {enquiryContent} from "@/content/enquiry";

export async function POST(request: Request) {
  const headers = {"Cache-Control": "no-store"};
  if (!request.headers.get("content-type")?.includes("application/json")) return NextResponse.json({message: enquiryContent.errors.unsupported}, {status: 415, headers});
  if (Number(request.headers.get("content-length") || 0) > 12000) return NextResponse.json({message: enquiryContent.errors.tooLarge}, {status: 413, headers});
  try {
    const text = await request.text();
    if (new TextEncoder().encode(text).length > 12000) return NextResponse.json({message: enquiryContent.errors.tooLarge}, {status: 413, headers});
    const result = validateEnquiry(JSON.parse(text));
    if (Object.keys(result.errors).length) return NextResponse.json({message: enquiryContent.errors.general, errors: result.errors}, {status: 422, headers});
    // Placeholder transport only. Integrate an approved email provider and privacy policy in a future phase.
    // Never log or retain a parent's enquiry in this prototype.
    return NextResponse.json({preview: true, delivered: false, message: enquiryContent.success}, {headers});
  } catch {
    return NextResponse.json({message: enquiryContent.errors.invalidBody}, {status: 400, headers});
  }
}
