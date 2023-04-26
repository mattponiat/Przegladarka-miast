import { FormFieldProps } from "../../types/types";
import Label from "../ui/label";
import { Textarea } from "../ui/textarea";

const FieldLink = ({ city, updateCity }: FormFieldProps) => {
  return (
    <div className="flex max-w-[530px] flex-col gap-[6px]">
      <Label htmlFor="links" className="w-fit font-medium">
        Interesujące linki
      </Label>
      <Textarea
        id="links"
        placeholder="Wpisz interesujące linki oddzielone przecinkami"
        value={city.links}
        onChange={(e) =>
          updateCity({ links: e.currentTarget.value.split(",") })
        }
      />
    </div>
  );
};

export default FieldLink;
