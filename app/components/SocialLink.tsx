export const SocialLink: React.FC<JSX.IntrinsicElements["a"]> = (props) => {
  if (!props.href) return <></>;
  return (
    <li className="block mr-5 text-3xl">
      <a className="block hover:text-slate-200" target="_blank" {...props} />
    </li>
  );
};
