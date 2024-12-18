export default function Textarea({
  htmlFor = "",
  textLabel = "",
  type = "",
  id = "",
  name = "",
  value = "",
  onChange,
}) {
  return (
    <div className="flex flex-col my-4">
      <label className="font-medium mb-1" htmlFor={htmlFor}>
        {textLabel}
      </label>
      <textarea
        className="mb-2 rounded-sm border p-4 border-gray-300 h-40"
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}
