import { IDestinationPlanDay } from "./i-destination-plan";

export const DESTINATION_PLAN_MOCK: IDestinationPlanDay[] = [
  {
    DayNumber: "1",
    Date: "05/29/2015",
    Destinations: [
      {
        Name: "Mt. Bromo",
        SubDestinations: [
          {
            Name: "Robienie zdjęć"
          },
          {
            Name: "Pójście wieczorem na event z Fb"
          }
        ]
      },
      {
        Name: "Batu City",
        SubDestinations: [
          {
            Name: "Robienie zdjęć"
          },
          {
            Name: "Pójście wieczorem na event z Fb"
          }
        ]
      }
    ]
  },

]
