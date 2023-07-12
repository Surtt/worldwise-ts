import Sidebar from "../components/Sidebar.tsx";
import styles from "./AppLayout.module.css";
import Map from "../components/Map.tsx";
export default function AppLayout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
    </div>
  );
}
