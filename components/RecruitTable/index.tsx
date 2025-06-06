import type { RecruitInfoItem } from "@/libs/utiles";
import RecruitTableRow from "../RecruitTableRow";
type Props = {
  recruitInfo: RecruitInfoItem[];
};

const RecruitTable = ({ recruitInfo }: Props) => {
  return (
    <table className="w-full">
      <tbody>
        {recruitInfo.map((item) => {
          return <RecruitTableRow item={item} key={item.name} />;
        })}
      </tbody>
    </table>
  );
};

export default RecruitTable;
