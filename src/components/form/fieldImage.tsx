import { FormFieldProps } from "../../types/types";
import Input from "../ui/input";
import Label from "../ui/label";

const FieldImage = ({ city, updateCity }: FormFieldProps) => {
  return (
    <div className="flex max-w-[287px] flex-col gap-[6px]">
      <Label htmlFor="image" className="w-fit font-medium">
        Zdjęcie
      </Label>
      <Input
        type="text"
        id="image"
        name="image"
        placeholder="Wprowadź URL do zdjęcia miasta"
        value={city.picture_url}
        onChange={(e) => {
          updateCity({ picture_url: e.currentTarget.value });
        }}
      />
    </div>
  );
};

export default FieldImage;
