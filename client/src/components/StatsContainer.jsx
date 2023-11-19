import { FaBuffer, FaBookReader, FaTrophy } from "react-icons/fa";
import Wrapper from "../assets/wrappers/StatsContainer";
import StatItem from "./StatItem";
const StatsContainer = ({ defaultStats }) => {
  const stats = [
    {
      title: "planned book reading",
      count: defaultStats?.planned || 0,
      icon: <FaBuffer />,
      color: "#FFCD4B",
      bcg: "#FFF8C9",
    },
    {
      title: "reading",
      count: defaultStats?.reading || 0,
      icon: <FaBookReader />,
      color: "#12486B",
      bcg: "#78D6C6",
    },
    {
      title: "books finished",
      count: defaultStats?.finished || 0,
      icon: <FaTrophy />,
      color: "#F875AA",
      bcg: "#FFDFDF",
    },
  ];
  return (
    <Wrapper>
      {stats.map((item) => {
        return <StatItem key={item.title} {...item} />;
      })}
    </Wrapper>
  );
};
export default StatsContainer;
