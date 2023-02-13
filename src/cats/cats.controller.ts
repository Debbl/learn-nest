import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  Ip,
  Param,
  Post,
  Query,
  Redirect,
  Req,
} from '@nestjs/common';
import { Request } from 'express';
import { CreateCatDto } from './create-cat.dto';

@Controller('cats')
class CatsControllerOld {
  @Get()
  @HttpCode(200)
  @Redirect('https://aiwan.run')
  findAll(@Req() request: Request, @Ip() ip: Pick<Request, 'ip'>) {
    // return 'This action returns all cats';

    console.log(ip);

    console.log(request.body);
    console.log(ip);

    // return JSON.stringify(request.body + 'body');
    return { url: 'https://aiwan.run', statusCode: 301 };
  }
  @Get('aaa')
  find(): string {
    return 'aaa';
  }
  @Post()
  @Header('Cache-Control', 'aaa')
  create(): string {
    return 'This action adds a new cat';
  }

  @Get('docs')
  @Redirect('https://docs.nestjs.com', 302)
  getDocs(@Query('version') version) {
    console.log(version);

    if (version && version === '5') {
      return { url: 'https://docs.nestjs.com/v5/' };
    }
  }

  @Get(':id')
  findOne(@Param() params): string {
    console.log(params.id);
    return `This action returns a #${params.id} cat`;
  }
}

@Controller('cats')
export class CatsController {
  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    return 'This action adds a new cat';
  }
}
