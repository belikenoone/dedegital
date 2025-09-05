import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function RefundPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <Badge
              variant="secondary"
              className="bg-blue-100 text-blue-700 px-4 py-2 mb-4"
            >
              Legal Document
            </Badge>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Refund Policy
            </h1>
            <p className="text-gray-600">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>1. Refund Eligibility</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  We strive to provide high-quality services and ensure client
                  satisfaction. Refunds may be considered under the following
                  circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Service not delivered as per agreed specifications</li>
                  <li>
                    Project cancellation within 48 hours of contract signing
                  </li>
                  <li>Technical issues preventing service delivery</li>
                  <li>Mutual agreement between both parties</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>2. Non-Refundable Services</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  The following services are non-refundable:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Consultation fees and strategy sessions</li>
                  <li>
                    Custom development work that has been completed and
                    delivered
                  </li>
                  <li>
                    Third-party costs (domain registration, hosting, advertising
                    spend)
                  </li>
                  <li>Services that have been fully delivered and accepted</li>
                  <li>
                    Branding materials that have been finalized and delivered
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>3. Refund Process</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">To request a refund:</p>
                <ol className="list-decimal list-inside space-y-2 text-gray-600">
                  <li>Contact us within 30 days of service delivery</li>
                  <li>Provide detailed reasons for the refund request</li>
                  <li>Allow us 5-7 business days to review your request</li>
                  <li>
                    If approved, refunds will be processed within 10-15 business
                    days
                  </li>
                </ol>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>4. Partial Refunds</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  For ongoing projects, partial refunds may be considered based
                  on:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Percentage of work completed</li>
                  <li>Resources already allocated to the project</li>
                  <li>Third-party costs incurred</li>
                  <li>Time invested in project planning and execution</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>5. Dispute Resolution</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  We encourage open communication to resolve any issues. If
                  you're unsatisfied with our services:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Contact our support team immediately</li>
                  <li>
                    We'll work together to find a mutually acceptable solution
                  </li>
                  <li>
                    If resolution isn't possible, we'll consider refund options
                  </li>
                  <li>
                    All disputes will be handled professionally and fairly
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6. Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  For refund requests or questions about this policy, please
                  contact us:
                </p>
                <div className="space-y-2 text-gray-600">
                  <p>Email: hello@dedigitallabs.com</p>
                  <p>Phone: +91 9582179766</p>
                  <p>
                    Address: Office No. 104 First Floor, D-Mall, Pitampura, New
                    Delhi - 110034
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
