import { Logs } from '/imports/api/logs'

export const log = (establishmentId, description) =>
{
   return Meteor.call('log', establishmentId, description)
}
