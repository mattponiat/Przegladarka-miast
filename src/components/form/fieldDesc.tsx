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
    "description"
  >;
} & FormFieldProps;

const FieldDesc = ({ field, errors }: Props) => {
  return (
    <div className="flex max-w-[530px] flex-col gap-[6px]">
      <Label htmlFor="desc" className="w-fit font-medium">
        Opis miasta
      </Label>
      <Textarea
        id="desc"
        name="desc"
        placeholder="Wpisz opis miasta"
        value={field.value}
        onChange={field.onChange}
      />
      <p className="text-sm text-muted-foreground">
        {errors.description?.message}
      </p>
    </div>
  );
};

export default FieldDesc;
