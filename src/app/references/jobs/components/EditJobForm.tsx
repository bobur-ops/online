import CustomModal from "@/components/ui/CusModal/CusModal";
import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";
import { JobType } from "./JobsTable";
import { zodResolver } from "@hookform/resolvers/zod";
import CusInput from "@/components/ui/CusInput";
import CusSelect from "@/components/ui/CusSelect";
import { IoIosCheckmark } from "react-icons/io";
import { twMerge } from "tailwind-merge";
import FancyButton from "@/components/ui/FancyButton";

interface EditJobInterface {
  open: boolean;
  onClose: () => void;
  mobile?: boolean;
  jobDefault: JobType | null;
}

const schema = z.object({
  name: z.string().min(1, "Необходимо указать название"),
  stage: z.string().min(1, "Необходимо указать название"),
  comment: z.string(),
  period: z.string(),
  tarrif: z.string(),
  isActive: z.boolean(),
  isRegions: z.boolean(),
  isTelegramma: z.boolean(),
});

type FormData = z.infer<typeof schema>;

const EditJobForm = ({
  open,
  onClose,
  mobile,
  jobDefault,
}: EditJobInterface) => {
  const { control, formState, handleSubmit, setValue } = useForm<FormData>({
    mode: "onSubmit",
    defaultValues: {
      ...jobDefault,
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CustomModal open={open} onClose={onClose}>
      <div className="w-full max-w-[500px] p-5 m-auto bg-white rounded-md flex flex-col">
        <div className="text-[28px] mb-6">Редактирование</div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-[15px]">
          <div className="flex justify-between items-center">
            <div className="">Название</div>
            <Controller
              control={control}
              name="name"
              render={({ field }) => (
                <CusInput
                  {...field}
                  placeholder="Введите название"
                  classes={{ root: "!h-[28px]" }}
                />
              )}
            />
          </div>
          <div className="flex justify-between items-center">
            <div className="">Этап</div>
            <Controller
              control={control}
              name="stage"
              render={({ field }) => (
                <CusSelect
                  {...field}
                  classes={{ root: "!h-[28px] !bg-white" }}
                  options={[{ label: "Осмотр", value: "Осмотр" }]}
                />
              )}
            />
          </div>
          <div className="flex justify-between">
            <div className="">Комментарий</div>
            <Controller
              control={control}
              name="comment"
              render={({ field }) => (
                <textarea
                  {...field}
                  className="max-w-[250px] w-full border rounded-lg p-2 text-sm min-h-[112px]"
                />
              )}
            />
          </div>
          <div className="flex justify-between">
            <div className="">Продолжительность:</div>
            <Controller
              control={control}
              name="period"
              render={({ field }) => (
                <CusInput
                  {...field}
                  placeholder="Введите продолжительность"
                  classes={{ root: "!h-[28px]" }}
                  props={{ input: { type: "number" } }}
                />
              )}
            />
          </div>
          <div className="flex justify-between">
            <div className="">Тариф:</div>
            <Controller
              control={control}
              name="tarrif"
              render={({ field }) => (
                <CusInput
                  {...field}
                  placeholder="Введите продолжительность"
                  classes={{ root: "!h-[28px]" }}
                  props={{ input: { type: "number" } }}
                />
              )}
            />
          </div>
          <div className="flex justify-between items-center">
            <div className="">Активность:</div>
            <div className="w-[250px]">
              <Controller
                control={control}
                name="isActive"
                render={({ field }) => {
                  return (
                    <div
                      className={twMerge(
                        "flex items-center justify-center w-[30px] h-[30px] rounded-full bg-[#0C77F8] cursor-pointer",
                        !field.value && "bg-transparent border"
                      )}
                      onClick={() => field.onChange(!field.value)}
                    >
                      <IoIosCheckmark color="white" />
                    </div>
                  );
                }}
              />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="">По области:</div>
            <div className="w-[250px]">
              <Controller
                control={control}
                name="isRegions"
                render={({ field }) => {
                  return (
                    <div
                      className={twMerge(
                        "flex items-center justify-center w-[30px] h-[30px] rounded-full bg-[#0C77F8] cursor-pointer",
                        !field.value && "bg-transparent border"
                      )}
                      onClick={() => field.onChange(!field.value)}
                    >
                      <IoIosCheckmark color="white" />
                    </div>
                  );
                }}
              />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="">Телеграмма:</div>
            <div className="w-[250px]">
              <Controller
                control={control}
                name="isTelegramma"
                render={({ field }) => {
                  return (
                    <div
                      className={twMerge(
                        "flex items-center justify-center w-[30px] h-[30px] rounded-full bg-[#0C77F8] cursor-pointer",
                        !field.value && "bg-transparent border"
                      )}
                      onClick={() => field.onChange(!field.value)}
                    >
                      <IoIosCheckmark color="white" />
                    </div>
                  );
                }}
              />
            </div>
          </div>
          <FancyButton className="mx-auto">Подтвердить</FancyButton>
        </form>
      </div>
    </CustomModal>
  );
};

export default EditJobForm;
