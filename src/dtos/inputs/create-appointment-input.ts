import { InputType, Field } from 'type-graphql';

@InputType()
export class CreateAppointmentInput {

  @Field()
  public customerId: string;

  @Field()
  public startsAt: Date;

  @Field()
  public endsAt: Date;
}
