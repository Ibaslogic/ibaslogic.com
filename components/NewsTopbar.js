import { useState, useEffect } from "react";
import { MdClose } from "react-icons/md";

const useStorageValue = (key, defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    // const stickyValue = window.localStorage.getItem(key);
    const saved = localStorage.getItem(key);
    if (saved !== null) {
      setValue(JSON.parse(saved));
    }
  }, [key]);

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};

const NewsTopbar = () => {
  const [topBar, setTopbar] = useStorageValue("topBar", true);

  const handleDisplay = () => {
    setTopbar(false);
  };

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
            <button className="text-[20px]" onClick={handleDisplay}>
              <MdClose />
            </button>
          </div>
        </aside>
      )}
    </>
  );
};

export default NewsTopbar;
