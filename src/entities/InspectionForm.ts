import {
  Collection,
  Entity,
  ManyToOne,
  OneToMany,
  Property,
} from "@mikro-orm/core";
import { Field, InputType, ObjectType } from "type-graphql";
import { Base } from "./Base";
import { Device } from "../modules/devices/Device.entity";
import { InspectionFormItem } from "./InspectionFormItem";
import { Vehicle } from "../modules/vehicles/Vehicle.entity";

@Entity()
@ObjectType()
export class InspectionForm extends Base {
  @Field()
  @Property({ unique: true })
  name: string;

  @Field()
  @Property()
  createdBy: number;

  @Field(() => [InspectionFormItem])
  @OneToMany(
    () => InspectionFormItem,
    (inspectionFormItem) => inspectionFormItem.inspectionForm
  )
  inspectionFormItem = new Collection<InspectionFormItem>(this);
}
