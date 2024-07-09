import React, { useEffect, useState } from "react";
import { hotelsCollection } from "../lib/controller";
import { DocumentData, QuerySnapshot, onSnapshot } from "firebase/firestore";
import { NewHotelType } from "../types/hotel";

function Card() {
  const [hotels, setHotels] = useState<NewHotelType[]>([]);

  useEffect(
    () =>
      onSnapshot(
        hotelsCollection,
        (snapshot: QuerySnapshot<DocumentData, DocumentData>) => {
          setHotels(
            snapshot.docs.map((doc) => {
              return {
                id: doc.id,
                ...doc.data(),
              };
            })
          );
        }
      ),
    []
  );

  console.log(hotels, "hotels");

  return (
    <div className="card">
      <h2 className="title">All Hotels</h2>
      {hotels && hotels.length ? (
        <div>
            {
                hotels?.map((hotel) => (
                ))
            }
        </div>
      )}
    </div>
  );
}

export default Card;
