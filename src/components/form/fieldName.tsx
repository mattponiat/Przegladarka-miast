import { FormFieldProps } from "../../types/types";
import Input from "../ui/input";
import Label from "../ui/label";

const FieldName = ({ city, updateCity }: FormFieldProps) => {
  return (
    <div className="flex max-w-[287px] flex-col gap-[6px]">
      <Label htmlFor="cityName" className="w-fit font-medium">
        Nazwa miasta
      </Label>
      <Input
        type="text"
        id="cityName"
        name="cityName"
        placeholder="Wpisz nazwę miasta"
        value={city.name}
        onChange={(e) => {
          updateCity({ name: e.currentTarget.value });
        }}
      />
    </div>
  );
};

export default FieldName;
