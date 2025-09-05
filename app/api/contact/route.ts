import { type NextRequest, NextResponse } from "next/server";

// Simple email validation function
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
  // Hello
}

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    let body;
    try {
      body = await request.json();
    } catch (parseError) {
      console.error("JSON parse error:", parseError);
      return NextResponse.json(
        { error: "Invalid JSON in request body" },
        { status: 400 }
      );
    }

    console.log("Received form data:", body);

    // Validate required fields
    const required = ["firstName", "lastName", "email", "service", "message"];
    const missing = required.filter(
      (field) => !body[field] || String(body[field]).trim() === ""
    );

    if (missing.length > 0) {
      return NextResponse.json(
        { error: `Missing required fields: ${missing.join(", ")}` },
        { status: 400 }
      );
    }

    // Validate email format
    if (!isValidEmail(body.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Check if Resend is available and configured
    const resendApiKey = process.env.RESEND_API_KEY;
    if (!resendApiKey) {
      console.error("RESEND_API_KEY is not configured");
      // For now, just log the form data and return success
      console.log("Form submission (email not sent due to missing API key):", {
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        phone: body.phone,
        service: body.service,
        message: body.message,
      });

      return NextResponse.json(
        {
          success: true,
          message: "Form submitted successfully (email service not configured)",
        },
        { status: 200 }
      );
    }

    // Try to send email with Resend
    try {
      const { Resend } = await import("resend");
      const resend = new Resend(resendApiKey);

      // Create a simple text email since the React component might be causing issues
      const emailContent = `
New Contact Form Submission

Name: ${body.firstName} ${body.lastName}
Email: ${body.email}
Phone: ${body.phone || "Not provided"}
Service: ${body.service}

Message:
${body.message}

---
This email was sent from the contact form on dedigitallabs.com
      `.trim();

      const { data, error } = await resend.emails.send({
        from: "Contact Form <onboarding@resend.dev>", // Use Resend's default domain for testing
        to: "hello11preist@gmail.com",
        subject: `New Contact Form Submission - ${body.service}`,
        text: emailContent,
      });

      if (error) {
        console.error("Resend error:", error);
        // Still return success to user, but log the error
        console.log("Form data (email failed to send):", body);
        return NextResponse.json(
          {
            success: true,
            message: "Form submitted successfully",
            note: "Email delivery may be delayed",
          },
          { status: 200 }
        );
      }

      console.log("Email sent successfully:", data);
      return NextResponse.json(
        {
          success: true,
          message: "Form submitted and email sent successfully",
          id: data?.id,
        },
        { status: 200 }
      );
    } catch (emailError) {
      console.error("Email sending error:", emailError);
      // Log form data and return success to user
      console.log("Form data (email service error):", body);
      return NextResponse.json(
        {
          success: true,
          message: "Form submitted successfully",
        },
        { status: 200 }
      );
    }
  } catch (error: any) {
    console.error("Contact form API error:", error);
    return NextResponse.json(
      {
        error: "Internal server error",
        details: error.message,
      },
      { status: 500 }
    );
  }
}

// Handle other HTTP methods
export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
