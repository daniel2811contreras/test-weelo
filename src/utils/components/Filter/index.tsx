import {
  faEllipsisV,
  faFilter,
  faMoon,
  faSearch,
  faSun,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CriptoContext } from "@src/contexts/cripto";
import { getColor } from "@src/utils/function/assets/Colors";
import { useContext, useState } from "react";
import {
  FloatingMenu,
  MainButton,
  ChildButton,
  Directions,
} from "react-floating-button-menu";
import { FilterStyle } from "./style";

const Filter = () => {
  //* context
  const { isDark, setIsDark } = useContext(CriptoContext);
  //* state
  const [isOpen, setIsOpen] = useState<boolean>(false);
  //* function
  const changeTemplate = () => {
    const mode = localStorage.getItem("Color");
    mode !== "dark"
      ? localStorage.setItem("Color", "dark")
      : localStorage.setItem("Color", "default");
    setIsDark(!isDark);
  };
  return (
    <div className={FilterStyle}>
      <FloatingMenu
        slideSpeed={500}
        direction={Directions.Up}
        spacing={8}
        isOpen={isOpen}
      >
        <MainButton
          data-testid="MainButton"
          iconResting={
            <FontAwesomeIcon
              icon={faEllipsisV}
              color={getColor().backgroundTree}
            />
          }
          iconActive={
            <FontAwesomeIcon icon={faTimes} color={getColor().backgroundTree} />
          }
          background={getColor().secon}
          onClick={() => setIsOpen(!isOpen)}
          size={56}
        />
        <ChildButton
          data-testid="faSearch"
          icon={
            <FontAwesomeIcon
              icon={faSearch}
              color={getColor().backgroundTree}
            />
          }
          background={getColor().secon}
          size={40}
          onClick={() => console.log("open search")}
        />
        <ChildButton
          data-testid="faFilter"
          icon={
            <FontAwesomeIcon
              icon={faFilter}
              color={getColor().backgroundTree}
            />
          }
          background={getColor().secon}
          size={40}
          onClick={() => console.log("opden dolar")}
        />
        <ChildButton
          data-testid="changeTemplate"
          icon={
            <FontAwesomeIcon
              icon={isDark ? faSun : faMoon}
              color={getColor().backgroundTree}
            />
          }
          background={getColor().secon}
          size={40}
          onClick={() => changeTemplate()}
        />
      </FloatingMenu>
    </div>
  );
};
export default Filter;
