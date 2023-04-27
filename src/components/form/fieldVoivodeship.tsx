import { FormFieldProps } from "../../types/types";
import Label from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { allVoivodeships } from "../../data/allVoivodeships";
import { ControllerRenderProps } from "react-hook-form";

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
    "voivodeship"
  >;
} & FormFieldProps;

const FieldVoivodeship = ({ field, errors }: Props) => {
  return (
    <div className="flex max-w-[287px] flex-col gap-[6px]">
      <Label htmlFor="voivodeship" className="w-fit font-medium">
        Województwo
      </Label>
      <Select
        defaultValue={
          allVoivodeships.filter((voivodeship) => voivodeship === field.value)
            ? field.value
            : ""
        }
        onValueChange={field.onChange}
        name="voivodeship"
      >
        <SelectTrigger
          data-testid="SelectVoivodeshipList2"
          className={field.value === "" ? "text-slate-400" : "text-slate-900"}
          id="voivodeship"
          name="voivodeship"
        >
          <SelectValue placeholder="Wybierz województwo" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="" disabled hidden>
            Wybierz województwo
          </SelectItem>
          {allVoivodeships.map((voivodeship) => (
            <SelectItem
              data-testid="SelectVoivodeship2"
              key={voivodeship}
              value={voivodeship}
            >
              {voivodeship}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <p className="text-sm text-muted-foreground">
        {errors.voivodeship?.message}
      </p>
    </div>
  );
};

export default FieldVoivodeship;
