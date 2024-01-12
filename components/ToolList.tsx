export interface ToolListProps {
  tools: string[];
}

export const ToolList: React.FC<ToolListProps> = ({ tools }) => (
  <ul className="mt-2 flex flex-wrap capitalize">
    {tools.map((tool) => (
      <li className="mr-1.5 mt-2" key={tool}>
        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
          {tool}
        </div>
      </li>
    ))}
  </ul>
);
