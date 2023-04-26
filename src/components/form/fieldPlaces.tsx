import { FormFieldProps } from "../../types/types";
import Label from "../ui/label";
import { Textarea } from "../ui/textarea";

const FieldPlaces = ({ city, updateCity }: FormFieldProps) => {
  return (
    <div className="flex max-w-[530px] flex-col gap-[6px]">
      <Label htmlFor="knownPlaces" className="w-fit font-medium">
        Znane miejsca
      </Label>
      <Textarea
        id="knownPlaces"
        name="knownPlaces"
        placeholder="Wpisz znane miejsca oddzielone przecinkami"
        value={city.known_places}
        onChange={(e) =>
          updateCity({
            known_places: e.currentTarget.value.split(","),
          })
        }
      />
    </div>
  );
};

export default FieldPlaces;
