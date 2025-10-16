import { Arg, Mutation, Query, Resolver } from "type-graphql";
import { categoryData } from "../db/category-data.js";
import { CreateCategoryInput } from "../dtos/inputs/create-category-input.js";
import { Category } from "../dtos/models/category-model.js";

@Resolver(() => Category)
export class CategoriesResolver {

  @Query(() => [Category])
  async categories(): Promise<Category[]> {
    return categoryData;
  }

  @Mutation(() => Category)
  async addCategory(
    @Arg("data", () => CreateCategoryInput) data: CreateCategoryInput,
  ): Promise<Category> {
    const id: any = Date.now().toString() + "-" + Math.random().toString(36).slice(2);

    const newCategory = new Category(
      id,
      data.name,
      data.description,
    );

    categoryData.push(newCategory);
    return newCategory;
  }
}
