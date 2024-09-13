import { TechIcon } from "./TechIcon";

export const ToolboxItems = ({
  items,
}: {
  items: { title: string; iconType: React.ElementType }[];
}) => {
  return (
    <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="flex flex-none">
        {items.map((tool) => (
          <div
            key={tool.title}
            className="inline-flex gap-4 px-3 py-2 outline outline-2 outline-white/10 rounded-lg">
            <span>
              <TechIcon component={tool.iconType} />
            </span>
            <span>{tool.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
