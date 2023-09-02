import Switch from "../Switch"
import { FaQuestionCircle, FaRegChartBar } from "react-icons/fa"
const Header: React.FC = () => {
  
  return (
    <header className="flex items-center p-4 w-[638px] rounded-lg bg-header-light dark:bg-header-dark mb-[67px]">
      <div className="flex items-center flex-1">
        <button className="bg-transparent">
          <FaQuestionCircle />
        </button>
      </div>
      <div className="flex items-center justify-center flex-1">
        <h1 className="text-4xl tracking-wider dark:text-gray-500">WORDLE</h1>
      </div>
      <div className="flex items-center justify-end flex-1">
        <button className="bg-transparent">
          <FaRegChartBar />
        </button>
        <Switch />
      </div>
    </header>
  )
}

export default Header
