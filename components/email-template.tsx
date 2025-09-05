interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
}

export function EmailTemplate({
  firstName,
  lastName,
  email,
  phone,
  service,
  message,
}: EmailTemplateProps) {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
      }}
    >
      <div
        style={{
          backgroundColor: "#f8fafc",
          padding: "30px",
          borderRadius: "8px",
          marginBottom: "20px",
        }}
      >
        <h1
          style={{ color: "#1e293b", margin: "0 0 10px 0", fontSize: "24px" }}
        >
          New Contact Form Submission
        </h1>
        <p style={{ color: "#64748b", margin: "0", fontSize: "16px" }}>
          You have received a new message from your website contact form.
        </p>
      </div>

      <div
        style={{
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "8px",
          border: "1px solid #e2e8f0",
        }}
      >
        <h2
          style={{
            color: "#1e293b",
            marginTop: "0",
            fontSize: "20px",
            marginBottom: "20px",
          }}
        >
          Contact Details
        </h2>

        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <tr>
            <td
              style={{
                padding: "12px 0",
                borderBottom: "1px solid #f1f5f9",
                fontWeight: "600",
                color: "#374151",
                width: "30%",
              }}
            >
              Name:
            </td>
            <td
              style={{
                padding: "12px 0",
                borderBottom: "1px solid #f1f5f9",
                color: "#1f2937",
              }}
            >
              {firstName} {lastName}
            </td>
          </tr>
          <tr>
            <td
              style={{
                padding: "12px 0",
                borderBottom: "1px solid #f1f5f9",
                fontWeight: "600",
                color: "#374151",
              }}
            >
              Email:
            </td>
            <td
              style={{
                padding: "12px 0",
                borderBottom: "1px solid #f1f5f9",
                color: "#1f2937",
              }}
            >
              <a
                href={`mailto:${email}`}
                style={{ color: "#2563eb", textDecoration: "none" }}
              >
                {email}
              </a>
            </td>
          </tr>
          {phone && (
            <tr>
              <td
                style={{
                  padding: "12px 0",
                  borderBottom: "1px solid #f1f5f9",
                  fontWeight: "600",
                  color: "#374151",
                }}
              >
                Phone:
              </td>
              <td
                style={{
                  padding: "12px 0",
                  borderBottom: "1px solid #f1f5f9",
                  color: "#1f2937",
                }}
              >
                <a
                  href={`tel:${phone}`}
                  style={{ color: "#2563eb", textDecoration: "none" }}
                >
                  {phone}
                </a>
              </td>
            </tr>
          )}
          <tr>
            <td
              style={{
                padding: "12px 0",
                borderBottom: "1px solid #f1f5f9",
                fontWeight: "600",
                color: "#374151",
              }}
            >
              Service:
            </td>
            <td
              style={{
                padding: "12px 0",
                borderBottom: "1px solid #f1f5f9",
                color: "#1f2937",
              }}
            >
              {service}
            </td>
          </tr>
        </table>

        <h3
          style={{
            color: "#1e293b",
            marginTop: "30px",
            marginBottom: "15px",
            fontSize: "18px",
          }}
        >
          Message:
        </h3>
        <div
          style={{
            backgroundColor: "#f8fafc",
            padding: "20px",
            borderRadius: "6px",
            border: "1px solid #e2e8f0",
            lineHeight: "1.6",
            color: "#374151",
          }}
        >
          {message}
        </div>
      </div>

      <div
        style={{
          marginTop: "30px",
          textAlign: "center",
          color: "#64748b",
          fontSize: "14px",
        }}
      >
        <p style={{ margin: "0" }}>
          This email was sent from the contact form on{" "}
          <a
            href="https://dedigitallabs.com"
            style={{ color: "#2563eb", textDecoration: "none" }}
          >
            dedigitallabs.com
          </a>
        </p>
        <p style={{ margin: "10px 0 0 0" }}>
          Please respond to this inquiry within 24 hours for the best customer
          experience.
        </p>
      </div>
    </div>
  );
}
