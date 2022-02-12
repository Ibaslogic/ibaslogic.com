const OriginallyWrittenFor = ({ link, owner }) => {
  return (
    <p className="text-gray-700 text-sm italic">
      This post was originally witten for <a href={link}>{owner}</a>
    </p>
  );
};

export default OriginallyWrittenFor;
