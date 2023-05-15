export enum RideStatus {
  Requested = 'requested',
  Created = 'created',
  Deployed = 'deployed',
  BeforeStartTimeout = 'before_start_timeout',
  Started = 'started',
  BeforeEndTimeout = 'before_end_timeout',
  Ended = 'ended',
  Failed = 'failed',
}
