export interface IDestinationPlanDay {
  DayNumber: string;
  Date: string;
  Destinations: Destination[];
}

export interface Destination {
  Name: string;
  SubDestinations: ISubDestination[]
}

export interface ISubDestination {
  Name: string;
}

