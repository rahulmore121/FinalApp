import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { BookSchema } from './user.models';
@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://rahulmore121:rahulmore121@cluster1.h3iqmfd.mongodb.net/?retryWrites=true&w=majority',
    ),
    MongooseModule.forFeature([{ name: 'book', schema: BookSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
