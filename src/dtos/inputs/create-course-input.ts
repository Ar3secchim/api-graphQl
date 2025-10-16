import { Field, ID, InputType } from "type-graphql";

@InputType()
export class CreateCourseInput {
  @Field(() => String)
  name!: string;

  @Field(() => String)
  description!: string;

  @Field(() => ID)
  categoryId!: typeof ID;
}
