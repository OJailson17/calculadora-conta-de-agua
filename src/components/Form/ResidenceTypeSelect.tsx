"use client";

import { Control, Controller, FieldErrors } from "react-hook-form";
import { z } from "zod";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { residenceCategories } from "@/utils/residenceCategories";
import { formSchema } from "./HomeForm";

type HomeFormSchema = z.infer<typeof formSchema>;

interface ResidenceTypeSelectProps {
  control: Control<HomeFormSchema>;
  errors: FieldErrors<HomeFormSchema>;
}

export const ResidenceTypeSelect = ({
  control,
  errors,
}: ResidenceTypeSelectProps) => {
  return (
    <Controller
      name="residenceType"
      control={control}
      render={({ field }) => (
        <div className="relative w-full max-w-96">
          <Select onValueChange={field.onChange} {...field}>
            <SelectTrigger
              style={errors.residenceType ? { borderColor: "red" } : {}}
              className="flex h-12 w-full items-center justify-between rounded-md border-2 border-black/70 px-2 py-3 focus:border-none focus:outline-none focus:ring-2 focus:ring-secondary"
            >
              <SelectValue placeholder={field.value || "Tipo de Imóvel"} />
            </SelectTrigger>

            <SelectContent
              side="bottom"
              position="item-aligned"
              align="center"
              className="rounded-md bg-zinc-100 px-0 py-2"
            >
              <SelectGroup>
                <SelectLabel className="font-bold text-primary">
                  Residência
                </SelectLabel>

                {residenceCategories.residencial.map((category) => (
                  <SelectItem
                    key={category.value}
                    className="focus:outline-none focus:ring-2 focus:ring-secondary"
                    value={category.value}
                  >
                    {category.label}
                  </SelectItem>
                ))}
              </SelectGroup>

              <SelectSeparator className="my-2 h-px bg-black" />

              <SelectGroup>
                <SelectLabel className="font-bold text-primary">
                  Comércio e Indústrias
                </SelectLabel>

                {residenceCategories.comercial.map((category) => (
                  <SelectItem
                    key={category.value}
                    className="focus:outline-none focus:ring-2 focus:ring-secondary"
                    value={category.value}
                  >
                    {category.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <span className="absolute -bottom-5 left-0 w-full text-sm text-error">
            {errors.residenceType?.message}
          </span>
        </div>
      )}
    />
  );
};
