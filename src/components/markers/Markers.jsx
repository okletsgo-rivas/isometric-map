import Headquarters from "./Headquarters";
import data from "../../data/markers.json";
import Flag from "./Flag";
import Stronghold from "./Stronghold";

function Markers() {
  const locations = data.list.map((itm) => {
    switch (itm.type) {
      case "hq":
        return <Headquarters data={itm} />;
      case "flag":
        return <Flag data={itm} />;
      case "stronghold":
        return <Stronghold data={itm} />;
    }
  });

  return locations;
}

export default Markers;
