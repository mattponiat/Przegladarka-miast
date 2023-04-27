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
    "picture_url"
  >;
} & FormFieldProps;

const FieldImage = ({ field, errors }: Props) => {
  return (
    <div className="flex max-w-[287px] flex-col gap-[6px]">
      <Label htmlFor="picture_url" className="w-fit font-medium">
        Zdjęcie
      </Label>
      <Input
        type="text"
        id="picture_url"
        name="picture_url"
        placeholder="Wprowadź URL do zdjęcia miasta"
        value={field.value}
        onChange={field.onChange}
      />
      <p className="text-sm text-muted-foreground">
        {errors.picture_url?.message}
      </p>
    </div>
  );
};

export default FieldImage;
