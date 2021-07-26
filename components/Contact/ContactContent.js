const ContactContent = () => {
  return (
    <div className="sm:flex">
      <div className="sm:w-[300px] bg-[#1b1b1b] text-white">
        <h1>Let's talk</h1>
        <p>
          Have a question or want to talk about your project? Fill out the form
          and I'll get back to you as soon as posible.
        </p>
        <div>
          <p>
            <span>Icon: </span>{" "}
            <a href={`mailto:ibas@ibaslogic.com`}>ibas@ibaslogic.com</a>
          </p>
          <p>
            <span>icon: </span>
            <a
              href={`https://twitter.com/ibaslogic`}
              target="_blank"
              rel="noopener noreferrer"
            >
              @ibaslogic
            </a>
          </p>
        </div>
      </div>
      <form method="post" className="flex-1">
        <div className="">
          <select
            className="p-3 border border-gray-300 outline-none focus:border-gray-700 block rounded-md bg-white text-gray-700 w-full"
            name="discus"
            required
          >
            <option value="" disabled selected>
              I'd like to talk about...
            </option>
            <option value="General Inquiry">General Inquiry</option>
            <option value="Consulting Inquiry">Consulting Inquiry</option>
            <option value="Speaking Request">Speaking Request</option>
            <option value="Feedback and suggestions">
              Feedback and suggestions
            </option>
            <option value="Ibaslogic Site - Feature request">
              Ibaslogic Site Feature request
            </option>
          </select>

          <input
            className="p-3 border border-gray-300 outline-none focus:border-gray-700 block rounded-md bg-white text-gray-700 w-full"
            type="text"
            placeholder="Name"
            aria-label="your-name"
          />

          <input
            className="p-3 border border-gray-300 outline-none focus:border-gray-700 block rounded-md bg-white text-gray-700 w-full"
            type="email"
            placeholder="Email Address"
            aria-label="your-email"
          />

          <textarea
            className="p-3 block w-full border border-gray-300 outline-none focus:border-gray-700 bg-white border-warm-gray-300 rounded-md"
            placeholder="Your message"
            aria-label="text-area"
            rows="6"
          />
        </div>
        <div className="">
          <button
            aria-label="submit-form"
            className="text-center h-[2.8rem] px-12 bg-[#111827] hover:bg-[#202b42] text-white border-[#111827] tracking-widest rounded-md"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactContent;
