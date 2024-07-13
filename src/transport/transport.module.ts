import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { env, NATS_SERVICE } from 'src/config';

const NatsTransport = ClientsModule.register([
  {
    name: NATS_SERVICE,
    transport: Transport.NATS,
    options: {
      servers: env.natsServers,
    },
  },
]);

@Module({
  imports: [NatsTransport],
  exports: [NatsTransport],
})
export class TransportModule {}
