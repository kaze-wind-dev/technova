import type { RecruitInfoItem } from "@/libs/utiles";
type Props = {
  item: RecruitInfoItem;
};

const RecruitTableRow = ({ item }: Props) => {
  return (
    <tr className="border-b border-solid border-gray">
      <th className="font-bold leading-loose tracking-wider w-[100px] text-left py-[1.25em] whitespace-pre-wrap">
        {item.name}
      </th>
      <td className="font-bold leading-loose tracking-wider text-left pl-[1.25em] py-[1.25em] whitespace-pre-wrap">
        {item.content}
      </td>
    </tr>
  );
};

export default RecruitTableRow;
