import { useId } from "react";

const Letters: React.FC = () => {
  const idRow = useId()
  const idCol = useId()
  const wrap = (): React.ReactNode[] => {
    const colArray = [0, 1, 2, 3, 4]
    return (
      colArray.map(() => (
        rowLetter()
      ))
    );
  };
  
  const rowLetter = (): React.ReactNode => {
    const rowArray = [0, 1, 2, 3, 4]
    return (
      <>
        <div className="flex gap-[11px] mb-[11px]" key={idRow}>
          {rowArray.map(() => (
            cellLetter()
          ))}
        </div>
      </>
    );
  };
  
  const cellLetter = (): React.ReactNode => {
    return (
      <div key={idCol} className="p-2 text-center bg-[#939B9F] cursor-pointer w-[76px] h-[75px] flex-shrink-0 rounded-lg">
        <span className="font-bold text-[35px] leading-[60px]"></span>
      </div>
    );
  };

  return (
    <div className="mb-[54px]">
      {wrap()}
    </div>
  )
}

export default Letters
