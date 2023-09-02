
const Keyboard: React.FC = () => {
  const rows = [
    ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'Ñ'],
    ['Enter', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Delete']
  ];
  return (
    <div className="flex flex-col gap-2 bg-keyboard-light py-[30px] px-[20px] rounded-lg">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className={`flex gap-2 ${rowIndex === 0 ? 'ml-[40px]' : (rowIndex === 1 ? 'ml-[60px]' : '')}`}>
          {row.map((key, keyIndex) => (
            <button
              key={keyIndex}
              className={`flex justify-center items-center h-[51px] ${key === 'Enter' || key === 'Delete' ? 'w-[71px]' : 'w-[44px]'} text-center rounded bg-key-light`}
            >
              {key}
            </button>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Keyboard
