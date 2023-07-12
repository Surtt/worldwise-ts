import styles from "./CountryList.module.css";
import { ICity } from "../types/city.ts";
import Spinner from "./Spinner.tsx";
import CountryItem from "./CountryItem.tsx";
import Message from "./Message.tsx";

type CityListProps = {
  cities: ICity[];
  isLoading: boolean;
};

export default function CountryList({ cities, isLoading }: CityListProps) {
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message
        message={"Add your first city by clicking on a city on the map"}
      />
    );

  const countries: string[] = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country)) {
      return [...arr, { country: city.country, emoji: city.emoji }];
    } else {
      return arr;
    }
  }, []);

  return (
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem key={country} {...country} />
      ))}
    </ul>
  );
}
