import { Resend } from "resend";

const resend = new Resend("re_U7kEJn2J_CEwBzsbp3Ww3uHZCPzvefvQB");

resend.emails.send({
  from: "onboarding@resend.dev",
  to: "hello11preist@gmail.com",
  subject: "Hello World",
  html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
});
