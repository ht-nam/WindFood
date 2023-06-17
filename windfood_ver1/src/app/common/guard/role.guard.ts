import { CanActivateFn } from '@angular/router';

export const roleGuard: CanActivateFn = (route, state) => {
  // Get the expected role from the route data
  const expectedRole = route.data['role'];
  // Get the current role from local storage
  const currentRole = localStorage.getItem('role');
  // Check if the current role matches the expected role
  if (currentRole === expectedRole) {
    // Return true to allow access
    return true;
  }
  // Return false to deny access
  return false;
};
