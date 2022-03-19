const NewsTopbar = () => {
  const topBar = true;

  return (
    <>
      {topBar && (
        <aside className="text-sm py-[0.75rem] border-b border-solid border-[#f0f0f2] segoe-font">
          <div className="flex gap-3 text-[12px] text-[#48434f] justify-between items-center px-6 md:px-5 max-w-[68rem] mx-auto">
            <p>
              Next.js tutorial series coming soon.
              <strong>
                {" "}
                <a
                  href="https://ibaslogic.substack.com/"
                  className="text-[#3b82f6]"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Sign up"
                >
                  Sign up for update!{" "}
                </a>
              </strong>
            </p>
            <div>{/* some other things here */}</div>
          </div>
        </aside>
      )}
    </>
  );
};

export default NewsTopbar;
