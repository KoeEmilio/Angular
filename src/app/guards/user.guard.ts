import { CanMatchFn, Route, UrlSegment } from '@angular/router';
import { inject } from '@angular/core';
import { UserService } from '../services/user.service';

export const userGuard: CanMatchFn = (
  route: Route,
  segments: UrlSegment[]
) => {
  const userService = inject(UserService);
  return userService.isUser();
};
