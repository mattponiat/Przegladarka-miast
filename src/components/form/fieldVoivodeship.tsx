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

const FieldVoivodeship = ({ city, updateCity }: FormFieldProps) => {
  return (
    <div className="flex max-w-[287px] flex-col gap-[6px]">
      <Label htmlFor="voivodeship" className="w-fit font-medium">
        Województwo
      </Label>
      <Select
        onValueChange={(value) => updateCity({ voivodeship: value })}
        defaultValue={
          allVoivodeships.filter(
            (voivodeship) => voivodeship === city.voivodeship
          )
            ? city.voivodeship
            : ""
        }
        name="voivodeship"
      >
        <SelectTrigger
          className={
            city.voivodeship === "" ? "text-slate-400" : "text-slate-900"
          }
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
            <SelectItem key={voivodeship} value={voivodeship}>
              {voivodeship}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export default FieldVoivodeship;
