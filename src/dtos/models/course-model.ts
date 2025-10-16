import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class Course {
  constructor(
    id: typeof ID,
    name: string,
    description: string,
  ) {
    this.id = id!;
    this.name = name!;
    this.description = description;
  }

  @Field(() => ID)
  id: typeof ID;

  @Field(() => String)
  name: string;

  @Field(() => String)
  description: string;
}
