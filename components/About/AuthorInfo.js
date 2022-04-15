import Image from "next/image";
const AuthorInfo = () => {
  const avatar = `/avatar.png`;

  return (
    <>
      <div className="image">
        <Image
          width={100}
          height={100}
          src={avatar}
          className="block h-[100px] w-[100px] object-cover rounded-full bg-gray-200"
          alt="Ibas Majid"
        />
      </div>

      {/* <img className="" src={author} alt=""/> */}
      <p className="info font-semibold leading-3 mb-0">
        Ibas Majid <br />
        <span className="authorInfo">ibas@ibaslogic.com</span>
        <span className="authorInfo">+234 81 3954 23 86</span>
      </p>
      <div className="content md:mt-2">
        <p className="m-0 text-gray-600 text-sm">
          Signup and get exclusive dev tips that I only share with Email
          Subscribers.
        </p>
      </div>
    </>
  );
};

export default AuthorInfo;
