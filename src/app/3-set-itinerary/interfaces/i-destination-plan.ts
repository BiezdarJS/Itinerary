export interface IDestinationPlanDay {
  DayNumber: string;
  Date: string;
  Destinations: IDestination[];
}

export interface IDestination {
  Name: string;
  SubDestinations: ISubDestination[]
}

export interface ISubDestination {
  Name: string;
}

