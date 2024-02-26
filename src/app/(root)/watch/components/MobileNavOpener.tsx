import Image from "next/image";
import nav from "@/public/assets/icons/nav.svg";
import Arrow from "../../../../public/assets/icons/arrowLeft.svg";

interface Props {
  lecture_name: string;
  onArrowClick: () => void;
  onNavClick: () => void;
}
const MobileNavOpener = ({ lecture_name, onArrowClick, onNavClick }: Props) => {
  return (
    <>
      <div className="flex items-center justify-between lg:hidden">
        <Image src={Arrow} width="18" height="18" alt="back" className="cursor-pointer" onClick={onArrowClick} />
        <div className="flex items-center justify-center gap-3 cursor-pointer" onClick={onNavClick}>
          <p className="mb-0 text-lg font-bold	text-black">{lecture_name}</p>
          <Image src={nav} alt="navicon" />
        </div>
      </div>
    </>
  );
};

export default MobileNavOpener;
