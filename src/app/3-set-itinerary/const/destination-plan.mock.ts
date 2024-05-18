import { IDestinationPlanDay } from "../interfaces/i-destinations";

export const DESTINATION_PLAN_MOCK: IDestinationPlanDay[] = [
  {
    DayNumber: "1",
    Date: "05/29/2015",
    Destinations: [
      {
        ID: 1,
        Name: "Mt. Bromo",
        EstimatedTime: "5 Hours",
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
        Name: "Mt. Bromo",
        EstimatedTime: "5 Hours",
        SubDestinations: [

        ]
      },
    ]
  },

]
