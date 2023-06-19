export enum MessageType {
  Connection = 'connection',
  Bid = 'bid',
  RideDeployed = 'ride_deployed',
  RideArranged = 'ride_arranged',
  RideRequested = 'ride_requested',
  RideCanceled = 'ride_canceled',
  RideTimeout = 'ride_timeout',
  ReturnDriverLocation = 'return_driver_location',
  SubscribeToDriverLocation = 'subscribe_to_driver_location',
  UnsubscribeToDriverLocation = 'unsubscribe_to_driver_location',
}
