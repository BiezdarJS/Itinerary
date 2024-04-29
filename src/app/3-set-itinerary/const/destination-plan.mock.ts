import { IDestinationPlanDay } from "../interfaces/i-destination-plan";

export const DESTINATION_PLAN_MOCK: IDestinationPlanDay[] = [
  {
    DayNumber: "1",
    Date: "05/29/2015",
    Destinations: [
      {
        ID: 1,
        Name: "Mt. Bromo",
        SubDestinations: [
          {
            Name: "Wzięcie udziału w Runmagedon"
          },
          {
            Name: "Komora hiperbaryczna"
          }
        ]
      },
      {
        ID: 2,
        Name: "Batu City",
        SubDestinations: [
          {
            Name: "Robienie zdjęć"
          },
          {
            Name: "Pójście wieczorem na event z Fb"
          },
          {
            Name: "Odwiedzenie cafee'"
          }
        ]
      }
    ]
  },

]
