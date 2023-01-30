import {
  BadRequestException,
  CanActivate,
  ExecutionContext,
  Injectable,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class XRequestIdGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();

    const isValid = Object.keys(request.headers)
      .map((k) => k.toLowerCase())
      .includes('x-request-id');

    if (isValid) {
      return true;
    } else {
      throw new BadRequestException('X-Request-Id is missing');
    }
  }
}
