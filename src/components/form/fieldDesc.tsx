import { FormFieldProps } from "../../types/types";
import Label from "../ui/label";
import { Textarea } from "../ui/textarea";

const FieldDesc = ({ city, updateCity }: FormFieldProps) => {
  return (
    <div className="flex max-w-[530px] flex-col gap-[6px]">
      <Label htmlFor="desc" className="w-fit font-medium">
        Opis miasta
      </Label>
      <Textarea
        id="desc"
        name="desc"
        placeholder="Wpisz opis miasta"
        value={city.description}
        onChange={(e) => updateCity({ description: e.currentTarget.value })}
      />
    </div>
  );
};

export default FieldDesc;
