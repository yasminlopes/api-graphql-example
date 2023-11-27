import { ObjectType, Field } from 'type-graphql';

@ObjectType()
export class Appointment {

  @Field()
  public startsAt: Date;

  @Field()
  public endsAt: Date;
  
}
