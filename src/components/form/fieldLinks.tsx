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
    "links"
  >;
} & FormFieldProps;

const FieldLink = ({ field, errors }: Props) => {
  return (
    <div className="flex max-w-[530px] flex-col gap-[6px]">
      <Label htmlFor="links" className="w-fit font-medium">
        Interesujące linki
      </Label>
      <Textarea
        id="links"
        name="links"
        placeholder="Wpisz interesujące linki oddzielone przecinkami"
        value={field.value}
        onChange={field.onChange}
      />
      <p className="text-sm text-muted-foreground">{errors.links?.message}</p>
    </div>
  );
};

export default FieldLink;
