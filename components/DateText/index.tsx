import { dateFormat } from "@/libs/utiles";
type Props = {
  date: string ;
  addClass?: string;
};

const DateText = ({ date, addClass }: Props) => {
  return (
    <span className={`font-sub font-bold text-small md:text-base ${addClass}`}>
      <time dateTime={dateFormat(date)}>{dateFormat(date)}</time>
    </span>
  );
};

export default DateText;
