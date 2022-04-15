import { useFormik } from "formik";
import * as Yup from "yup";

const ContactForm = () => {
  const subjects = [
    "General inquiry",
    "Consulting inquiry",
    "Speaking request",
    "Feedback and suggestions",
    "Ibaslogic site feature request",
  ];

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const validationSchema = Yup.object({
    subject: Yup.string().required("Please select a subject").oneOf(subjects),
    name: Yup.string()
      .min(2, "Too short!")
      .max(50, "Too long!")
      .required("Name is required!"),
    email: Yup.string()
      .email("Enter a valid email!")
      .required("Email is required!"),
    message: Yup.string().trim().required("Write a brief message!"),
  });

  const formik = useFormik({
    initialValues: {
      subject: "",
      name: "",
      email: "",
      message: "",
    },
    validationSchema,
    onSubmit: (values, submitProps) => {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact v2", ...values }),
      })
        // .then(() => alert("Success!"))
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              `There is an HTTP error: The status is ${response.status}`
            );
          } else if (response.ok) {
            console.log("success!");
            submitProps.resetForm();
          } else {
            // some other errors
            console.log("something went wrong");
          }

          return response;
        })
        // .catch((error) => alert(error));
        .catch((err) => {
          console.log(err.message);
        });

      // alert(JSON.stringify(values, null, 2));
    },
  });

  const subjectOptions = subjects.map((subject, key) => (
    <option
      value={subject}
      // onChange={formik.handleChange}
      key={key}
    >
      {subject}
    </option>
  ));

  const renderError = (message) => (
    <p className="text-[#ff2a2a] text-sm">{message}</p>
  );

  return (
    <form
      name="contact v2"
      // method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      // data-netlify-recaptcha="true"
      className="flex-1 py-6 sm:p-6"
      onSubmit={formik.handleSubmit}
    >
      <input type="hidden" name="bot-field" />{" "}
      <input type="hidden" name="form-name" value="contact v2" />{" "}
      <div className="grid gap-6 mb-6">
        <div>
          <select
            className="selectField p-3 border border-gray-300 outline-none focus:border-gray-700 block bg-white text-gray-700 w-full"
            arial-label="I'd like to talk about"
            id="subject"
            {...formik.getFieldProps("subject")}
          >
            <option value={""} disabled>
              I'd like to talk about...
            </option>
            {subjectOptions}
          </select>
          {formik.touched.subject && formik.errors.subject
            ? renderError(formik.errors.subject)
            : null}
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <input
              className="p-3 border border-gray-300 outline-none focus:border-gray-700 block  bg-white text-gray-700 w-full"
              type="text"
              placeholder="Name"
              id="name"
              aria-label="your-name"
              {...formik.getFieldProps("name")}
            />
            {formik.touched.name && formik.touched.name && formik.errors.name
              ? renderError(formik.errors.name)
              : null}
          </div>
          <div>
            <input
              className="p-3 border border-gray-300 outline-none focus:border-gray-700 block  bg-white text-gray-700 w-full"
              type="email"
              placeholder="Email Address"
              aria-label="your-email"
              id="email"
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email
              ? renderError(formik.errors.email)
              : null}
          </div>
        </div>

        <div>
          <textarea
            className="p-3 block w-full border border-gray-300 outline-none focus:border-gray-700 bg-white border-warm-gray-300 "
            placeholder="Your message"
            aria-label="text-area"
            id="message"
            {...formik.getFieldProps("message")}
            rows="6"
          />
          {formik.touched.message && formik.errors.message
            ? renderError(formik.errors.message)
            : null}
        </div>

        <div data-netlify-recaptcha="true"></div>
      </div>
      <button
        type="submit"
        aria-label="submit-form"
        className="text-center py-4 px-8 bg-[#1b1b1b] hover:bg-black text-white border-[#111827] tracking-widest rounded-sm"
      >
        Submit
      </button>
    </form>

    // <form
    //   name="contact v2"
    //   method="post"
    //   data-netlify="true"
    //   data-netlify-honeypot="bot-field"
    //   data-netlify-recaptcha="true"
    //   className="flex-1 py-6 sm:p-6"
    // >
    //   <input type="hidden" name="bot-field" />{" "}
    //   <input type="hidden" name="form-name" value="contact v2" />{" "}
    //   <div className="grid gap-6 mb-6">
    //     <select
    //       className="selectField p-3 border border-gray-300 outline-none focus:border-gray-700 block bg-white text-gray-700 w-full"
    //       arial-label="I'd like to talk about"
    //       name="discus"
    //       required
    //     >
    //       <option value="" disabled selected>
    //         I'd like to talk about...
    //       </option>
    //       <option value="General inquiry">General inquiry</option>
    //       <option value="Consulting inquiry">Consulting inquiry</option>
    //       <option value="Speaking request">Speaking request</option>
    //       <option value="Feedback and suggestions">
    //         Feedback and suggestions
    //       </option>
    //       <option value="Ibaslogic site - feature request">
    //         Ibaslogic site feature request
    //       </option>
    //     </select>

    //     <div className="grid gap-6 sm:grid-cols-2">
    //       <input
    //         className="p-3 border border-gray-300 outline-none focus:border-gray-700 block  bg-white text-gray-700 w-full"
    //         type="text"
    //         placeholder="Name"
    //         name="name"
    //         aria-label="your-name"
    //         required
    //       />

    //       <input
    //         className="p-3 border border-gray-300 outline-none focus:border-gray-700 block  bg-white text-gray-700 w-full"
    //         type="email"
    //         placeholder="Email Address"
    //         aria-label="your-email"
    //         name="email"
    //         required
    //       />
    //     </div>

    //     <textarea
    //       className="p-3 block w-full border border-gray-300 outline-none focus:border-gray-700 bg-white border-warm-gray-300 "
    //       placeholder="Your message"
    //       aria-label="text-area"
    //       name="message"
    //       rows="6"
    //       required
    //     />

    //     <div data-netlify-recaptcha="true"></div>
    //   </div>
    //   <button
    //     aria-label="submit-form"
    //     className="text-center py-4 px-8 bg-[#1b1b1b] hover:bg-black text-white border-[#111827] tracking-widest rounded-sm"
    //   >
    //     Submit
    //   </button>
    // </form>
  );
};

export default ContactForm;
// todo: use formik and yup for validation
