import { ControllerRenderProps } from "react-hook-form";
import { FormFieldProps } from "../../types/types";
import Input from "../ui/input";
import Label from "../ui/label";

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
    "name"
  >;
} & FormFieldProps;

const FieldName = ({ field, errors }: Props) => {
  return (
    <div className="flex max-w-[287px] flex-col gap-[6px]">
      <Label htmlFor="name" className="w-fit font-medium">
        Nazwa miasta
      </Label>
      <Input
        type="text"
        id="name"
        name="name"
        placeholder="Wpisz nazwę miasta"
        value={field.value}
        onChange={field.onChange}
        data-testid="NameInput"
      />
      <p className="text-sm text-muted-foreground">{errors.name?.message}</p>
    </div>
  );
};

export default FieldName;
