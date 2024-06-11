import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { StatisticService } from "./statistic.service";
import { StatisticControllerBase } from "./base/statistic.controller.base";

@swagger.ApiTags("statistics")
@common.Controller("statistics")
export class StatisticController extends StatisticControllerBase {
  constructor(protected readonly service: StatisticService) {
    super(service);
  }
}
