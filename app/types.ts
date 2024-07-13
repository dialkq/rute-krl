export interface Station {
    id: string;
    name: string;
  }
  
  export interface Schedule {
    id: string;
    stationId: string;
    trainId: string;
    line: string;
    route: string;
    color: string;
    destination: string;
    timeEstimated: string;
    destinationTime: string;
  }
  