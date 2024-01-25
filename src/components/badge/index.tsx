import cn from "classnames";
import { IoMdClose } from "react-icons/io";

interface IBadge {
    lable: string;
    onRemove: (label: string) => void;
    color: string;
}

const Badge = ({ lable, onRemove, color }: IBadge) => {
    return (
        <div className={cn("flex px-2 py-1  items-center gap-4 rounded-md text-sm  justify-between", `bg-${color}-100 text-${color}-500`)}>
            <p>
                {lable}
            </p>
            <IoMdClose onClick={() => onRemove(lable)} className="cursor-pointer" />
        </div>
    )
}

export default Badge