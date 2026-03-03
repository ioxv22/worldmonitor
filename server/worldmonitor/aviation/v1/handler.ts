import type { AviationServiceHandler } from '../../../../src/generated/server/globalmonitor/aviation/v1/service_server';

import { listAirportDelays } from './list-airport-delays';

export const aviationHandler: AviationServiceHandler = {
  listAirportDelays,
};
