export interface LoveTokenData {
  createdBy: {
    userName: string;
    userId: string;
  };
  labels: string[];
  phrase: string;
  creationDate: Date;
  tokenNumber: number;
}
