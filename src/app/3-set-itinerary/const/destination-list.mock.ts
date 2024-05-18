import { IDestination } from "../interfaces/i-destinations";


export const DESTINATION_LIST_MOCK: IDestination[] = [
  {
    ID: 1,
    Name: "Mt. Bromo",
    EstimatedTime: "5 Hours",
    SubDestinations: [

    ]
  },
  {
    ID: 2,
    Name: "Batu City",
    EstimatedTime: "5 Hours",
    SubDestinations: [
      {
        Name: "Wzięcie udziału w test123"
      },
      {
        Name: "Komora hiperbaryczna"
      }
    ]
  },
];

