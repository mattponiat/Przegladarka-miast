import { FormFieldProps } from "../../types/types";
import Label from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const allVoivodeships = [
  "Dolnośląskie",
  "Kujawsko-Pomorskie",
  "Lubelskie",
  "Lubuskie",
  "Łódzkie",
  "Mazowieckie",
  "Opolskie",
  "Podkarpackie",
  "Podlaskie",
  "Pomorskie",
  "Śląskie",
  "Świętokrzyskie",
  "Warmińsko-Mazurskie",
  "Wielkopolskie",
  "Zachodniopomorskie",
];

const FieldVoivodeship = ({ city, updateCity }: FormFieldProps) => {
  return (
    <div className="flex max-w-[287px] flex-col gap-[6px]">
      <Label htmlFor="voivodeship" className="w-fit font-medium">
        Województwo
      </Label>
      <Select onValueChange={(value) => updateCity({ voivodeship: value })}>
        <SelectTrigger
          className={
            city?.voivodeship === "" ? "text-slate-400" : "text-slate-900"
          }
          id="voivodeship"
        >
          <SelectValue placeholder="Wybierz województwo" />
        </SelectTrigger>
        <SelectContent>
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
