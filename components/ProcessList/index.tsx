import { ProcessContent } from "@/libs/utiles";
import ProcessItem from "../ProcessItem";

type Props = {
  process: ProcessContent[];
};

const ProcessList = ({ process }: Props) => {
  return (
    <ol>
      {process.map((item, index) => {
        return (<ProcessItem data={item} index={index+=1} key={item.id} />);
      })}
    </ol>
  );
};

export default ProcessList;
