import CuisinesDropdown from "../../CuisinesDropdown";
import FormWrapper from "../FormWrapper";

type SpecialityAndCuisinesProps = {
  cuisines: string[];
  // specialities: string[];
};

type SpecialityAndCuisinesFormProps = SpecialityAndCuisinesProps & {
  onChange: (fields: Partial<SpecialityAndCuisinesProps>) => void;
};

const SpecialityAndCuisinesPage = ({
  cuisines,
  onChange,
}: SpecialityAndCuisinesFormProps) => {
  return (
    <FormWrapper title="Select your Speciality">
      <CuisinesDropdown
        specialClassName="full-input"
        cuisines={cuisines}
        onChange={onChange}
      />
    </FormWrapper>
  );
};

export default SpecialityAndCuisinesPage;
