import { Resolver, Query, Mutation, Arg, FieldResolver, Root } from 'type-graphql';
import { CreateAppointmentInput } from '../dtos/inputs/create-appointment-input';
import { Appointment } from '../dtos/models/appointment-model';
import { Customer } from '../dtos/models/customer-model';

@Resolver(() => Appointment)
export class AppointmentsResolver {
    
  @Query(() => [Appointment])
  public async appointments() {
    return [
      {
        startsAt: new Date(),
        endsAt: new Date(),
      }
    ];
  }

  
  @Mutation(() => Appointment)
  public async createAppointment(@Arg('data') data: CreateAppointmentInput) {
    const appointment = {
      startsAt: data.startsAt,
      endsAt: data.endsAt,
    }
    
    return appointment;
  }

  @FieldResolver(() => Customer)
  public async customer(@Root() appointment: Appointment) {
   return {
      name: 'John Doe'
   }
  }
}
