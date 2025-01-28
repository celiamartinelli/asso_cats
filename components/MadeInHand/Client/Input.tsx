export default function Input({
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
      <input
        className="mb-2 p-1 h-10 rounded-sm border border-gray-300"
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}
