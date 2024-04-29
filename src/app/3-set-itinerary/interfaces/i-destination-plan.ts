export interface IDestinationPlanDay {
  DayNumber: string;
  Date: string;
  Destinations: IDestination[];
}

export interface IDestination {
  ID: number;
  Name: string;
  SubDestinations: ISubDestination[]
}

export interface ISubDestination {
  Name: string;
}

