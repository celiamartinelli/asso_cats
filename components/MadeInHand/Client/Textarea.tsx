import React from "react";

type TextareaProps = {
  htmlFor?: string;
  textLabel?: string;
  type?: string;
  id?: string;
  name?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLTextAreaElement>;
};

export default function Textarea({
  htmlFor = "",
  textLabel = "",
  type = "",
  id = "",
  name = "",
  value = "",
  onChange,
}: TextareaProps) {
  return (
    <div className="flex flex-col my-4">
      <label className="font-medium mb-1" htmlFor={htmlFor}>
        {textLabel}
      </label>
      <textarea
        className="mb-2 rounded-sm border p-4 border-gray-300 h-40 dark:bg-zinc-900"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}
