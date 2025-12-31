import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, phone, jobTitle, message } =
      await request.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // your gmail
        pass: process.env.GMAIL_APP_PASSWORD, // app password
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.GMAIL_USER, // your gmail again
      subject: "New Contact Form Submission",
      html: `
        <h2>New Contact Message</h2>
        <p><b>First Name:</b> ${firstName}</p>
        <p><b>Last Name:</b> ${lastName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone || "Not Provided"}</p>
        <p><b>Job Title:</b> ${jobTitle || "Not Provided"}</p>
        <p><b>Message:</b><br/> ${message}</p>
      `,
    });

    return Response.json({ success: true, msg: "Email Sent Successfully" });
  } catch (error) {
    console.log(error);
    return Response.json({ success: false, msg: "Failed to send email" });
  }
}
