import { accounts } from '../consts/accounts';
import { profiles } from '../consts/profiles';
import { compaigns } from '../consts/compaigns';
import { pagination } from '../utils/functionsAPI';
import { Account } from '../consts/interfaces';
import { Profile } from '../consts/interfaces';
import { Compaign } from '../consts/interfaces';

export function getAllAccounts (limit: number, page: number) {
  const accountsPage: Account[] = pagination(accounts, limit, page)
  const totalCount = accounts.length
  const data = {row: accountsPage, totalCount: totalCount}
  return data
}

export function getAllProfile (limit: number, page: number) {
  const profilesPage: Profile[] = pagination(profiles, limit, page)
  const totalCount = profiles.length
  const data = {row: profilesPage, totalCount: totalCount}
  return data
}

export function getOneProfile (limit: number, page: number, accountId: number) {
  const profilesOne: Profile[] = profiles.filter(item => item.accountId === accountId)
  const profilesPage: Profile[] = pagination(profilesOne, limit, page)
  const totalCount = profilesOne.length
  const data = {row: profilesPage, totalCount: totalCount}
  return data
}

export function getAllCompaign (limit: number, page: number) {
  const compaignsPage: Compaign[] = pagination(compaigns, limit, page)
  const totalCount = compaigns.length
  const data = { row: compaignsPage, totalCount: totalCount }
  return data
}

export function getOneCompaign (limit: number, page: number, profileId: number) {
  const compaignsOne: Compaign[] = compaigns.filter(item => item.profileId === profileId)
  const compaignsPage: Compaign[] = pagination(compaignsOne, limit, page)
  const totalCount = compaignsOne.length
  const data = { row: compaignsPage, totalCount: totalCount }
  return data
}