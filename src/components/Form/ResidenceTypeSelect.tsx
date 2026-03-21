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
              className="flex h-14 w-full items-center justify-between rounded-lg border border-slate-300 bg-slate-50 px-4 py-3 text-base transition-colors focus:border-secondary focus:bg-white focus:outline-none focus:ring-4 focus:ring-secondary/20"
            >
              <SelectValue placeholder={field.value || "Selecione o tipo de imóvel"} />
            </SelectTrigger>

            <SelectContent
              side="bottom"
              position="item-aligned"
              align="center"
              className="rounded-xl border border-slate-200 bg-white px-1 py-2 shadow-lg"
            >
              <SelectGroup>
                <SelectLabel className="font-bold text-primary">
                  Residência
                </SelectLabel>

                {residenceCategories.residencial.map((category) => (
                  <SelectItem
                    key={category.value}
                    className="cursor-pointer rounded-md py-2 px-3 text-slate-700 focus:bg-slate-100 focus:text-slate-900 focus:outline-none"
                    value={category.value}
                  >
                    {category.label}
                  </SelectItem>
                ))}
              </SelectGroup>

              <SelectSeparator className="my-2 h-px bg-slate-200" />

              <SelectGroup>
                <SelectLabel className="font-bold text-primary">
                  Comércio e Indústrias
                </SelectLabel>

                {residenceCategories.comercial.map((category) => (
                  <SelectItem
                    key={category.value}
                    className="cursor-pointer rounded-md py-2 px-3 text-slate-700 focus:bg-slate-100 focus:text-slate-900 focus:outline-none"
                    value={category.value}
                  >
                    {category.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <span className="absolute -bottom-6 left-0 w-full text-sm font-medium text-error">
            {errors.residenceType?.message}
          </span>
        </div>
      )}
    />
  );
};
