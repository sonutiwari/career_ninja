import { Connection } from "mongoose";
import db from "../configs/dbConfig";

export default class SearchService {
  _createQuery = (searchQuery: string) => {
    const sampleRecord = {
      name: "Siege of Raventree",
      year: "300",
      battle_number: "37",
      attacker_king: "Joffrey/Tommen Baratheon",
      defender_king: "Robb Stark",
      attacker_1: "Bracken",
      attacker_2: "Lannister",
      attacker_3: "",
      attacker_4: "",
      defender_1: "Blackwood",
      defender_2: "",
      defender_3: "",
      defender_4: "",
      attacker_outcome: "win",
      battle_type: "siege",
      major_death: "0",
      major_capture: "1",
      attacker_size: "1500",
      defender_size: "",
      attacker_commander: "Jonos Bracken, Jaime Lannister",
      defender_commander: "Tytos Blackwood",
      summer: "0",
      location: "Raventree",
      region: "The Riverlands",
      note: "",
    };

    const keys = Object.keys(sampleRecord);
    const queryArray = keys.map((key) => ({
      [key]: new RegExp(searchQuery, "i"),
    }));
    return queryArray;
  };

  /**
   * TODO: Since we are doing search on multiple criteria,
   * We shall define the order in which we want our search to be displayed.
   * For now I am not implementing that, due to time constraints but on possible
   * solution is to simple sort the results based on name or other fields in order
   * of importance.
   * @param searchQuery {string} Search query.
   */
  searchInDB = async (searchQuery: string): Promise<any[]> => {
    const searchQueryArray = this._createQuery(searchQuery);
    try {
      const data = await db
        .collection("battle")
        .find({ $or: searchQueryArray })
        .toArray();
      return await Promise.resolve(data);
    } catch (err) {
      return await Promise.reject(err);
    }
    //   .finally(() => db.close());
  };
}
