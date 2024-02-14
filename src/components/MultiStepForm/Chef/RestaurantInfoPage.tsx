import Input from "../Input";
import TextArea from "../TextArea";
import "../MultiStepForm.scss";
import FormWrapper from "../FormWrapper";

type RestaurantInfoProps = {
  restaurantName: string;
  restaurantDescription: string;
};

type RestaurantInfoFormProps = RestaurantInfoProps & {
  onChange: (fields: Partial<RestaurantInfoProps>) => void;
};

const RestaurantInfoPage = ({
  restaurantName,
  restaurantDescription,
  onChange,
}: RestaurantInfoFormProps) => {
  return (
    <FormWrapper title="What do you provide?">
      <Input
        label="What Name do you want to operate under"
        type="text"
        id="restaurantName"
        className="full-input"
        autoFocus={false}
        value={restaurantName}
        handleChange={(e) => onChange({ restaurantName: e.target.value })}
      />
      <TextArea
        label="Service Description"
        className="textarea description-textarea"
        value={restaurantDescription}
        handleChange={(e) =>
          onChange({ restaurantDescription: e.target.value })
        }
      />
    </FormWrapper>
  );
};

export default RestaurantInfoPage;
