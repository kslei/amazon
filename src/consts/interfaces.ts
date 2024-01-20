export interface Account {
  accountId: number,
  email: string,
  authToken: string,
  creationDate: string
}

export interface Profile {
  profileId: number,
  accountId: number,
  country: string,
  marketplace: string
}

export interface Compaign {
  compaignId: number,
  profileId: number,
  cliks: string,
  cost: number,
  date: string
}