import styles from "./CityList.module.css";
import { ICity } from "../types/city.ts";
import Spinner from "./Spinner.tsx";
import CityItem from "./CityItem.tsx";
import Message from "./Message.tsx";

type CityListProps = {
  cities: ICity[];
  isLoading: boolean;
};

export default function CityList({ cities, isLoading }: CityListProps) {
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message
        message={"Add your first city by clicking on a city on the map"}
      />
    );
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem key={city.id} {...city} />
      ))}
    </ul>
  );
}
