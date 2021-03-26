const Keys = (props) => (
  <div className="float-right w-full bg-gradient-to-b from-indigo-400 to-indigo-500">
    <div className="flex w-full">
      <div className="w-1/4 border-b border-r border-indigo-400">
        <button
          className="w-full h-16 text-xl font-light text-white text-opacity-50 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20"
          onClick={() => props.onAllClearButtonClick()}
        >
          C
        </button>
      </div>
      <div className="w-1/4 border-b border-r border-indigo-400">
        <button
          className="w-full h-16 text-xl font-light text-white text-opacity-50 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20"
          onClick={() => props.onChangeSignButtonClick()}
        >
          +/-
        </button>
      </div>
      <div className="w-1/4 border-b border-r border-indigo-400">
        <button
          className="w-full h-16 text-xl font-light text-white text-opacity-50 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20"
          onClick={() => props.onOperatorButtonClick("%")}
        >
          %
        </button>
      </div>
      <div className="w-1/4 border-b border-r border-indigo-400">
        <button
          className="w-full h-16 text-2xl font-light text-white bg-indigo-700 outline-none focus:outline-none bg-opacity-10 hover:bg-opacity-20"
          onClick={() => props.onOperatorButtonClick("÷")}
        >
          ÷
        </button>
      </div>
    </div>
    <div className="flex w-full">
      <div className="w-1/4 border-b border-r border-indigo-400">
        <button
          className="w-full h-16 text-xl font-light text-white outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20"
          onClick={() => props.onDigitButtonClick(7)}
        >
          7
        </button>
      </div>
      <div className="w-1/4 border-b border-r border-indigo-400">
        <button
          className="w-full h-16 text-xl font-light text-white outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20"
          onClick={() => props.onDigitButtonClick(8)}
        >
          8
        </button>
      </div>
      <div className="w-1/4 border-b border-r border-indigo-400">
        <button
          className="w-full h-16 text-xl font-light text-white outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20"
          onClick={() => props.onDigitButtonClick(9)}
        >
          9
        </button>
      </div>
      <div className="w-1/4 border-b border-r border-indigo-400">
        <button
          className="w-full h-16 text-xl font-light text-white bg-indigo-700 outline-none focus:outline-none bg-opacity-10 hover:bg-opacity-20"
          onClick={() => props.onOperatorButtonClick("x")}
        >
          x
        </button>
      </div>
    </div>
    <div className="flex w-full">
      <div className="w-1/4 border-b border-r border-indigo-400">
        <button
          className="w-full h-16 text-xl font-light text-white outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20"
          onClick={() => props.onDigitButtonClick(4)}
        >
          4
        </button>
      </div>
      <div className="w-1/4 border-b border-r border-indigo-400">
        <button
          className="w-full h-16 text-xl font-light text-white outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20"
          onClick={() => props.onDigitButtonClick(5)}
        >
          5
        </button>
      </div>
      <div className="w-1/4 border-b border-r border-indigo-400">
        <button
          className="w-full h-16 text-xl font-light text-white outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20"
          onClick={() => props.onDigitButtonClick(6)}
        >
          6
        </button>
      </div>
      <div className="w-1/4 border-b border-r border-indigo-400">
        <button
          className="w-full h-16 text-xl font-light text-white bg-indigo-700 outline-none focus:outline-none bg-opacity-10 hover:bg-opacity-20"
          onClick={() => props.onOperatorButtonClick("-")}
        >
          -
        </button>
      </div>
    </div>
    <div className="flex w-full">
      <div className="w-1/4 border-b border-r border-indigo-400">
        <button
          className="w-full h-16 text-xl font-light text-white outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20"
          onClick={() => props.onDigitButtonClick(1)}
        >
          1
        </button>
      </div>
      <div className="w-1/4 border-b border-r border-indigo-400">
        <button
          className="w-full h-16 text-xl font-light text-white outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20"
          onClick={() => props.onDigitButtonClick(2)}
        >
          2
        </button>
      </div>
      <div className="w-1/4 border-b border-r border-indigo-400">
        <button
          className="w-full h-16 text-xl font-light text-white outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20"
          onClick={() => props.onDigitButtonClick(3)}
        >
          3
        </button>
      </div>
      <div className="w-1/4 border-b border-r border-indigo-400">
        <button
          className="w-full h-16 text-xl font-light text-white bg-indigo-700 outline-none focus:outline-none bg-opacity-10 hover:bg-opacity-20"
          onClick={() => props.onOperatorButtonClick("+")}
        >
          +
        </button>
      </div>
    </div>
    <div className="flex w-full">
      <div className="w-1/4 border-r border-indigo-400">
        <button
          className="w-full h-16 text-xl font-light text-white outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20"
          onClick={() => props.onDigitButtonClick(0)}
        >
          0
        </button>
      </div>
      <div className="w-1/4 border-r border-indigo-400">
        <button
          className="w-full h-16 text-xl font-light text-white outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20"
          onClick={() => props.onPointButtonClick()}
        >
          .
        </button>
      </div>
      <div className="w-2/4 border-r border-indigo-400">
        <button
          className="w-full h-16 text-xl font-light text-white bg-indigo-700 outline-none focus:outline-none bg-opacity-30 hover:bg-opacity-40"
          onClick={() => props.onEqualButtonClick()}
        >
          =
        </button>
      </div>
    </div>
  </div>
);

export default Keys;
