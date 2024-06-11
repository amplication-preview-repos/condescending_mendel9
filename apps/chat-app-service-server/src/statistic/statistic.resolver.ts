import * as graphql from "@nestjs/graphql";
import { StatisticResolverBase } from "./base/statistic.resolver.base";
import { Statistic } from "./base/Statistic";
import { StatisticService } from "./statistic.service";

@graphql.Resolver(() => Statistic)
export class StatisticResolver extends StatisticResolverBase {
  constructor(protected readonly service: StatisticService) {
    super(service);
  }
}
