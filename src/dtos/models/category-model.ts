import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export class Category {
  constructor(id: typeof ID, name: string, description?: string)
  {
    this.id = id;
    this.name = name!;
    this.description = description!;
  }

  @Field(() => ID)
  id!: typeof ID;

  @Field(() => String)
  name!: string;

  @Field(() => String , { nullable: true })
  description?: string;
}
