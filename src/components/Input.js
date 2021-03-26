const Input = (props) => {
  let value = parseFloat(props.display).toLocaleString("de-DE");
  const scaleFactor = "scale(0.36)";
  const maxCharsAtFullSize = 6;
  let scaleDown = null;
  scaleDown = `${value}`.length > maxCharsAtFullSize ? scaleFactor : "scale(1)";
  return (
    <div className="flex-1 w-full h-24 bg-gradient-to-b from-gray-800 to-gray-700 text-8xl">
      <div
        className="absolute right-0 inline-block text-right text-white origin-right"
        style={{ transform: scaleDown }}
      >
        {value}
      </div>
    </div>
  );
};

export default Input;
