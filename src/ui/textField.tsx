export type TextFieldProps = {
  type?: string;
  name: string;
  id: string | number;
  label: string;
  placeholder: string;
  className?: string;
};

const TextField: React.FC<TextFieldProps> = ({ type='string', name, id, label, placeholder, className }) => {
  return (
    <label
      key={id}
      htmlFor={name}
      className={`${className} flex flex-col text-sm gap-2 `}
    >
      {label}
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        className={`p-2 rounded placeholder:text-xs bg-slate-800 outline-none focus:border focus:border-slate-500`}
      />
    </label>
  );
};

export default TextField;
