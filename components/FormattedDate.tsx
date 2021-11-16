import { parseISO, format } from 'date-fns';

interface ownProps {
  date: Date;
}

const CustomDate: React.FC<ownProps> = ({ date }: { date: Date }) => {
  const dateString = date.toISOString();
  const dateIso = parseISO(dateString);
  return (
    <time dateTime={dateString}>{format(dateIso, 'eeee d LLLL yyyy')}</time>
  );
};

export default CustomDate;
