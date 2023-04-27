import { ControllerRenderProps } from "react-hook-form";
import { FormFieldProps } from "../../types/types";
import Label from "../ui/label";
import { Textarea } from "../ui/textarea";

type Props = {
  field: ControllerRenderProps<
    {
      name: string;
      voivodeship: string;
      picture_url: string;
      description: string;
      links: string;
      known_places: string;
    },
    "known_places"
  >;
} & FormFieldProps;

const FieldPlaces = ({ field, errors }: Props) => {
  return (
    <div className="flex max-w-[530px] flex-col gap-[6px]">
      <Label htmlFor="known_places" className="w-fit font-medium">
        Znane miejsca
      </Label>
      <Textarea
        data-testid="KnownPlacesInput"
        id="known_places"
        name="known_places"
        placeholder="Wpisz znane miejsca oddzielone przecinkami"
        value={field.value}
        onChange={field.onChange}
      />
      <p className="text-sm text-muted-foreground">
        {errors.known_places?.message}
      </p>
    </div>
  );
};

export default FieldPlaces;
