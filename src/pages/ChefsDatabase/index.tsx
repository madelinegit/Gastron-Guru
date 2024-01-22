import SwitchInput from "../../components/Inputs/SwitchInput";
import CheckboxInput from "../../components/Inputs/CheckboxInput";
import {
  useWindowResize,
  useSwitchToggle,
  useCheckboxToggle,
} from "../../utils/helpers";
import SearchBar from "../../components/SearchBar";
import ChefCards from "../../components/ChefCards";

const ChefsDatabase = () => {
  const { isSwitchChecked, setIsSwitchChecked } = useWindowResize(true);
  const { isOverrideActive, handleSwitchToggle } = useSwitchToggle(
    isSwitchChecked,
    setIsSwitchChecked
  );
  const { renderCheckbox } = useWindowResize(true);
  const { detailsShowing, handleCheckboxToggle } = useCheckboxToggle();

  return (
    <>
      <SwitchInput
        isChecked={(isSwitchChecked && !isOverrideActive) || isOverrideActive}
        onToggle={handleSwitchToggle}
      />
      <SearchBar />
      <ChefCards chefData={[]} />

      {renderCheckbox && (
        <CheckboxInput
          onCheckboxToggle={handleCheckboxToggle}
          isChecked={detailsShowing}
        />
      )}
      {(isSwitchChecked || isOverrideActive || detailsShowing) && (
        <section>
          {(isSwitchChecked || isOverrideActive) && <h1>Map</h1>}
          {renderCheckbox && detailsShowing && <h1>Details</h1>}
        </section>
      )}
    </>
  );
};

export default ChefsDatabase;
