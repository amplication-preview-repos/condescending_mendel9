/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StatisticWhereUniqueInput } from "./StatisticWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { StatisticUpdateInput } from "./StatisticUpdateInput";

@ArgsType()
class UpdateStatisticArgs {
  @ApiProperty({
    required: true,
    type: () => StatisticWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => StatisticWhereUniqueInput)
  @Field(() => StatisticWhereUniqueInput, { nullable: false })
  where!: StatisticWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => StatisticUpdateInput,
  })
  @ValidateNested()
  @Type(() => StatisticUpdateInput)
  @Field(() => StatisticUpdateInput, { nullable: false })
  data!: StatisticUpdateInput;
}

export { UpdateStatisticArgs as UpdateStatisticArgs };
